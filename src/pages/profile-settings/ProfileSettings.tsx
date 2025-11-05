import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function ProfileSettings() {
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-ps">
          <div className="bs-icon-link-list">
            <div className="account-wrap">
              <Link to="/account-details" className="mod-icon-link">
                <div className="icon-wrap">
                  <i className="profile"></i>
                </div>
                <div className="data-wrap">
                  <strong>Mattia Binotta</strong>
                  <span>Account Details</span>
                </div>
                <i className="next-icon"></i>
              </Link>
            </div>
            <section>
              <div className="links-section">
                <Link to="/advisor-intro" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="advisor"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Advisor</strong>
                    <span>Details, Authorization</span>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="/chat" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="chat-setting"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Chat</strong>
                    <span>Track chats, chat details</span>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="/highlight-list" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="highlight-setting"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Highlights</strong>
                    <span>Check your booked events</span>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="/language-selection" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="language"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Language</strong>
                    <span>Change your language</span>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="/privacy-security" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="shield"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Privacy & Security</strong>
                    <span>Secure your account</span>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="/customer-support" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="sms"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Customer support</strong>
                    <span>FAQs, Contact Asia Impact</span>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfileSettings;
