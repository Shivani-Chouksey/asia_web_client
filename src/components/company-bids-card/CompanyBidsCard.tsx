import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import BuyerSellerCard, {
  BuyerSellerCardData,
} from "../buyer-seller-card/BuyerSellerCard";
import RequestCard from "../request-card/RequestCard";
import styles from "./style.module.scss";

export interface CompanyBidsCardData {
  companyId: string;
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  investmentCount: number;
  holdingCount: number;
  currentPrice: string;
  bidPrice: string;
  bidsDate: string;
  cardType: "bids" | "offers";
  interestedBuyerSeller?: BuyerSellerCardData[];
}

function CompanyBidsCard(props: CompanyBidsCardData) {
  return (
    <div className="bs-portfolio-card typ-bids">
      <div className="head-wrap">
        <div className="profile-wrap">
          <div className="profile-logo">
            <img src={props.companyLogo} alt={props.companyName} />
          </div>
          <div className="profile-cont">
            <strong className="profile-name">{props.companyName}</strong>
            <div className="tag-wrap">
              <span>{props.companyLocation}</span>
            </div>
          </div>
        </div>
        {props.cardType === "bids" ? (
          <span className="bid-date">{props.bidsDate}</span>
        ) : (
          <div className={`${styles.holdingValueWrap}`}>
            <span className={`${styles.label}`}>Holdings</span>
            <span className={`${styles.value}`}>{props.holdingCount} DRs</span>
          </div>
        )}
      </div>
      {/* {props.cardType === "bids" ? (
        <div className="foot-wrap">
          <div className="label-value-wrap">
            <span className="label">No. of DRs</span>
            <span className="value">{props.investmentCount} DRs</span>
          </div>
          <div className="label-value-wrap">
            <span className="label">Price per DR</span>
            <span className="value">{props.currentPrice}</span>
          </div>
          <div className="label-value-wrap">
            <span className="label">Bid Price</span>
            <span className="value">{props.bidPrice}</span>
          </div>
        </div>
      ) : (
        <></>
      )} */}
      <div
        className={`seller-wrap ${
          props.interestedBuyerSeller?.length === 0 ? "disabled" : ""
        }`}
      >
        <Accordion
          className="bs-accordion"
          defaultExpanded={true}
          disabled={props.interestedBuyerSeller?.length === 0}
        >
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <div className="seller-head">
              <strong>
                Chats
                <span className="request-count">
                  {props.interestedBuyerSeller?.length}
                </span>
              </strong>
            </div>
          </AccordionSummary>
          {props.interestedBuyerSeller?.length !== 0 ? (
            <AccordionDetails>
              <div className="seller-cont">
                <ul className="list">
                  <RequestCard></RequestCard>
                </ul>
              </div>
            </AccordionDetails>
          ) : (
            <></>
          )}
        </Accordion>
      </div>
    </div>
  );
}

export default CompanyBidsCard;
