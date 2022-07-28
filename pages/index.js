import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import SkillGroups from "../components/SkillGroups";
import { fetchAPI } from "../lib/api";

const Home = ({
  projects,
  skillgroups,
  skills,
  socials,
  homepage,
  experiences,
  heroText,
}) => {
  return (
    <Layout socials={socials}>
      <Seo seo={homepage.attributes.seo} />
      <Hero content={heroText} />
      <Experiences experiences={experiences} />
      <Projects projects={projects} />
      <SkillGroups skillgroups={skillgroups} skills={skills} />
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
    heroTextRes,
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
    fetchAPI("/hero-text", { populate: "*" }),
  ]);

  return {
    props: {
      homepage: homepageRes.data,
      socials: socialsRes.data,
      experiences: experiencesRes.data,
      projects: projectsRes.data,
      skillgroups: skillgroupsRes.data,
      skills: skillsRes.data,
      heroText: heroTextRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
