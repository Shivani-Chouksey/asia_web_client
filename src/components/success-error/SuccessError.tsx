import styles from "./style.module.scss";

export interface AcknowledgementMsgProp {
  title: string;
  content: string;
  type: "success" | "error";
}

function SuccessError(props: AcknowledgementMsgProp) {
  return (
    <div className="splash-screen">
      <div className={`${styles.logoContentWrap}`}>
        <i className={`${styles[props.type]}`}></i>
        <div className={`${styles.contentWrap}`}>
          <h2 className={`${styles.title}`}>{props.title}</h2>
          <p className={`${styles.content}`}>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessError;
