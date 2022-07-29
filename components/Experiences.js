import ReactMarkdown from "react-markdown";

const Experiences = ({ experiences }) => {
  return (
    <section className="info">
      {experiences.map((experiences) => {
        return (
          <article key={experiences.id}>
            <hr />
            <span>{experiences.attributes.date}</span>
            <ReactMarkdown>{experiences.attributes.content}</ReactMarkdown>
          </article>
        );
      })}
    </section>
  );
};

export default Experiences;
