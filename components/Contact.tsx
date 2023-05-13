import React from 'react'
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={styles.contact_section}>
        <h3>Chat With Me </h3>
        <div className={styles.contact_container}>
        <div className={styles.contact_details}>
        <div className={styles.contact__}>
<h5>ianmuchesia@yahoo.com</h5>
<Image  src='/email.png' height={100} width={100} alt='email' className={styles.contact__img}/>
            </div>
            <div className={styles.contact__}>
            <h5>+254 797 159 837</h5>
<Image  src='/call.png' height={100} width={100} alt='email' className={styles.contact__img}/>
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