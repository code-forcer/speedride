// pages/setpassword.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons for show/hide
import styles from '../styles/setpassword.module.css';
import Footer from '../components/Footer';

const SetpasswordPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility

  // Function to toggle visibility for the password field
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Function to toggle visibility for the confirm password field
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
 const router = useRouter();

  const back = () => {
    router.push('/signup'); // Example routing logic
  };
  const nextpage = () => {
    router.push('/faceverification'); // Example routing logic
  };
  return (
    <div className={styles.container}>
      {/* Back Icon */}
      <div className={styles.backIcon} onClick={() => router.back()}>
        <img src="/img/backarrow.svg" alt="Back" />
      </div>
      
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>Set Password</h1>
      <p>Create a strong password to secure your Speed account.</p>

      {/* Password Input */}
      <div className={styles.inputContainer}>
        <input
          type={passwordVisible ? 'text' : 'password'} // Toggle between password and text
          placeholder="Enter Password"
        />
        <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      {/* Confirm Password Input */}
      <div className={styles.inputContainer}>
        <input
          type={confirmPasswordVisible ? 'text' : 'password'} // Toggle between password and text
          placeholder="Confirm Password"
        />
        <span onClick={toggleConfirmPasswordVisibility} className={styles.eyeIcon}>
          {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button className={styles.signupButton} onClick={nextpage}>Set Password</button>

      <p className={styles.terms}>At least 8 characters or numbers</p>

      <Footer />
    </div>
  );
};

export default SetpasswordPage;
