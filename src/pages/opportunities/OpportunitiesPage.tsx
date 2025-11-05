import { useState } from "react";
import styles from "./style.module.scss";
import OpportunitiesCard, {
  OpportunitiesCardData,
} from "src/components/opportunities-card/OpportunitiesCard";

function OpportunitiesPage() {
  const [opportunitiesCards, setOpportunitiesCards] = useState<
    OpportunitiesCardData[]
  >([
    {
      companyId: "001",
      companyName: "Banyan Nation",
      companyLocation: "India",
      companyLogo: `/assets/logos/banyan-nation-logo.png`,
      // portfolioCount: 2,
      activeRequests: 5,
      ebidta: "+20.3",
      turnover: "+120.3",
      lastTradePrice: "€2.48",
    },
    {
      companyId: "002",
      companyName: "Vilcart",
      companyLocation: "India",
      companyLogo: `/assets/logos/vilcart-logo.png`,
      // portfolioCount: 0,
      activeRequests: 12,
      ebidta: "+20.3",
      turnover: "+78.3",
      lastTradePrice: "€8.48",
    },
    {
      companyId: "003",
      companyName: "Creditas",
      companyLocation: "India",
      companyLogo: `/assets/logos/creditas-logo.png`,
      // portfolioCount: 1,
      activeRequests: 23,
      ebidta: "+20.3",
      turnover: "+50.3",
      lastTradePrice: "€12.48",
    },
  ]);
  return (
    <div className="lyt-main typ-main">
      <section>
        <div className="bs-section typ-depth">
          <div className="sec-head">
            <h2 className="cm-sec-title">Exclusive Opportunities</h2>
          </div>
          <div className="sec-cont">
            <div className={`${styles.opportunitiesList}`}>
              {opportunitiesCards.map((item, index) => {
                return (
                  <div key={index} className={`${styles.item}`}>
                    <OpportunitiesCard {...item}></OpportunitiesCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpportunitiesPage;
