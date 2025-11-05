import styles from "./style.module.scss";

function RequestCard() {
  return (
    <div className={`${styles.cardWrap} `}>
      <div className={`${styles.headWrap}`}>
        <span className={`${styles.cardTitle}`}>
          <i className={`${styles.icon} ${styles.company}`}></i>
          Credit Access
        </span>
        <span className={`${styles.date}`}>12th oct 23</span>
      </div>
      <div className={`${styles.footWrap}`}>
        <p className={`${styles.cardDesc}`}>
          Sure, I can revise it. Do you have a quote in mind?
        </p>
        <button className="cm-chat-btn">Chat</button>
      </div>
    </div>
  );
}

export default RequestCard;
