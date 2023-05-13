import React, {useState} from 'react'
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


const testimonialData = [
  {
    testimonial: "Working with Ian has been an absolute pleasure. His attention to detail and creativity is unparalleled. I highly recommend him!",
    img:'/picture1.jpg',
    name: 'Velma Sagala',
    company: 'Majengo Exports Limited',
    designation: 'Manager, Sales and Marketing'
  },
  {
    testimonial: "I am beyond impressed with the work Ian did on my project. He is truly talented and exceeded my expectations.",
    img:'/picture2.jpg',
    name: 'Hillary Imamai',
    company: 'Kren Limited',
    designation: 'IT Support Kren, Kisumu'
  },
  {
    testimonial: "It's rare to find someone who can capture your vision perfectly, but Ian did just that. I couldn't be happier with the end result.",
    img:'/picture3.jpg',
    name: 'Kevin Wenani',
    company: 'Kapa Oil',
    designation: 'Procurement, Kapa Oil'
  }
]

const Testimonial = () => {

  const [ index , setIndex] = useState(0)

  const handleIndexForward =()=>{
    setIndex(prevIndex=>{
      if(prevIndex === testimonialData.length - 1){
        return 0
      }
      return prevIndex + 1
    })
  }

  const handleIndexBackward =()=>{
    setIndex(prevIndex=>{
      if(prevIndex === 0 ){
        return testimonialData.length - 1
      }
      return prevIndex - 1
    })
  }


  return (
    <section className={styles.testimonialContainer}>
        <div className={styles.testimonialCard}>
            <div className={styles.testimonial_image_container}>
                    <Image src={testimonialData[index].img} alt={testimonialData[index].img}  height={300} width={300} className={styles.testimonial_image} />
            </div>
            <div className={styles.testimonialContent}>
                <p>{testimonialData[index].testimonial} </p>
                <h4  className={styles.testimonial_person}>{testimonialData[index].name} </h4>
                <h5 className={styles.testimonial_person_title}>
                {testimonialData[index].designation} 
                </h5>
            </div>
  

        </div>

        <div className={styles.testimonial_navigate}>
      <div className={styles.testimonial_navigate_left} onClick={handleIndexForward}>
        <AiOutlineLeft/>
      </div>
      <div className={styles.testimonial_navigate_right} 
      onClick={handleIndexBackward}>
        <AiOutlineRight/>
      </div>

    </div>
    </section>
  )
}

export default Testimonial