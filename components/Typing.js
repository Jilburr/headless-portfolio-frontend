import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typing() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#typed-strings",
      typeSpeed: 20,
      startDelay: 500,
      backDelay: 1200,
      strings: [
        "Hi there!",
        "Front-End Developer and professional photographer living in Amsterdam. Currently making websites at Greymen &amp; Co.",
      ],
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
