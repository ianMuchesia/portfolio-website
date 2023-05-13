import React from 'react'
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={styles.contact_section}>
        <h3>Chat With Me </h3>
        <div className={styles.contact_container}>
        <div className={styles.contact_details}>
        <div className={styles.contact_email}>
            
            </div>
            <div className={styles.contact_phone}>
            
            </div>
        </div>

        <form className={styles.contact_form}>
            <input type="text" placeholder='Your Name'/>
            <input type="text"   placeholder='Your Email'/>
            <textarea name="" id="" cols={30} rows={10}
             placeholder='Your Message'/>
            <button>Send Message</button>
            </form>
            </div>
    </section>
  )
}

export default Contact