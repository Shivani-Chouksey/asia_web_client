import { ReactNode } from "react";
import styles from "./style.module.scss";
import Button from "../common/button/Button";
import { Drawer } from "@mui/material";

export interface BottomSheetProps {
  title: string;
  subText?: string;
  primaryBtnText: string;
  secondaryBtnText?: string;
  size: "small" | "large";
  btnDisabled?: boolean;
  setOpen: any;
  open: boolean;
  children: ReactNode;
  btnOnClick?: any;
  btnSecondaryOnClick?: any;
  className?: string;
  center?: boolean;
}

function BottomSheet(props: BottomSheetProps) {
  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <Drawer
      className=""
      anchor="bottom"
      open={props.open}
      onClose={handleClose}
    >
      <div className={`${styles.bsWrapper} ${styles[props.size]}`}>
        <div className={`${styles.headWrap}`}>
          <div
            className={`${styles.titleWrap} ${
              props.center ? `${styles.center}` : ""
            }`}
          >
            <h2 className={`${styles.title}`}>{props.title}</h2>
            {props.subText ? (
              <p className={`${styles.subtext}`}>{props.subText}</p>
            ) : (
              <></>
            )}
          </div>
          <button className={`${styles.closeBtn}`} onClick={handleClose}>
            <i></i>
          </button>
        </div>
        <div className={`${styles.contWrap}`}>{props.children}</div>
        <div className={`${styles.footWrap}`}>
          {props.secondaryBtnText ? (
            // <Button btnStyle="secondary" onClick={handleClose}>
            <Button btnStyle="secondary" onClick={props.btnSecondaryOnClick}>
              {props.secondaryBtnText}
            </Button>
          ) : (
            <></>
          )}
          <Button
            btnStyle="primary"
            onClick={props.btnOnClick}
            disabled={props.btnDisabled}
          >
            {props.primaryBtnText}
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default BottomSheet;
