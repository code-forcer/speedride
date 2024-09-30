// pages/forgotpassword.js
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Optional if you want eye icon for visibility
import styles from '../styles/ForgotPassword.module.css'; // Import custom CSS
import Footer from '../components/Footer';

const ForgotPassword = () => {
  const [isPhoneVisible, setPhoneVisible] = useState(false);

  const togglePhoneVisibility = () => setPhoneVisible(!isPhoneVisible);

    return (
    <>
    <div className={styles.container}>
      {/* Title */}
      <h1>Forgot Password?</h1>
      <p>Enter your phone number or email, and we’ll help you reset it.</p>

      {/* Input for Email or Phone */}
      <div className={styles.inputContainer}>
        <label>Email or Phone Number</label>
        <div className={styles.inputWrapper}>
          <input
            type={isPhoneVisible ? 'text' : 'password'} // Optional: can toggle if you want to hide phone numbers
            placeholder="Enter Email or Phone Number"
            className={styles.input}
          />
          <span className={styles.eyeIcon} onClick={togglePhoneVisibility}>
            {isPhoneVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      {/* Send OTP Button */}
          <button className={styles.otpButton}>Send OTP</button>
          
      </div>
<Footer/>
</>
  );
};

export default ForgotPassword;
