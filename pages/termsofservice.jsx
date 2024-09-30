// pages/termsofservice.js
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome for back arrow icon
import styles from '../styles/TermsOfService.module.css'; // Import your custom CSS
import Footer from '../components/Footer';

const TermsOfService = () => {
  const router = useRouter();

    return (
      <>
    <div className={styles.container}>
      {/* Back Button */}
      <div className={styles.backIcon} onClick={() => router.back()}>
        <FaArrowLeft />
      </div>

      {/* Title */}
      <h1>Terms of Service</h1>

      {/* Terms of Service Content */}
      <p>Welcome to Speed! By using our app, you agree to the following terms and conditions. You are required to provide accurate personal information and comply with the app’s rules. Misuse of the service, such as making fake bookings or harassing drivers, is prohibited.</p>

      <p>You are responsible for keeping your account secure. This includes maintaining the confidentiality of your login details and notifying us immediately if you notice any unauthorized use of your account.</p>

      <p>When booking a ride, make sure your location and payment details are correct. Fares are calculated based on the distance, time, and demand at the time of booking.</p>

      <p>While we strive to offer a seamless experience, occasional disruptions (e.g., GPS errors, traffic conditions) may occur. We reserve the right to suspend or terminate your account if you violate these terms, engage in fraudulent activities, or fail to meet payment obligations.</p>

      <p>Speed is not liable for delays, cancellations, or other issues beyond our control. However, we will do our best to resolve any disputes and ensure a smooth experience.</p>
      </div>
    <Footer/></>
  );
};

export default TermsOfService;
