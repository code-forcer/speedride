// components/LocationModal.js
import React from 'react';
import styles from '../styles/LocationModal.module.css'; // Import your custom CSS

const LocationModal = ({ onClose, onEnable }) => {
  return (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
        <img src="/img/location.svg" alt="" srcset="" />
        <h1>Enable Location</h1>
        <p>To give you the best experience, we require permissions to access your location.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.enableButton} onClick={onEnable}>
            Enable Permission
          </button> <br /><br />
          <button className={styles.maybeLaterButton} onClick={onClose}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
