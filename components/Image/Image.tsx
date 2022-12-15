import NextImage from "next/image";

// Remove this, if it will be deployed on Vercel
// This is needed to make NextImage work on GH pages
// Opt-out of image optimization
const customLoader = ({ src }: { src: string }) => {
  return src;
};

export default function Image(props: any) {
  if (!(props.width && props.height)) {
    return <img {...props} />;
  }

  return <NextImage {...props} loader={customLoader} />;
}
