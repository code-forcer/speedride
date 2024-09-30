// pages/signup.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaArrowLeft } from 'react-icons/fa';
import styles from '../styles/Signup.module.css';
import Footer from '../components/Footer';

const SignupPage = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(new Array(4).fill('')); // Array to store the 6 digits of OTP
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSignup = () => {
    if (phoneNumber) {
      console.log(`Sending OTP to ${phoneNumber}`);
      setShowOtpInput(true); // Show OTP input field after sending OTP
    }
  };

  const handleOtpChange = (element, index) => {
    // Update the OTP value in the array
    if (/^[0-9]$/.test(element.value)) {
      let newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Automatically focus on the next input
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join(''); // Combine array values into a string
    if (enteredOtp === '1234') { // Example OTP logic, replace with real verification
      console.log('OTP verified');
      router.push('/next-page');
    } else {
      alert('Incorrect OTP');
    }
  };

  const resendOtp = () => {
    console.log(`Resending OTP to ${phoneNumber}`);
    // Logic to resend OTP goes here
  };
const back = () => {
    router.push('/readypage'); // Example routing logic
  };

const nextpage = () => {
    router.push('/setpassword'); // Example routing logic
  };
  return (
    <div className={styles.container}>
      {/* Back Icon */}
      <div className={styles.backIcon} onClick={() => router.back()}>
      <img src="/img/backarrow.svg" alt="" srcset="" />
      </div>

      {/* Conditional Rendering: Phone Number or OTP */}
      {!showOtpInput ? (
        <>
          <h1>Enter Your Phone Number</h1>
          <p>Enter your phone number. We will send you a verification code to verify your account.</p>

          <div className={styles.inputContainer}>
            <label htmlFor="phone">Phone Number</label>
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputClass={styles.phoneInput}
              containerClass={styles.phoneContainer}
              buttonClass={styles.phoneButton}
            />
          </div>

          <button className={styles.signupButton} onClick={handleSignup}>
            Send OTP
          </button>
        </>
      ) : (
        <>
          <h1  style={{fontSize:'30px'}}>Enter OTP</h1>
          <p>We have sent a verification code to your number. Please enter it below to verify your account.</p>

          {/* Six input fields for the OTP */}
          <div className={styles.otpContainer}>
            {otp.map((data, index) => (
              <input
                type="text"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleOtpChange(e.target, index)}
                onFocus={(e) => e.target.select()} // Automatically select input on focus
                className={styles.otpInput}
              />
            ))}
          </div>

          <p className={styles.resendText}>
              Didn’t receive the code? <span onClick={resendOtp}>Resend</span> <br /><br />
              <h6 style={{textAlign:'center',padding:'5px'}}><span style={{color:'#1ec40a'}}>Sent: </span> OTP expires in 30 seconds</h6>
          </p>

            <button className={styles.signupButton}
            onClick={nextpage}>
            Continue
          </button>
                      
         
        </>
          )}
            <p className={styles.terms}>
        By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
          </p>
          <Footer/>
    </div>
  );
};

export default SignupPage;
