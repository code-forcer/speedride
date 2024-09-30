// pages/otpverification.js
import { useState } from 'react';
import styles from '../styles/OTPVerification.module.css'; // Import custom CSS
import Footer from '../components/Footer';

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill('')); // Array to store each digit

  // Function to handle input changes
  const handleChange = (element, index) => {
    const value = element.value;
    if (!isNaN(value)) { // Only allow numbers
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if it's not the last one
      if (element.nextSibling && value !== '') {
        element.nextSibling.focus();
      }
    }
  };

  // Function to handle resend OTP logic
  const resendOTP = () => {
    console.log('Resend OTP');
    // Add logic for resending OTP here
  };

    return (
    <>
    <div className={styles.container}>
      {/* Title */}
      <h1>Forgot Password?</h1>
      <p>We have sent a code to **********08</p>

      {/* OTP Input Fields */}
      <div className={styles.otpContainer}>
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className={styles.otpInput}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()} // Automatically select input on focus
          />
        ))}
      </div>

      {/* Resend OTP */}
      <p className={styles.resendText}>
        Didn’t receive the code? <span onClick={resendOTP} className={styles.resendLink}>Resend</span>
      </p>

      {/* Verify Button */}
      <button className={styles.verifyButton}>Verify</button>
        </div>
      <Footer/>
    </>
  );
};

export default OTPVerification;
