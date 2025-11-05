import { Link } from "react-router-dom";
import styles from "./pages-style.module.scss";

function PageListing() {
  return (
    <div className={`${styles.listWrap}`}>
      <ul>
        <li>
          <Link to="/onboarding">Onboarding</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/impact">Impact</Link>
        </li>
        <li>
          <Link to="/portfolios">Portfolio</Link>
        </li>
        <li>
          <Link to="/opportunities">Opportunities</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/portfolio-detail">Portfolio Detail</Link>
        </li>
        <li>
          <Link to="/news-list">News List</Link>
        </li>
        <li>
          <Link to="/news-detail">News Detail</Link>
        </li>
        <li>
          <Link to="/report-list">Report List</Link>
        </li>
        <li>
          <Link to="/report-detail">Report Detail</Link>
        </li>
        <li>
          <Link to="/insight-list">Insight List</Link>
        </li>
        <li>
          <Link to="/insight-detail">Insight Detail</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {/* <li>
          <Link to="/otp">OTP</Link>
        </li> */}
        <li>
          <Link to="/signup">Signup Landing</Link>
        </li>
        <li>
          <Link to="/signup/intro">Signup Intro</Link>
        </li>
        <li>
          <Link to="/signup/details-form">Personal Detail</Link>
        </li>
        <li>
          <Link to="/signup/details-form/identity-proof">Identity Proof</Link>
        </li>
        <li>
          <Link to="/signup/details-form/residence-proof">Residence Proof</Link>
        </li>
        <li>
          <Link to="/signup/details-form/company-details">Company Details</Link>
        </li>
        <li>
          <Link to="/signup/details-form/ubo-details">UBO Details</Link>
        </li>
        <li>
          <Link to="/signup/details-form/legal-representative-details">
            Legal Representative Details
          </Link>
        </li>
        <li>
          <Link to="/signup/details-form/contact-details">
            Point of Contact Details
          </Link>
        </li>
        <li>
          <Link to="/signup/confirm-details">Confirm Details</Link>
        </li>
        <li>
          <Link to="/profile-settings">Profile Settings</Link>
        </li>
        <li>
          <Link to="/account-details">Account Details</Link>
        </li>
        <li>
          <Link to="/advisor-intro">Add Advisor Landing</Link>
        </li>
        <li>
          <Link to="/add-advisor">Add Advisor Settings</Link>
        </li>
        <li>
          <Link to="/advisor-list">Advisor Lists</Link>
        </li>
        <li>
          <Link to="/advisor-client">Advisor Clients</Link>
        </li>
        <li>
          <Link to="/profile-update">Setting-up Profile</Link>
        </li>
        <li>
          <Link to="/approval-page">Approval Page</Link>
        </li>
        <li>
          <Link to="/language-selection">Language Selection</Link>
        </li>
        <li>
          <Link to="/privacy-security">Privacy Security</Link>
        </li>
        <li>
          <Link to="/customer-support">Customer Support</Link>
        </li>
        <li>
          <Link to="/active-devices">Active Devices</Link>
        </li>
        <li>
          <Link to="/explore-page">Exploration Component</Link>
        </li>
      </ul>
    </div>
  );
}

export default PageListing;
