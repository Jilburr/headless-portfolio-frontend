const Experiences = ({ experiences }) => {
  return (
    <section className="info">
      {experiences.map((experiences) => {
        return (
          <article key={experiences.id}>
            <hr />
            <span>{experiences.attributes.date}</span>
            <p>{experiences.attributes.text}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Experiences;
