import Header from "src/components/common/header/Header";
import Button from "../../components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import styles from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeletePage() {
  const [openDeleteDrawer, setOpenDeleteDrawer] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/acknowledgement");
  };
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="introScreen">
          <div className={`${styles.logoContentWrap}`}>
            <i className={`${styles.danger}`}></i>
            <div className={`${styles.contentWrap}`}>
              <h2 className={`${styles.title}`}>Please Note!</h2>
              <p className={`${styles.description}`}>
                Your DRs will stay in your account outside the app too. However,
                All your app activity, including your chats, save for later and
                RSVP will be deleted.
              </p>
              <p className={`${styles.warnNote}`}>
                Do you still wish to delete your account?
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className={`${styles.footWrap}`}>
        <Button btnStyle="primary" onClick={() => setOpenDeleteDrawer(true)}>
          Proceed
        </Button>
      </div>
      <BottomSheet
        title="Account Deletion Request"
        primaryBtnText="Submit Request"
        size="large"
        open={openDeleteDrawer}
        setOpen={setOpenDeleteDrawer}
        btnOnClick={handleNavigate}
      >
        <div className={`${styles.drawer}`}>
          <div className={`${styles.titleWrap}`}>
            <span className={`${styles.title}`}>
              The reason you select will be sent to us and we will get back to
              you via email.
            </span>
          </div>
          <ul className={`${styles.list}`}>
            <li className={`${styles.item}`}>
              <input
                type="radio"
                id="delete1"
                name="deleteRequest"
                //   onChange={handleRadio}
              />
              <label htmlFor="delete1">No longer using the App</label>
            </li>
            <li className={`${styles.item}`}>
              <input
                type="radio"
                id="delete2"
                name="deleteRequest"
                //   onChange={handleRadio}
              />
              <label htmlFor="delete2">Privacy Concerns</label>
            </li>
            <li className={`${styles.item}`}>
              <input
                type="radio"
                id="delete3"
                name="deleteRequest"
                //   onChange={handleRadio}
              />
              <label htmlFor="delete3">Legal Requirements</label>
            </li>
            <li className={`${styles.item}`}>
              <input
                type="radio"
                id="delete4"
                name="deleteRequest"
                //   onChange={handleRadio}
              />
              <label htmlFor="delete4">Other</label>
            </li>
          </ul>
          <div className={`${styles.content}`}>
            <i className={`${styles.error}`}></i>
            <span>
              It will take us 3-5 business days to process your request. In the
              meantime, your account will be paused.
            </span>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

export default DeletePage;
