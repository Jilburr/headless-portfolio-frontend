import ReactMarkdown from "react-markdown";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Image from "next/image";
import { fetchAPI } from "../../lib/api";
import Solutions from "../../components/Solutions";
import { getStrapiMedia } from "../../lib/media";
import { ArrowSquareOut, GithubLogo } from "phosphor-react";
import OtherProjects from "../../components/OtherProjects";

const Project = ({ projects, project, socials }) => {
  const seo = {
    metaTitle: project.attributes.title,
    metaSummery: project.attributes.summery,
    shareImage: project.attributes.image,
    project: true,
  };

  const css = { objectFit: "cover", objectPosition: 'top', width: '100%', height: '100%' }

  return (
    <Layout socials={socials} pageTitle={project.attributes.title}>
      <Seo seo={seo} />
      <section className="project">
        <div className="project__header">
          <h2>{project.attributes.title}</h2>
          {project.attributes.WebsiteLink ? (<a target="blank_" href={project.attributes.WebsiteLink}><ArrowSquareOut size={32} weight="light" /></a>) : null}
          {project.attributes.RepositoryLink ? (<a target="blank_" href={project.attributes.RepositoryLink}><GithubLogo size={32} weight="light" /></a>) : null}
        </div>
        <div className="project__image-container">
          <Image
            responsive
            width='1440'
            height='650'
            sizes="100vw"
            style={css}
            src={getStrapiMedia(project.attributes.image)}
            alt={project.attributes.image.data.attributes.alternativeText || "picture"}
          />
        </div>
        <ReactMarkdown className="project__content">
          {project.attributes.content}
        </ReactMarkdown>
        <Solutions solutions={project.attributes.solutions.data} />
      </section>
      <OtherProjects projects={projects} />
    </Layout>

  );
};

export async function getStaticPaths() {
  const projectsRes = await fetchAPI("/projects", { fields: ["slug"] });

  return {
    paths: projectsRes.data.map((project) => ({
      params: {
        slug: project.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const qs = require('qs');
  const query = qs.stringify({
    filters: {
      slug: {
        $ne: params.slug
      },
    },
  }, {
    encodeValuesOnly: true
  });

  const [
    allProjects,
    projectsRes,
    socialsRes
  ] = await Promise.all([
    fetchAPI(`/projects?${query}`),
    fetchAPI("/projects", {
      filters: {
        slug: params.slug,
      },
      populate: ["image", "solutions.image"],
    }),
    fetchAPI("/socials", { populate: "*" }),
  ]);

  return {
    props: {
      projects: allProjects.data,
      project: projectsRes.data[0],
      socials: socialsRes.data
    },
    revalidate: 1,
  };
}

export default Project;
