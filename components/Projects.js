const Projects = ({ projects }) => {
  {
    return (
      <section className="projects">
        {projects.map((projects, i) => {
          return (
            <div key={projects.id}>
              <span>0{i + 1}</span>
              <h3 className="hover-underline-animation">
                {projects.attributes.title}
              </h3>
            </div>
          );
        })}
      </section>
    );
  }
};

export default Projects;
