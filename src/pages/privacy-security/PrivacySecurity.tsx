import Header from "src/components/common/header/Header";
import { Link } from "react-router-dom";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import styles from "./style.module.scss";
import { useState } from "react";

function PrivacySecurity() {
  const [openLogoutDrawer, setOpenLogoutDrawer] = useState(false);
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-ps">
          <div className="bs-icon-link-list">
            <section>
              <div className="links-section">
                <h2 className="section-title">Privacy</h2>
                <Link to="" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="pin"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Change PIN</strong>
                  </div>
                </Link>
              </div>
            </section>
            <section>
              <div className="links-section">
                <h2 className="section-title">Security</h2>
                <Link to="/active-devices" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="active-devices"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Active Devices</strong>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <Link to="/delete-page" className="mod-icon-link">
                  <div className="icon-wrap">
                    <i className="delete-account"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Delete Account</strong>
                  </div>
                </Link>
              </div>
              <div className="links-section">
                <button
                  onClick={() => {
                    setOpenLogoutDrawer(true);
                  }}
                  className={`mod-icon-link ${styles.modIconLink}`}
                >
                  <div className="icon-wrap">
                    <i className="logout"></i>
                  </div>
                  <div className="data-wrap">
                    <strong>Log Out</strong>
                  </div>
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <BottomSheet
        title="Log Out?"
        subText="Are you sure you want to log out of this device?"
        primaryBtnText="Log Out"
        size="large"
        open={openLogoutDrawer}
        setOpen={setOpenLogoutDrawer}
      >
        <div className={`${styles.logoContentWrap}`}>
          <i className={`${styles.logout}`}></i>
          <div className={`${styles.contentWrap}`}>
            <span className={`${styles.desc}`}>
              Are you sure you want to log out of this device?
            </span>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

export default PrivacySecurity;
