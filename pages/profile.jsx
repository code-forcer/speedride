// pages/profile.js
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'; // For phone number input with country code
import 'react-phone-input-2/lib/style.css'; // Default CSS for PhoneInput
import styles from '../styles/Profile.module.css'; // Import your CSS module

const ProfilePage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const [isOnline, setIsOnline] = useState(true); // State for online/offline status
  return (
    <div className={styles.container}>
       <h1 style={{ fontSize: '30px', textAlign: 'center',fontWeight:'bold' }}>Profile</h1>
      {/* Profile Image with Status Dot */}
      <div className={styles.profileImageContainer}>
        <img src="/img/Rectangle 27.png" alt="Profile" className={styles.profileImage} />
        <span className={`${styles.statusDot} ${isOnline ? styles.online : styles.offline}`}></span>
      </div>
      {/* Full Name Input */}
      <div className={styles.inputContainer}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter Full Name"
        />
      </div>

      {/* Email Input */}
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
      </div>

      {/* Phone Number Input with Country Code */}
      <div className={styles.inputContainer}>
        <label htmlFor="phone">Phone Number</label>
        <PhoneInput
          country={'dz'} // Default country code (+213 for Algeria)
          value={phoneNumber}
          onChange={(phone) => setPhoneNumber(phone)}
          inputClass={styles.phoneInput} // Apply your custom styles
        />
      </div>

      {/* Gender Selection */}
      
      <div className={styles.genderContainer}>
         <label><h3><u>Gender</u></h3></label>
        <div className={styles.genderOptions}>
          <label className={styles.genderLabel}>
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            Female
          </label>
          <label className={styles.genderLabel}>
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            Male
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.saveButton}>Save</button>
      </div>
    </div>
  );
};

export default ProfilePage;
