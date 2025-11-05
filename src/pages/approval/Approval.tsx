import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import { useState } from "react";
import Button from "src/components/common/button/Button";

function Approval() {
  const [approvalStatus, setApprovalStatus] = useState("Rejected");
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-btn-spacing">
          <section>
            <div className="bs-section">
              <div className="sec-head">
                <h1 className={`cm-sec-title typ-big ${styles.title}`}>
                  Approval {approvalStatus}
                </h1>
                <p className={`${styles.subtitle}`}>
                  {approvalStatus === "Pending"
                    ? "You have received a request and your approval is awaited."
                    : approvalStatus === "Approved"
                    ? "New advisor added to your portfolio."
                    : approvalStatus === "Rejected"
                    ? "Please retry or look for a new advisor for your portfolio."
                    : ""}
                </p>
              </div>
              <div className="sec-cont">
                <div className={`${styles.cardWrap}`}>
                  <div className={`${styles.imgWrap}`}>
                    <img src="" alt="" />
                  </div>
                  <div className={`${styles.dataWrap}`}>
                    <div className={`${styles.labelValueWrap}`}>
                      <span className={`${styles.label}`}>Name</span>
                      <span className={`${styles.value}`}>
                        Ferruccio Lamborghini
                      </span>
                    </div>
                    <div className={`${styles.labelValueWrap}`}>
                      <span className={`${styles.label}`}>Country</span>
                      <span className={`${styles.value}`}>Italy</span>
                    </div>
                    <div className={`${styles.labelValueWrap}`}>
                      <span className={`${styles.label}`}>Advisor Since</span>
                      <span className={`${styles.value}`}>2019</span>
                    </div>
                    <div className={`${styles.labelValueWrap}`}>
                      <span className={`${styles.label}`}>
                        Portfolio Under Him
                      </span>
                      <span className={`${styles.value}`}>28+</span>
                    </div>
                    <div className={`${styles.labelValueWrap}`}>
                      <span className={`${styles.label}`}>Email ID</span>
                      <span className={`${styles.value}`}>
                        ferruccio@fgmail.com
                      </span>
                    </div>
                    <div className={`${styles.labelValueWrap}`}>
                      <span className={`${styles.label}`}>Mobile Number</span>
                      <span className={`${styles.value}`}>800123456</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.footWrap}`}>
                {approvalStatus === "Pending" ? (
                  <>
                    <Button btnStyle="secondary">Reject</Button>{" "}
                    <Button btnStyle="primary">Approve</Button>
                  </>
                ) : (
                  <Button btnStyle="primary">Confirm</Button>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Approval;
