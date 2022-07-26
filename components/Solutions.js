import Image from "next/image";
import { getStrapiMedia } from "../lib/media";

const Solutions = ({ solutions }) => {
  return (
    <div className="solutions">
      {solutions.map((solution, i, solutions) => {
        if (i + 1 !== solutions.length) {
          return (
            <>
              <Image
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
                src={getStrapiMedia(solution.attributes.image)}
                alt={solution.attributes.alternativeText || ""}
              />
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </>
          );
        } else {
          return (
            <>
              <Image
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
                src={getStrapiMedia(solution.attributes.image)}
                alt={solution.attributes.alternativeText || ""}
              />
            </>
          );
        }
      })}
    </div>
  );
};

export default Solutions;
