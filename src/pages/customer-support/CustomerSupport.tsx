import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function CustomerSupport() {
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-ps">
          <div className="bs-form">
            <div className="search-wrap">
              <span className="search-icon"></span>
              <input type="text" placeholder="Search" />
              <button className="close-btn">
                <i></i>
              </button>
            </div>
          </div>
          <div className="bs-icon-link-list">
            <section>
              <div className="links-section">
                <h2 className="section-title">Select help topic</h2>
                <Link to="" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="message-question"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Getting Started</strong>
                    <span>Most Visited FAQ’s</span>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="user-square"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>My Account</strong>
                    <span>KYC - Referral - Documents</span>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="user"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Advisors</strong>
                    <span>Add - Delete - Chat</span>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="chat"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Chats</strong>
                    <span>Messaging - Pricing</span>
                  </div>
                </Link>
              </div>
            </section>
            <section>
              <div className="links-section">
                <h2 className="section-title">Need More Help</h2>
                <Link to="" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="support"></i>
                  </div>
                  <div className={`data-wrap ${styles.dataWrap}`}>
                    <strong>Contact us</strong>
                    <i className="next-icon"></i>
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

export default CustomerSupport;
