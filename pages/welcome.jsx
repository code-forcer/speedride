// pages/welcome.js
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/WelcomePage.module.css'; 
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';

const WelcomePage = () => {
  const router = useRouter();

  const goToNextPage = () => {
    router.push('/safetypage');
  };

  return (
    <>
    <div className={styles.container}>
      {/* Centered Icon with Background Image */}
      <ThemeToggle/>
      <div className={styles.logoContainer}>
          <img className={styles.logo} src="/img/Frame 2.svg" alt="App Icon" />
          <img className={styles.logo} src="/img/1.png" alt="" srcset="" />
      </div>
      {/* Welcome Text and Arrow Icon */}
      <div className={styles.textContainer}>
        <h1>Welcome to Speed!</h1>
        <p>Your life moves fast and so do we. With Speed, book rides quickly and effortlessly. Wherever you're going, we're here to take you there.</p>
        
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

export default WelcomePage;
