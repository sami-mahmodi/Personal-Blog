import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured";
import Hero from "../components/home-page/hero";

export default function HomePage() {
  return (
    <Fragment>
      <Hero /> <FeaturedPosts />
    </Fragment>
  );
}
