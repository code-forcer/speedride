// pages/welcome.js
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // For show/hide eye icon
import { useRouter } from 'next/router';
import styles from '../styles/Getstarted.module.css'; // Import custom CSS for styling
import Footer from '../components/Footer';


const GetstartedPage = () => {
  const router = useRouter();

  const [isPhoneVisible, setPhoneVisible] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePhoneVisibility = () => setPhoneVisible(!isPhoneVisible);
  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);
    const handleFaceVerification = () => {
        console.log('Face Verification Initiated')
    }
  return (
    <div className={styles.container}>
      {/* Logo at the center */}
      <img src="/img/welcomelogo.svg" alt="App Logo" className={styles.logo} />

      {/* Text and form container */}
      <div className={styles.formContainer}>
        {/* Left-aligned Welcome Back with emoji hand */}
        <h1 className={styles.welcomeText}>
          Welcome Back <img src="/img/welcomeback.svg" alt="emoji" className={styles.emoji} />
        </h1>
        <p className={styles.subtitle}>Sign in to your account and get moving.</p>

        {/* Email or Phone Number input */}
        <div className={styles.inputContainer}>
          <label>Email or Phone Number</label>
          <div className={styles.inputWrapper}>
            <input
              type={isPhoneVisible ? 'text' : 'password'}
              placeholder="Enter Email or Phone Number"
              className={styles.input}
            />
            <span className={styles.eyeIcon} onClick={togglePhoneVisibility}>
              {isPhoneVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Password input */}
        <div className={styles.inputContainer}>
          <label>Password</label>
          <div className={styles.inputWrapper}>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Enter Password"
              className={styles.input}
            />
            <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Forget Password link */}
        <div className={styles.forgotPassword}>
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        {/* Sign in button */}
        <button className={styles.signInButton}>Sign In</button>
  
      {/* Or Section */}
      <div className={styles.orSection}>
        <hr className={styles.line} />
        <span className={styles.orText}>Or</span>
        <hr className={styles.line} />
      </div>

      {/* Face Verification Button */}
      <button className={styles.faceVerificationButton} onClick={handleFaceVerification}>
       <img src="/img/usefaceverification.svg" alt="" srcset="" />
      </button>

      {/* Sign Up Link */}
      <p className={styles.signUpText}>
        Don’t have an account? <span onClick={() => router.push('/signup')}>Sign Up</span>
                </p>
                 <Footer/>
          </div>
          </div>
  );
};

export default GetstartedPage;
