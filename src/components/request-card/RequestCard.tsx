import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

function RequestCard(props: any) {
  const navigate = useNavigate()
  const chatStartPayload = {
    company_req_id: props.id,
    roomId: props.room_id,
  };
  const btnClickHandler = () => {
    if (props.accept_req === true && props.status === "chat_active") {
      navigate('/chat-details', { state: chatStartPayload })
    } else {
      navigate('/chat-message-page', { state: props })
    }

  }
  console.log("RequestCard", props);
  const createdDate = new Date(props.createdAt).toLocaleDateString()
  return (
    <div className={`${styles.cardWrap} `}>
      <div className={`${styles.headWrap}`}>
        <span className={`${styles.cardTitle}`}>
          <i className={`${styles.icon} ${styles.company}`}></i>
          {props.requesterInfo?.email}
          {/* {props.companyInfo?.name} */}
        </span>
        <span className={`${styles.date}`}>{createdDate}</span>
      </div>
      <div className={`${styles.footWrap}`}>
        <p className={`${styles.cardDesc}`}>
          {props.message}
        </p>
        {
          (props.requester_id != sessionStorage.getItem('user_id') || props.accept_req === true) && <button className="cm-chat-btn" onClick={btnClickHandler}>Chat</button>

        }
      </div>
    </div>
  );
}

export default RequestCard;
