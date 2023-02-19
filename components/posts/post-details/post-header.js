import classes from "./post-header.module.css";
import Image from "next/image";
export default function PostHeader(props) {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} width={200} height={150} />
    </header>
  );
}
