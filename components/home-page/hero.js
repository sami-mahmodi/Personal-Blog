import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sami.jpg"
          alt="An image showing me"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi I am Sami</h1>
      <p>
        I am writing about front-end development espically react and angular!
      </p>
    </section>
  );
}
