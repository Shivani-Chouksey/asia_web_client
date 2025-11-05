import styles from "./style.module.scss";

export interface BuyerSellerCardData {
  cardId: string;
  cardType: "buyer" | "seller";
  date: string;
  count: number;
  investmentCount: number;
  bidPrice: string;
  singlePrice: string;
  chatFeature: boolean;
}

function BuyerSellerCard(
  props: BuyerSellerCardData & { childIndex?: number } & { bigCard?: boolean }
) {
  return (
    <div
      className={`${styles.cardWrap} ${props.bigCard ? styles.bigCard : ""}`}
    >
      <div className={`${styles.headWrap}`}>
        <span className={`${styles.cardTitle}`}>
          {props.cardType === "buyer" ? "Offer" : "Bid"}{" "}
          {props.childIndex ? `#${props.childIndex}` : ""}
        </span>
        {props.cardType === "seller" && props.bigCard === false ? (
          <span className={`${styles.date}`}>{props.date}</span>
        ) : (
          ""
        )}
        {props.count > 1 && props.bigCard === false ? (
          <span className={`${styles.updated}`}>Updated Request</span>
        ) : (
          ""
        )}
        {props.bigCard ? (
          <div className={`${styles.labelValueWrap}`}>
            <span className={`${styles.label}`}>Placed on</span>
            <span className={`${styles.value}`}>{props.date}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={`${styles.footWrap}`}>
        <div className={`${styles.labelValueWrap}`}>
          <span className={`${styles.label}`}>No. of Drs</span>
          <span className={`${styles.value}`}>{props.investmentCount}</span>
        </div>
        <div className={`${styles.labelValueWrap}`}>
          <span className={`${styles.label}`}>Price/DR</span>
          <span className={`${styles.value}`}>{props.singlePrice}</span>
        </div>
        <div className={`${styles.labelValueWrap}`}>
          <span className={`${styles.label}`}>Bid Price</span>
          <span className={`${styles.value}`}>{props.bidPrice}</span>
        </div>
        <button className="cm-chat-btn">
          Chat <i></i> <span className="notification-count">2</span>
        </button>
      </div>
    </div>
  );
}

export default BuyerSellerCard;
