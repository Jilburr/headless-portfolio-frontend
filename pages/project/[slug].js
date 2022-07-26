import ReactMarkdown from "react-markdown";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Image from "../../components/Image";
import { fetchAPI } from "../../lib/api";
import Solutions from "../../components/Solutions";

const Project = ({ project, socials }) => {
  const seo = {
    metaTitle: project.attributes.title,
    metaSummery: project.attributes.summery,
    shareImage: project.attributes.image,
    project: true,
  };

  return (
    <Layout socials={socials} pageTitle={project.attributes.title}>
      <Seo seo={seo} />
      <section className="project">
        <h2>{project.attributes.title}</h2>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image image={project.attributes.image} />
        <ReactMarkdown className="project__content">
          {project.attributes.description}
        </ReactMarkdown>
        <Solutions solutions={project.attributes.solutions.data} />
      </section>
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
  const [projectsRes, socialsRes] = await Promise.all([
    fetchAPI("/projects", {
      filters: {
        slug: params.slug,
      },
      populate: ["image", "solutions.image"],
    }),
    fetchAPI("/socials", { populate: "*" }),
  ]);

  return {
    props: { project: projectsRes.data[0], socials: socialsRes.data },
    revalidate: 1,
  };
}

export default Project;
