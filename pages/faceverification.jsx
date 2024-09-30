// pages/faceverification.js
import React, { useState, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { useRouter } from 'next/router';
import styles from '../styles/FaceVerification.module.css';
import Footer from '../components/Footer';

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: 'user',
};

const FaceVerificationPage = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const router = useRouter();
  // Function to capture image from webcam
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc); // Store the captured image
  }, [webcamRef]);
 const nextpage = () => {
    router.push('/profile'); // Example routing logic
  };
  return (
      <div className={styles.container}>
           <div className={styles.backIcon} onClick={() => router.back()}>
        <img src="/img/backarrow.svg" alt="Back" />
      </div>
      

      <div className={styles.webcamContainer}>
        {/* Show captured image or webcam stream */}
        {capturedImage ? (
          <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className={styles.webcam}
          />
              )}
              
      </div>
    {/* Image Capture Section */}
      <h1 style={{ fontSize: '40px', textAlign: 'center',fontWeight:'bold' }}>Face Verification</h1>
      <p>Please ensure your face is clearly visible in the camera to verify your identity.</p>
      {/* Capture Button */}
      {!capturedImage && (
        <button className={styles.verifyButton} onClick={capture}>
          Capture
        </button>
      )}

      {/* Reset and Submit Buttons */}
      {capturedImage && (
        <>
          <button className={styles.verifyButton} onClick={() => setCapturedImage(null)}>
            Retake
          </button>
          <button className={styles.verifyButton} onClick={nextpage}>Let's Verify</button>
        </>
      )}

      <Footer />
    </div>
  );
};

export default FaceVerificationPage;
