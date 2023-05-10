import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
  if (!image) return;

  const { alternativeText, width, height } = image.data.attributes
  const css = { objectFit: 'contain' }

  return (
    <NextImage
      responsive
      width={width}
      height={height}
      style={css}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
