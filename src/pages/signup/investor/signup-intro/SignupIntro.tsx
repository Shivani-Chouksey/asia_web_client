import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import { useState } from "react";
function SignupIntro() {
  const [openDocumentsDrawer, setOpenDocumentsDrawer] = useState(false);
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-signup">
          <h1 className={`${styles.title}`}>
            Join <span className="cm-line-break">Asia Impact</span>
          </h1>
          <div className={`${styles.section}`}>
            <h2 className={`${styles.secTitle}`}>Activate in 3 steps</h2>
            <div className={`${styles.cardWrap}`}>
              <div className={`${styles.card}`}>
                <div className={`${styles.stepsList}`}>
                  <div className={`${styles.steps}`}>
                    <p>Add Personal Details</p>
                  </div>
                  <div className={`${styles.steps}`}>
                    <p>Upload Identity Proof</p>
                  </div>
                  <div className={`${styles.steps}`}>
                    <p>3 Add Residence Proof</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.section}`}>
            <h2 className={`${styles.secTitle}`}>
              Mandatory documents for the process:
            </h2>
            <div className={`${styles.cardWrap}`}>
              <div className={`${styles.card}`}>
                <div className={`${styles.docList}`}>
                  <div className={`${styles.iconTextWrap}`}>
                    <i className={`${styles.identification}`}></i>
                    <span>Identification Document</span>
                    <Button
                      btnStyle="text"
                      onClick={() => setOpenDocumentsDrawer(true)}
                    >
                      View List
                    </Button>
                  </div>
                  <div className={`${styles.iconTextWrap}`}>
                    <i className={`${styles.house}`}></i>
                    <span>Residence Proof </span>
                    <Button
                      btnStyle="text"
                      onClick={() => setOpenDocumentsDrawer(true)}
                    >
                      View List
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-foot">
            <Button
              navigation={true}
              navigationUrl="/signup/details-form"
              btnStyle="primary"
              type="submit"
            >
              Proceed
            </Button>
          </div>
        </div>
      </main>
      <BottomSheet
        title="List of Documents"
        subText="Here is the list of documents for uploading Proof of Address."
        primaryBtnText="Okay"
        size="small"
        open={openDocumentsDrawer}
        setOpen={setOpenDocumentsDrawer}
      >
        <div className={`${styles.drawerWrap}`}>
          <p className={`${styles.cardDesc}`}>ATTACH ANY OF THE FOLLOWING:</p>
          <div className={`${styles.cardCont}`}>
            <ul className={`${styles.list}`}>
              <li className={`${styles.item}`}>
                <span className={`${styles.circle}`}></span>
                <span className={`${styles.text}`}>
                  Gas/water/electricity bill.
                </span>
              </li>
              <li className={`${styles.item}`}>
                <span className={`${styles.circle}`}></span>
                <span className={`${styles.text}`}>
                  Internet/TV/Landline bill.
                </span>
              </li>
              <li className={`${styles.item}`}>
                <span className={`${styles.circle}`}></span>
                <span className={`${styles.text}`}>
                  Tax invoice or definitive tax assessment.
                </span>
              </li>
              <li className={`${styles.item}`}>
                <span className={`${styles.circle}`}></span>
                <span className={`${styles.text}`}>
                  Residence certificate issued by your municipality.
                </span>
              </li>
            </ul>
          </div>
          <div className={`${styles.content}`}>
            <i className={`${styles.error}`}></i>
            <span>
              Ensure that the issuance date of the uploaded document is not
              older than 3 months.
            </span>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

export default SignupIntro;
