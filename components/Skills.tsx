import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const skillsData = [
  {
    image: "frontend.jpg",
    title: "Frontend Development",
    description:
      "My expertise lies in expertly crafting seamless and intuitive user experiences for web and mobile, ensuring that every aspect is tailored to your unique needs.",
  },
  {
    image: "backend.png",
    title: "Backend Development",
    description:
      "I specialize in developing robust and scalable server-side applications for web and mobile, leveraging cutting-edge technologies to deliver reliable and high-performance solutions that meet your business needs.",
  },
  {
    image: "mobile.jpg",
    title: "Mobile Apps Development",
    description:
      "I am dedicated to developing functional, engaging, and user-friendly mobile applications, flawlessly executing every aspect of the development process to ensure that your app stands out in today's crowded app market.",
  },
];
const Skills = () => {
  return (
    <section className={styles.skills_section}>
      
      <h1 className={styles.skills_title}>My <span>Approach</span>  to Delivering <span>Outstanding Results</span></h1>
      <p>
        I am committed to delivering projects that exceed expectations and
        address unique client needs. Let's work together to create something
        great that{" "}
        <span>
          enhances your business and leaves a lasting impact on your audience.
        </span>{" "}
      </p>
      <h2></h2>
      <div className={styles.skills_container}>
        {skillsData.map((data, index) => (
          <div className={styles.skills_container_card} key={index}>
            <Image
              src={`/${data.image}`}
              alt={data.title}
              className={styles.skills_container_card_image}
              width={500}
              height={500}
            />

            <h3 className={styles.skills_card_header}>{data.title}</h3>
            <p className={styles.skills_text}>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
