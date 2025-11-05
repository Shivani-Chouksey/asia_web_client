import React, { useState } from "react";
import styles from "./style.module.scss";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";

export default function NoteDrawer() {
  const [openNoteDrawer, setOpenNoteDrawer] = useState(true);
  return (
    <>
      <BottomSheet
        open={openNoteDrawer}
        primaryBtnText="Proceed"
        title="Note"
        size="large"
        center={true}
        setOpen={setOpenNoteDrawer}
      >
        <div className={`${styles.noteDrawer}`}>
          <div className={`${styles.noteWrap}`}>
            <div className={`${styles.logoWrap}`}>
              <img src="/assets/logos/note-warning.png" alt="note-icon" />
            </div>
            <p className={`${styles.content}`}>
              Once you edit your details, you won’t be able to finalize a deal
              until your documents are verified
            </p>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}
