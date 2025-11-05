import InsightCard, {
  InsightCardData,
} from "src/components/insight-card/InsightCard";
import styles from "./style.module.scss";
import { useState } from "react";
import Header from "src/components/common/header/Header";

function InsightListing() {
  const [insightData, setInsightData] = useState<InsightCardData[]>([
    {
      insightCardId: "001",
      insightCardTitle:
        "Hatsun Agro Standalone September 2023 Net Sales at 1cr.",
      insightCardDate: "Nov 04th’ 23",
      insightCardType: "Newsletter",
    },
    {
      insightCardId: "002",
      insightCardTitle:
        "Buy CreditAccess Gramin; target of ₹1600: ICICI Securities",
      insightCardDate: "Oct 28th’ 23",
      insightCardType: "Blog",
    },
    {
      insightCardId: "003",
      insightCardTitle:
        "Green Growth in the Tropics: Sustainable Industries Thriving in Southeast Asia",
      insightCardDate: "Aug 28th’ 23",
      insightCardType: "Newsletter",
    },
    {
      insightCardId: "001",
      insightCardTitle:
        "Hatsun Agro Standalone September 2023 Net Sales at 1Cr.",
      insightCardDate: "Nov 04th’ 23",
      insightCardType: "Newsletter",
    },
    {
      insightCardId: "002",
      insightCardTitle:
        "Buy CreditAccess Gramin; target of ₹1600: ICICI Securities",
      insightCardDate: "Oct 28th’ 23",
      insightCardType: "Blog",
    },
    {
      insightCardId: "003",
      insightCardTitle:
        "Green Growth in the Tropics: Sustainable Industries Thriving in Southeast Asia",
      insightCardDate: "Aug 28th’ 23",
      insightCardType: "Newsletter",
    },
  ]);
  return (
    <>
      <header>
        <Header backLink={true} pageTitle="Insights"></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section typ-depth">
              <div className="sec-cont">
                <div className={`${styles.insightList}`}>
                  {insightData.map((item, index) => {
                    return (
                      <div className={`${styles.item}`}>
                        <InsightCard {...item} bigCard={true}></InsightCard>
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

export default InsightListing;
