// pages/cancellationpolicy.js
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome for back arrow icon
import Footer from '../components/Footer';
import styles from '../styles/CancellationPolicy.module.css'; // Import your custom CSS

const CancellationPolicy = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
          {/* Back Button */}
    <div className={styles.title}>
      <div className={styles.backIcon} onClick={() => router.back()}>
        <FaArrowLeft />
      </div>

      {/* Title */}
      <h1>Cancellation Policy</h1>
    </div>
      {/* Policy Content */}
      <ul className={styles.policyList}>
              <p>We understand that plans can change. Here’s how our cancellation policy works: </p>
        <li>
          <strong>Free Cancellation:</strong> You can cancel your ride for free within the first 2 minutes of booking, as long as the driver has not arrived or started heading to your location.
        </li>
        <li>
          <strong>Late Cancellation Fee:</strong> If you cancel after the driver is en route or has arrived, a cancellation fee will be charged to cover the driver’s time and effort.
        </li>
        <li>
          <strong>Driver-Initiated Cancellations:</strong> If the driver cancels the ride because of an incorrect address or inability to locate you, the ride will be canceled automatically, and no fee will be applied.
        </li>
        <li>
          <strong>Special Circumstances:</strong> You won’t be charged a cancellation fee if the driver is late, not following GPS directions, or requests you to cancel the ride.
        </li>
        <li>
          <strong>No-Show Fee:</strong> If the driver arrives at your pickup location and you don’t show up within 5 minutes, a no-show fee will be charged.
        </li>
          </ul>
          <Footer/>
    </div>
  );
};

export default CancellationPolicy;
