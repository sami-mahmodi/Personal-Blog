import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";

const Myarray = {
  slug: "folder-1",
  title: "Getting started with nextjs",
  image: "image-1.jpg",
  date: "1999-04-02",
  content: "# Getting Started with nextjs one of reactjs frameworks!",
};

export default function PostContent() {
  const imagePath = `/images/posts/${Myarray.slug}/${Myarray.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={Myarray.title} image={imagePath} />
      <ReactMarkdown>{Myarray.content}</ReactMarkdown>
    </article>
  );
}
