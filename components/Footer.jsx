import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
      <>
          <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer" className={styles.icon}
        >
           <FaTwitter />
          
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer" className={styles.icon}
        >
         <FaInstagram />
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer" className={styles.icon}
        >
          <FaFacebookF />
        </a>
      </footer>
      </>
  )
}
