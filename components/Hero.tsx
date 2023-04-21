import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className={styles.heroWords}>
        <h3>Introducing</h3>
        <h1>Hello  I'm </h1><h1 className={styles.name}>Ian Muchesia</h1>
        <p>
          a passionate full-stack developer with a focus on creating functional
          and visually appealing web and mobile applications. With 18 months of
          experience under my belt, I have a proven track record of delivering
          high-quality projects that exceed expectations. Let's build something
          great together!
        </p>
      </div>
    </section>
  );
};

export default Hero;
