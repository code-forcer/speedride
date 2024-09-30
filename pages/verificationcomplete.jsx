// pages/verificationcomplete.js
import { useRouter } from 'next/router';
import { FaCheckCircle } from 'react-icons/fa'; // FontAwesome for the checkmark icon
import styles from '../styles/VerificationComplete.module.css'; // Import custom CSS
import Footer from '../components/Footer';
const VerificationComplete = () => {
  const router = useRouter();

  // Function to navigate to the next page
  const handleContinue = () => {
    router.push('/next-page'); // Adjust the route based on your app flow
  };

    return (
      <>
    <div className={styles.container}>
      {/* Checkmark Icon */}
      <img className={styles.icon} src="/img/checkmark.svg" alt="App Icon" />
      {/* Completed Message */}
      <h1>Verification Complete</h1>
      <p>You’re all set! Your Face ID is now linked to your account for a faster, secure login experience.</p>

      {/* Continue Button */}
      <button className={styles.continueButton} onClick={handleContinue}>
        Continue
      </button>
            </div>
            <Footer/>
      </>
  );
};

export default VerificationComplete;
