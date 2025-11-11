import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

function RequestCard(props: any) {
  const navigate = useNavigate()
  const btnClickHandler = () => {
    navigate('/chat-details', { state: props })
  }
  return (
    <div className={`${styles.cardWrap} `}>
      <div className={`${styles.headWrap}`}>
        <span className={`${styles.cardTitle}`}>
          <i className={`${styles.icon} ${styles.company}`}></i>
          {props.requesterInfo?.email}
          {/* {props.companyInfo?.name} */}
        </span>
        <span className={`${styles.date}`}>{props.createdAt}</span>
      </div>
      <div className={`${styles.footWrap}`}>
        <p className={`${styles.cardDesc}`}>
          {props.message}
        </p>
        <button className="cm-chat-btn" onClick={btnClickHandler}>Chat</button>
      </div>
    </div>
  );
}

export default RequestCard;
