import Typing from "./Typing.js";

const Hero = ({ content }) => {
  return (
    <section className="hero">
      <Typing content={content} />
    </section>
  );
};

export default Hero;
