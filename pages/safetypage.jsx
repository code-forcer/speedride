// pages/welcome.js
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/WelcomePage.module.css'; 
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';

const safetyPage = () => {
  const router = useRouter();

  const goToNextPage = () => {
    router.push('/readypage');
  };

  return (
    <>
    <div className={styles.container}>
      {/* Centered Icon with Background Image */}
      <ThemeToggle/>
      <div className={styles.logoContainer}>
          <img src="/img/Frame 2.svg" alt="App Icon" />
            <img className={styles.logo} src="/img/3.png" alt="" srcset="" />
      </div>
      {/* Welcome Text and Arrow Icon */}
      <div className={styles.textContainer}>
        <h1>Your Safety, Our Priority</h1>
        <p>Track your ride in real-time and pay securely. 
Our drivers are vetted, so you can relax and
 enjoy the journey.</p>
        
        {/* Right Arrow Circle Icon for Next Page */}
        <div className={styles.nextPageArrow} onClick={goToNextPage}>
          <img src="/img/Arrow_down_light.svg" alt="Next Page Arrow" />
        </div>
        
      </div>
     
    </div>
     <Footer/>
    </>
  );
};

export default safetyPage;
