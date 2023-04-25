import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroWords}>
        <h3>Introducing</h3>
        <h1 className={styles.hello}>Hello  I'm </h1><h1 className={styles.name}>Ian Muchesia</h1>
        <p>
          A passionate full-stack developer with a focus on creating functional
          and visually appealing web and mobile applications. With 18 months of
          experience under my belt, I have a proven track record of delivering
          high-quality projects that exceed expectations. Let's build something
          great together!
        </p>
        <button className={styles.ContactMe}>Contact Me</button>
      </div>
      <div className={styles.heroPictureSection}>
        <div className={styles.heroCircle}>

        </div>
        <Image
        src='/portfolio.png'
        width={300}
        height={300}
        className={styles.portfolioImage}
        alt="portfolio pic"/>
      </div>
    </section>
  );
};

export default Hero;
