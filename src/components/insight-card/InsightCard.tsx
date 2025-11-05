import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export interface InsightCardData {
  insightCardId: string;
  insightCardTitle: string;
  insightCardDate: string;
  insightCardType: string;
}

function InsightCard(props: InsightCardData & { bigCard?: boolean }) {
  return (
    <div
      className={`${styles.cardWrap} ${
        props.bigCard ? `${styles.typBig}` : ""
      }`}
    >
      {props.bigCard ? (
        <></>
      ) : (
        <span className={`${styles[props.insightCardType]}`}></span>
      )}
      <Link to="/insight-detail">
        <div className={`${styles.headWrap}`}>
          <span className={`${styles.cardType}`}>{props.insightCardType}</span>
        </div>
        <div className={`${styles.footWrap}`}>
          <h3 className={`${styles.cardTitle}`}>{props.insightCardTitle}</h3>
          <span className={`${styles.date}`}>
            {props.insightCardDate}
            {props.bigCard ? <i></i> : <></>}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default InsightCard;
