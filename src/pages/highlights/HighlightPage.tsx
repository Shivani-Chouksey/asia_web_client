import { useState } from "react";
import styles from "./style.module.scss";
import Header from "src/components/common/header/Header";
import HighlightCard, {
  HighlightCardData,
} from "src/components/highlight-card/HighlightCard";
import React from "react";
import { Tab, Tabs } from "@mui/material";

function HighlightPage() {
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
  const [cards, setCards] = useState<HighlightCardData[]>([
    {
      eventType: "Notice",
      noticeTag: "Important",
      eventName: "Navigating Business Opportunities in India",
      eventLogo: `/assets/logos/online.png`,
      eventLocation: "",
      eventDate: "29th May, 24",
      eventTime: "4-5pm CET",
      isFavorite: true,
    },
    {
      eventType: "Offline",
      eventName: "Focus on the Rural Ecosystem",
      eventLogo: `/assets/logos/offline.png`,
      eventLocation: "Milan, Italy",
      eventDate: "22nd Sept, 24",
      eventTime: "4-5pm CET",
      isFavorite: false,
    },
    {
      eventType: "Notice",
      noticeTag: "Research",
      eventName: "Addressing Volatility in South Asia",
      eventLogo: `/assets/logos/arya-logo.png`,
      eventLocation: "",
      eventDate: "29th May, 24",
      eventTime: "",
      isFavorite: true,
    },
  ]);
  const interestedCard = cards.filter((obj) => {
    return obj.isFavorite === false;
  });
  const favoriteCard = cards.filter((obj) => {
    return obj.isFavorite === true;
  });
  return (
    <>
      <header>
        <Header backLink={true} pageTitle="Highlights"></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section typ-depth">
              <div className="sec-cont">
                <div className="bs-tabs typ-btn typ-highlight">
                  <Tabs value={value} onChange={handleChange}>
                    <Tab label="INTERESTED" />
                    <Tab label="FAVORITES" />
                  </Tabs>
                  <div className={`${styles.panelWrap}`}>
                    <div
                      className={`${styles.tabPanel}`}
                      role="tabpanel"
                      hidden={value !== 0}
                    >
                      <div className={`${styles.highlightList}`}>
                        {interestedCard.map((item, index) => {
                          return (
                            <div key={index} className={`${styles.item}`}>
                              <HighlightCard {...item}></HighlightCard>
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
                      <div className={`${styles.highlightList}`}>
                        {favoriteCard.map((item, index) => {
                          return (
                            <div key={index} className={`${styles.item}`}>
                              <HighlightCard {...item}></HighlightCard>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default HighlightPage;
