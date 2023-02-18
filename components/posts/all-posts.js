import classes from "./all-posts.module.css";
import PostGrid from "./post-grid";

export default function Allposts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts Here</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
