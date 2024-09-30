// pages/chat.js
import { FaArrowLeft, FaPhone, FaCamera, FaPaperclip, FaPaperPlane } from 'react-icons/fa'; // Icons
import styles from '../styles/Chat.module.css'; // Import custom CSS
import Footer from '../components/Footer'
const ChatPage = () => {
  return (
    <div className={styles.container}>
      {/* Header with back button, driver name, call, and camera icons */}
      <div className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => window.history.back()} />
        <h1>Moses Adam</h1>
        <FaPhone className={styles.icon} />
        <FaCamera className={styles.icon} />
      </div>

      {/* Chat flow */}
      <div className={styles.chatFlow}>
        {/* Driver message */}
        <div className={styles.chatMessage}>
          <img src="/img/driverimage.svg" alt="Driver" className={styles.avatar} />
          <div className={styles.messageBubble}>Hi! I’m waiting near the entrance
of the mall.</div>
        </div>

        {/* Passenger message */}
        <div className={`${styles.chatMessage} ${styles.passengerMessage}`}>
          <div className={styles.messageBubble}>Got it! I’ll be there in 3 minutes.</div>
          <img src="/img/passenger.png" alt="Passenger" className={styles.avatar} />
              </div>
               <div className={`${styles.chatMessage} ${styles.passengerMessage}`}>
          <div className={styles.messageBubble}>Can you please come to the left side?
 It’s less crowded.</div>
          <img src="/img/passenger.png" alt="Passenger" className={styles.avatar} />
        </div>

        {/* Driver message */}
        <div className={styles.chatMessage}>
          <img src="/img/driverimage.svg" alt="Driver" className={styles.avatar} />
          <div className={styles.messageBubble}>Sure, I’ll be there shortly.</div>
              </div>
                <div className={`${styles.chatMessage} ${styles.passengerMessage}`}>
          <div className={styles.messageBubble}>Typing........</div>
          <img src="/img/passenger.png" alt="Passenger" className={styles.avatar} />
        </div>
            
      </div>

       {/* Chat input */}
      <div className={styles.chatInputContainer}>
        <FaPaperclip className={styles.fileIcon} />
        <input type="text" placeholder="Send a message..." className={styles.chatInput} />
        <FaPaperPlane className={styles.sendIcon} />
          </div>
          <Footer/>
    </div>
  );
};

export default ChatPage;
