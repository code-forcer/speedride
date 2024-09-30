// pages/privacypolicy.js
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome for back arrow icon
import styles from '../styles/PrivacyPolicy.module.css'; // Import custom CSS
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const router = useRouter();

    return (
      <>
    <div className={styles.container}>
      {/* Back Button */}
      <div className={styles.backIcon} onClick={() => router.back()}>
        <FaArrowLeft />
      </div>

      {/* Title */}
      <h1>Privacy Policy</h1>

      {/* Privacy Policy Content */}
      <p>At Speed, your privacy is our priority. We collect your personal information such as name, phone number, and payment details when you sign up. We also gather your location data to connect you with nearby drivers and provide accurate ride estimates.</p>

      <p>Your data is used to enhance your experience, such as enabling faster ride bookings, sending you notifications, and offering relevant promotions. We use your location data to ensure accurate pickups and improve ride safety.</p>

      <p>To protect your information, we use encryption and secure servers. Your payment details are processed through a trusted payment gateway, and we do not store sensitive information like credit card numbers.</p>

      <p>You have the right to access, correct, or delete your personal data. You can also manage your privacy settings directly in the app. We retain your data for as long as necessary to provide the service or as required by law. If you delete your account, all personal information will be removed.</p>
            </div>
            <Footer/>
      </>
  );
};

export default PrivacyPolicy;
