import React, { useState } from "react";
import styles from "./style.module.scss";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import { useNavigate } from "react-router-dom";

export default function ProfileDrawer() {
  const navigate = useNavigate();
  const [openProfileDrawer, setOpenProfileDrawer] = useState(true);
  const handleButtonClick = () => {
    setOpenProfileDrawer(false);
    navigate("/profile-update/create-pin");
  };
  return (
    <>
      <BottomSheet
        open={openProfileDrawer}
        primaryBtnText="Complete Set Up"
        title="Set up your Profile!"
        subText="Complete setting up your profile for enhanced security and experience."
        size="small"
        setOpen={setOpenProfileDrawer}
        btnOnClick={handleButtonClick}
      >
        <div className={`${styles.cardCont}`}>
          <ul className={`${styles.list}`}>
            <li className={`${styles.item}`}>
              <i className={`${styles.lock}`}></i>
              <span className={`${styles.text}`}>Create a Pin</span>
            </li>
            <li className={`${styles.item}`}>
              <i className={`${styles.addGallery}`}></i>
              <span className={`${styles.text}`}>Add a profile picture</span>
            </li>
            <li className={`${styles.item}`}>
              <i className={`${styles.addProfile}`}></i>
              <span className={`${styles.text}`}>Add an Advisor</span>
            </li>
          </ul>
        </div>
      </BottomSheet>
    </>
  );
}
