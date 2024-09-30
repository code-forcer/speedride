// pages/welcome.js
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/WelcomePage.module.css'; 
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';

const readyPage = () => {
  const router = useRouter();

  const goToNextPage = () => {
    router.push('/signup');
  };

  return (
    <>
    <div className={styles.container}>
      {/* Centered Icon with Background Image */}
      <ThemeToggle/>
       <div className={styles.logoContainer}>
          <img className={styles.logo} src="/img/Frame 2.svg" alt="App Icon" />
          <img className={styles.logo} src="/img/2.png" alt="" srcset="" />
      </div>
      {/* Welcome Text and Arrow Icon */}
      <div className={styles.textContainer}>
        <h1>Ready to Ride?</h1>
        <p>Wherever you are, Speed is ready to take you 
where you need to go fast, safe, and reliable
 start your journey with peace of mind.</p>
        
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

export default readyPage;
