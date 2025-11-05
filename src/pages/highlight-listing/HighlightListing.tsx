import HighlightCard, {
  HighlightCardData,
} from "src/components/highlight-card/HighlightCard";
import styles from "./style.module.scss";
import { useState } from "react";
import Header from "src/components/common/header/Header";

function HighlightListing() {
  const [highlightData, setHighlightData] = useState<HighlightCardData[]>([
    {
      eventType: "Online",
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
      isFavorite: true,
    },
    {
      eventType: "Notice",
      noticeTag: "Research",
      eventName: "Addressing Volatility in South Asia",
      eventLogo: `/assets/logos/arya-logo.png`,
      eventLocation: "",
      eventDate: "29th May, 24",
      eventTime: "",
      isFavorite: false,
    },
  ]);
  return (
    <>
      <header>
        <Header
          backLink={true}
          pageTitle="Highlights"
          actionItems={["filter"]}
        ></Header>
      </header>
      <main>
        <div className="lyt-main">
          {/* <section>
            <div className="bs-section"></div>
          </section> */}
          <section>
            <div className="bs-section typ-depth">
              <div className="sec-cont">
                <div className="bs-form">
                  <div className="search-wrap">
                    <span className="search-icon"></span>
                    <input type="text" placeholder="Search" />
                    <button className="close-btn">
                      <i></i>
                    </button>
                  </div>
                </div>
                <div className={`${styles.highlightList}`}>
                  {highlightData.map((item, index) => {
                    return (
                      <div className={`${styles.item}`}>
                        <HighlightCard {...item}></HighlightCard>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default HighlightListing;
