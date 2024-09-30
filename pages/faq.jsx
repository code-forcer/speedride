import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";  // Importing the back arrow icon from react-icons
import styles from "../styles/Faq.module.css";
import Footer from "../components/Footer";
const faqData = [
  {
    question: "How does fare estimation work?",
    answer: (
      <ul>
        <li>Distance</li>
        <li>Time</li>
        <li>Ride</li>
        <li>Dynamic Pricing</li>
      </ul>
    ),
  },
  {
    question: "How do I book a ride?",
    answer: "To book a ride, open the app, select your destination, choose your ride type, and confirm.",
  },
  {
    question: "How do I cancel a ride?",
    answer: "You can cancel a ride through the app by selecting the ride and pressing the cancel button.",
  },
  {
    question: "How can I contact my driver?",
    answer: "Once your ride is booked, you can contact your driver through the app.",
  },
  {
    question: "How do I rate my driver?",
    answer: "After your ride, you can rate your driver on a scale of 1-5 stars in the app.",
  },
  {
    question: "What happens if my ride is canceled?",
    answer: "If your ride is canceled, you will be notified via the app, and you can rebook a ride.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <header className={styles.header}>
       {/* Back Button */}
      <div className={styles.backIcon}  onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
        <h2>FAQ</h2>
      </header>

      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className={styles.icon}>
               <img src="/img/Expand_right.svg" alt="" srcset="" />
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
          </div>
          <Footer/>
    </div>
  );
};

export default Faq;
