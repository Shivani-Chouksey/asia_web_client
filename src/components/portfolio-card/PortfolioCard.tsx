import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export interface PortfolioCardData {
  companyId: string;
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  requestCount: number;
  investmentCount: number;
  buyPrice: string;
  lastTradePrice: string;
}

function PortfolioCard(props: PortfolioCardData) {
  return (
    <div className="bs-portfolio-card">
      <Link to="/portfolio-detail">
        <div className="head-wrap">
          <div className="profile-wrap">
            <div className="profile-logo">
              <img src={props.companyLogo} alt={props.companyName} />
            </div>
            <div className="profile-cont">
              <strong className="profile-name">{props.companyName}</strong>
              <div className="tag-wrap">
                <span>{props.companyLocation}</span>
                <span>Active Requests : {props.requestCount}</span>
              </div>
            </div>
            <div className={`${styles.labelValueWrap}`}>
              <span className={`${styles.label}`}>My Securities</span>
              <span className={`${styles.value}`}>
                {props.investmentCount} DRs
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioCard;
