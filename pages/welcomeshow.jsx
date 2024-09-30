import Image from "next/image";
import styles from "../styles/page.module.css";
import ThemeToggle from "../components/ThemeToggle";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { FaTruckFast } from "react-icons/fa6";

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeToggle/>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/img/logotwo.svg"
          alt="speed-logo"
          width={300}
          height={100}
          priority
        />
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTruckFast className={styles.FaTruckFast } />
           <code>SpeedRide.</code>
          </a>
          <a
            href="/welcome"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Get Started 
          </a>
        </div>
      </main>
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
    </div>
  );
}
