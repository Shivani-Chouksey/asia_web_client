import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ChatProfileCard, {
  ChatProfileCardData,
} from "../chat-profile-card/ChatProfileCard";
import RequestCard from "../request-card/RequestCard";
import styles from "./style.module.scss";

export interface CompanyChatCardData {
  companyId: string;
  companyName: string;
  companyLogo: string;
  companyLocation?: string;
  requestDate?: string;
  holdingCount?: number;
  requestMessage?: string;
  isNew?: boolean;
  cardType?: "outgoing" | "incoming" | "pending";
  interestedProfile?: ChatProfileCardData[];
}

function CompanyChatCard(props: any) {
  console.log("props value inside companychatcard", props);
  const createdDate = new Date(props.createdAt).toLocaleDateString()

  return (
    <div className="bs-portfolio-card typ-chat">
      <div className="head-wrap">
        <div className="profile-wrap">
          <div className="profile-logo">
            <img src={props.companyLogo} alt={props.companyInfo?.name} />
          </div>
          
          <div className="profile-cont">
            <strong className="profile-name">{props.companyInfo?.name}</strong>
            {/* {props.cardType !== "incoming" ? ( */}
            <div className="tag-wrap">
              <span>{props.companyInfo?.location || 'India'}</span>
            </div>
            {/* ) : (
              ""
            )} */}
          </div>
          
        </div>
        {/* {props.cardType === "incoming" ? ( */}
        <span className="bid-date">{createdDate}</span>
        {/* ) : (
          ""
        )} */}
        {/* {props.cardType === "outgoing" ? ( */}
        <div className={`${styles.holdingValueWrap}`}>
          <span className={`${styles.label}`}>Holdings</span>
          <span className={`${styles.value}`}>{props.holdingCount} DRs</span>
        </div>
        {/* ) : (
          ""
        )} */}
        
      </div>
      <div className="foot-wrap">
         <p className={`${styles.cardDesc}`}>
          {props.message}
        </p>
      </div>
      {/* {props.cardType === "chat" ? (
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
      {
        (props.status === 'chat_active' || props.requester_id != sessionStorage.getItem('user_id')) && <div
          className={`seller-wrap ${props.interestedProfile?.length === 0 ? "disabled" : ""
            }`}
        >
          <Accordion
            className="bs-accordion"
            defaultExpanded={true}
            disabled={props.interestedProfile?.length === 0}
          >
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
              <div className="seller-head">
                <strong>
                  Chats
                  <span className="request-count">
                    {props.interestedProfile?.length}
                  </span>
                </strong>
              </div>
            </AccordionSummary>
            <RequestCard {...props}></RequestCard>

            {/* {props.interestedProfile?.length !== 0 ? (
            <AccordionDetails>
              <div className="seller-cont">
                <ul className="list">
                  <RequestCard {...item}></RequestCard>
                </ul>
              </div>
            </AccordionDetails>
          ) : (
            <></>
          )} */}
          </Accordion>
        </div>
      }

    </div>
  );
}



export default CompanyChatCard;
