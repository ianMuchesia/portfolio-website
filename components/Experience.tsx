import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const experienceData = [
  {
    image: "HTML.png",
    title: "HTML",
  },
  {
     image: "CSS.png",
    title: "CSS",
  },
  {
    image: "JAVASCRIPT.png",
    title: "javascript",
  },
  {
    image: "REACT.png",
    title: "react",
  },
  {
    image: "TAILWIND.png",
    title: "tailwind",
  },
  {
    image: "TYPESCRIPT.png",
    title: "typescript",
  },
  {
    image: "POSTGRESQL.png",
    title: "postgreSQL",
  },
  {
    image: "NODE.png",
    title: "node .js",
  },
  {
    image: "MONGODB.png",
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
