// pages/example.js
import { useState } from 'react';
import LocationModal from '../components/LocationModal'; // Import the modal component
import styles from '../styles/homescreen.module.css'; // Import your custom CSS

const HomescreenPage = () => {
  const [modalOpen, setModalOpen] = useState(true); // State to control modal visibility

  const handleEnableLocation = () => {
    // Logic to enable location
    console.log("Location enabled");
    setModalOpen(false); // Close the modal after enabling
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className={styles.container}>
      {/* Map background */}
      <div className={styles.mapBackground}>
        {/* Form card at the bottom */}
        <div className={styles.formCard}>
        <h4>Where would you like to go today?</h4>
       
<p>Enter your destination by clicking on the destination bar</p>
          <input type="text" placeholder="Enter your destination by clicking on the destination bar" />
        </div>
      </div>

      {/* Show the modal if open */}
      {modalOpen && (
        <LocationModal onClose={handleCloseModal} onEnable={handleEnableLocation} />
      )}
    </div>
  );
};

export default HomescreenPage;
