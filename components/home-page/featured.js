import { Fragment } from "react";
import PostGrid from "../posts/post-grid";
import classes from "./featured.module.css";

export default function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
