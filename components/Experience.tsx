import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const experienceData = [
  {
    image: "html.png",
    title: "HTML",
  },
  {
    image: "css.png",
    title: "css",
  },
  {
    image: "javascript.png",
    title: "javascript",
  },
  {
    image: "react.png",
    title: "react",
  },
  {
    image: "tailwind.png",
    title: "tailwind",
  },
  {
    image: "typescript.png",
    title: "typescript",
  },
  {
    image: "postgreSQL.png",
    title: "postgreSQL",
  },
  {
    image: "nodejs.png",
    title: "node .js",
  },
  {
    image: "mongoDB.png",
    title: "mongoDB",
  },
];

const Experience = () => {
  return (
    <section className={styles.experience_section}>
      <h3>skills and Experience</h3>
      <div className={styles.experience_container}>
        <div className={styles.experience_technologies}>
         {experienceData.map((data, index)=>(
             <div className={styles.tech_card} key={index}>
             <div className={styles.tech_card_image_container}>
               <Image
                 src={`/${data.image}`}
                 alt={data.title}
                 width={500}
                 height={500}
                 className={styles.tech_card_image}
               />
             </div>
             <h4>{data.title}</h4>
           </div>
         ))}
        </div>
        <div className={styles.experience_years}></div>
      </div>
    </section>
  );
};

export default Experience;
