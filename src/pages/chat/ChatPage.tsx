import { useState } from "react";
import styles from "./style.module.scss";
import CompanyChatCard, {
  CompanyChatCardData,
} from "src/components/company-chat-card/CompanyChatCard";
import React from "react";
import { Tab, Tabs } from "@mui/material";
import RequestCard from "src/components/request-card/RequestCard";

function ChatPage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const pageTabItems = [
    {
      id: "tab01",
      title: "Bids",
      isActive: false,
    },
    {
      id: "tab02",
      title: "Offers",
      isActive: false,
    },
  ];

  const [cards, setcards] = useState<CompanyChatCardData[]>([
    {
      companyId: "001",
      companyName: "Banyan Nation",
      companyLocation: "India",
      companyLogo: `/assets/logos/banyan-nation-logo.png`,
      holdingCount: 500,
      cardType: "incoming",
      requestDate: "12th Oct’23",
      requestMessage: "Message Box",
      isNew: false,
      interestedProfile: [
        // {
        //   cardId: "02",
        //   cardType: "buyer",
        //   date: "12th Oct’23",
        //   count: 1,
        //   chatFeature: true,
        // },
      ],
    },
    {
      companyId: "002",
      companyName: "Vilcart",
      companyLocation: "India",
      companyLogo: `/assets/logos/vilcart-logo.png`,
      holdingCount: 500,
      cardType: "outgoing",
      requestDate: "12th Oct’23",
      requestMessage: "Message Box",
      isNew: false,
      interestedProfile: [],
    },
    {
      companyId: "003",
      companyName: "Banyan Nation",
      companyLocation: "India",
      companyLogo: `/assets/logos/banyan-nation-logo.png`,
      holdingCount: 500,
      cardType: "pending",
      requestDate: "12th Oct’23",
      requestMessage: "Message Box",
      isNew: false,
      interestedProfile: [
        {
          cardId: "01",
          cardType: "seller",
          date: "12th Oct’23",
          count: 2,
          chatFeature: true,
        },
        {
          cardId: "02",
          cardType: "seller",
          date: "12th Oct’23",
          count: 1,
          chatFeature: true,
        },
      ],
    },
    {
      companyId: "002",
      companyName: "Vilcart",
      companyLocation: "India",
      companyLogo: `/assets/logos/vilcart-logo.png`,
      holdingCount: 500,
      cardType: "outgoing",
      requestDate: "12th Oct’23",
      requestMessage: "Message Box",
      isNew: false,
      interestedProfile: [
        {
          cardId: "01",
          cardType: "seller",
          date: "12th Oct’23",
          count: 2,
          chatFeature: true,
        },
        {
          cardId: "02",
          cardType: "seller",
          date: "12th Oct’23",
          count: 1,
          chatFeature: true,
        },
      ],
    },
  ]);
  const outgoingCard = cards.filter((obj) => {
    return obj.cardType === "outgoing";
  });
  const incomingCard = cards.filter((obj) => {
    return obj.cardType === "incoming";
  });
  const pendingCard = cards.filter((obj) => {
    return obj.cardType === "pending";
  });
  return (
    <div className="lyt-main typ-main">
      <section>
        <div className="bs-section typ-depth">
          <div className="sec-cont">
            <div className="bs-tabs typ-btn">
              <Tabs value={value} onChange={handleChange}>
                <Tab label="OUTGOING" />
                <Tab label="INCOMING" />
                <Tab label="PENDING" />
              </Tabs>
              <div className={`${styles.panelWrap}`}>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={value !== 0}
                >
                  <div className={`${styles.bidsList}`}>
                    {incomingCard.map((item, index) => {
                      return (
                        <div key={index} className={`${styles.item}`}>
                          <CompanyChatCard {...item}></CompanyChatCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={value !== 1}
                >
                  <div className={`${styles.bidsList}`}>
                    {outgoingCard.map((item, index) => {
                      return (
                        <div key={index} className={`${styles.item}`}>
                          <CompanyChatCard {...item}></CompanyChatCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={value !== 2}
                >
                  <div className={`${styles.bidsList}`}>
                    <RequestCard></RequestCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChatPage;
