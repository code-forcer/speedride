// pages/setnewpassword.js
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // For show/hide eye icon
import styles from '../styles/SetNewPassword.module.css'; // Import custom CSS
import Footer from '../components/Footer';

const SetNewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!isConfirmPasswordVisible);

    return (
    <>
    <div className={styles.container}>
      {/* Title */}
      <h1>Set New Password</h1>
      <p>Create a strong password to secure your Speed account.</p>

      {/* New Password Input */}
      <div className={styles.inputContainer}>
        <label>Enter New Password</label>
        <div className={styles.inputWrapper}>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Enter new Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={styles.input}
          />
          <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      {/* Confirm Password Input */}
      <div className={styles.inputContainer}>
        <label>Confirm New Password</label>
        <div className={styles.inputWrapper}>
          <input
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            placeholder="Confirm new Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
          />
          <span className={styles.eyeIcon} onClick={toggleConfirmPasswordVisibility}>
            {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      {/* Password Guidelines */}
      <p className={styles.guidelines}>At least 8 characters or numbers</p>

      {/* Continue Button */}
      <button className={styles.continueButton}>Continue</button>
      </div>
    <Footer/>
    </>
  );
};

export default SetNewPassword;
