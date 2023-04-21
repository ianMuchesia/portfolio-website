import React, {useState} from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosMenu} from "react-icons/io";
const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.navCenter}>
      <Image
       src='/logo.png'
       alt="logo"
       width={100}
       height={50}

      />
  <AiOutlineMenu className={styles.menuBar}  onClick={()=>setToggle(true)}/>
      </div>
    
      <nav className={toggle?styles.nav:styles.hideLinks}>
        <div className={styles.dropdownMenu}>
          <h2>Welcome</h2>
        <AiOutlineClose  className={styles.menuBar} onClick={()=>setToggle(false)}/>
        </div>
      
        <ul className={styles.menuList}>
          <li>About</li>
          <li>Portfolio</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Portfolio</li>
         
        </ul>
      </nav>
      <button className={styles.ContactMe}>Contact Me</button>
    </header>
  )
}

export default Navbar