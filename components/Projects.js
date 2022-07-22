import Link from "next/link";

const Projects = ({ projects }) => {
  {
    return (
      <section className="projects">
        {projects.map((project, i) => {
          return (
            <div key={project.id}>
              <span>0{i + 1}</span>
              <Link href={`/project/${project.attributes.slug}`}>
                <a>
                  <h3 className="hover-underline-animation">
                    {project.attributes.title}
                  </h3>
                </a>
              </Link>
            </div>
          );
        })}
      </section>
    );
  }
};

export default Projects;
