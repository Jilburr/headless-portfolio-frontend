import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typing({ content }) {
  const heroText = content.attributes.content;
  const splittedHeroText = heroText.split(",");

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#typed-strings",
      typeSpeed: 20,
      startDelay: 500,
      backDelay: 1200,
      strings: splittedHeroText,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h2>
      <span ref={el}></span>
    </h2>
  );
}
