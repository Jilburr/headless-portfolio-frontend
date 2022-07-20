import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Projects from "../components/Projects";
import Seo from "../components/seo";
import SkillGroups from "../components/SkillGroups";
import { fetchAPI } from "../lib/api";

const Home = ({
  projects,
  skillgroups,
  skills,
  socials,
  homepage,
  experiences,
}) => {
  return (
    <Layout socials={socials}>
      <main>
        <Seo seo={homepage.attributes.seo} />
        <Hero />
        <Experiences experiences={experiences} />
        <Projects projects={projects} />
        <SkillGroups skillgroups={skillgroups} skills={skills} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    homepageRes,
    socialsRes,
    experiencesRes,
    projectsRes,
    skillgroupsRes,
    skillsRes,
  ] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
    fetchAPI("/socials", { populate: "*" }),
    fetchAPI("/experiences", { populate: "*" }),
    fetchAPI("/projects", { populate: "*" }),
    fetchAPI("/skillgroups", { populate: "*" }),
    fetchAPI("/skills", { populate: "*" }),
  ]);

  return {
    props: {
      homepage: homepageRes.data,
      socials: socialsRes.data,
      experiences: experiencesRes.data,
      projects: projectsRes.data,
      skillgroups: skillgroupsRes.data,
      skills: skillsRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
