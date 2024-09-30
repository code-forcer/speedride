// pages/allPages.jsx

import Link from 'next/link';
import styles from '../styles/AllPages.module.css'; // Ensure you have the CSS module for styling if needed
import ThemeToggle from '../components/ThemeToggle';

const AllPages = () => {
    const pages = [
        { href: "/homescreen", label: "Home Screen" },
        { href: "/setnewpassword", label: "Set New Password" },
        { href: "/otpverification", label: "OTP Verification" },
        { href: "/forgotpassword", label: "Forgot Password" },
        { href: "/getstarted", label: "Get Started" },
        { href: "/verificationcomplete", label: "Verification Complete" },
        { href: "/termsofservice", label: "Terms of Service" },
        { href: "/faceverification", label: "Face Verification" },
        { href: "/readypage", label: "Ready Page" },
        { href: "/welcome", label: "Welcome" },
        { href: "/safetypage", label: "Safety Page" },
        { href: "/privacypolicy", label: "Privacy Policy" },
        { href: "/cancellationpolicy", label: "Cancellation Policy" },
        { href: "/profile", label: "Profile" },
        { href: "/setpassword", label: "Set Password" },
        { href: "/signup", label: "Sign Up" },
        { href: "/welcomeshow", label: "Landing page" },
        
        { href: "/contactsupport", label: "Contact support page" },
        { href: "/driverinfo", label: "Driver info page" },
        { href: "/chat", label: "Chat flow page" },
         { href: "/faq", label: "Faq  page" },
    ];

    // Sort the pages by the length of the label
    const sortedPages = pages.sort((a, b) => a.label.split(' ').length - b.label.split(' ').length);

    return (
        <div className={styles.container}>
            <img src="/img/welcomelogo.svg" className={styles.img}  alt="" srcset="" />
            <h1>All Pages</h1>
            <ThemeToggle />
            <ul>
                {sortedPages.map((page, index) => (
                    <li key={index}>
                        <Link href={page.href}>{page.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllPages;
