import { Link } from "react-router-dom";

export interface OpportunitiesCardData {
  id: string;
  name: string;
  companyLogo: string;
  companyLocation: string;
  // portfolioCount: number;
  activeRequests: number;
  ebidta: string;
  turnover: string;
  lastTradePrice: string;
}

function OpportunitiesCard(props: OpportunitiesCardData) {

  return (
    <div className="bs-portfolio-card typ-opportunities">
      <Link to={`/company-details/${props.id}`} >
        <div className="head-wrap">
          <div className="profile-wrap">
            <div className="profile-logo">
              <img src={props.companyLogo} alt={props.name} />
            </div>
            <div className="profile-cont">
              <strong className="profile-name">{props.name}</strong>
              <div className="tag-wrap">
                <span>{props.companyLocation}</span>
                {/* {props.portfolioCount !== 0 ? (
                  <span>In Portfolio : {props.portfolioCount}</span>
                ) : (
                  <></>
                )} */}
              </div>
            </div>
          </div>
          <div className="active-requests">
            <span className="label">Active Requests:</span>
            <span className="value">{props.activeRequests}</span>
          </div>
        </div>
        <div className="foot-wrap">
          <div className="label-value-wrap">
            <span className="label">EBITDA(YoY):</span>
            <span className="value">{props.ebidta}%</span>
          </div>
          <div className="label-value-wrap">
            <span className="label">Turnover(YoY):</span>
            <span className="value">{props.turnover}%</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default OpportunitiesCard;
