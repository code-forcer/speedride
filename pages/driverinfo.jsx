// pages/driverinfo.js
import { FaArrowLeft, FaStar, FaCopy, FaPhone, FaCommentDots } from 'react-icons/fa'; // Icons
import styles from '../styles/DriverInfo.module.css'; // Custom CSS
import Footer from '../components/Footer';
const DriverInfo = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("+213 123-567-789"); // Copy phone number
    alert("Phone number copied!");
  };

  return (
    <div className={styles.container}>
      {/* Back Button */}
      <div className={styles.backIcon} onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>

      {/* Driver Jumbotron */}
      <div className={styles.jumbotron}>
        <img src="/img/driverimage.svg" alt="Driver" className={styles.driverImage} />
        <h2>Moses Adam</h2>
        <div className={styles.phoneNumber}>
          +213 123-567-789
          <FaCopy className={styles.copyIcon} onClick={handleCopy} />
        </div>
      </div>

      {/* Second Jumbotron with Driver Stats */}
      <div className={styles.statsJumbotron}>
        <div className={styles.statsItem}>
          <img src="/img/Star 5.svg" className={styles.icon} />
          <p>5.0</p>
          <span>Rating</span>
        </div>
        <div className={styles.statsItem}>
          <img src="/img/humbleicons_car.svg" className={styles.icon} />
          <p>67</p>
          <span>Ride Order</span>
        </div>
        <div className={styles.statsItem}>
          <img src="/img/Y.svg" className={styles.icon} />
          <p>2</p>
          <span>Years</span>
        </div>
      </div>

      {/* Driver Details */}
      <div className={styles.details}>
        <p>Member Since:<span className={styles.floatright}>DEC 30, 2021</span> </p>
        <p>Car Model:<span className={styles.floatright}>Toyota, Spider</span> </p>
        <p>Color:<span className={styles.floatright}> Green</span></p>
        <p>Plate Number:<span className={styles.floatright}> WSD345</span></p>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.callButton}>
          <FaPhone /> Call
        </button>
        <button className={styles.chatButton}>
          <FaCommentDots /> Chat
        </button>
          </div>
          <Footer/>
    </div>
  );
};

export default DriverInfo;
