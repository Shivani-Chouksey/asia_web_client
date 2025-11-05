import { useState } from "react";
import styles from "./style.module.scss";
import InsightCard, {
  InsightCardData,
} from "src/components/insight-card/InsightCard";
import SwiperComponent from "src/components/common/swiper/SwiperComponent";
import Header from "src/components/common/header/Header";
import { Link } from "react-router-dom";

function InsightDetail() {
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
  ]);
  const [insightDetail, setNewsDetail] = useState({
    id: "001",
    insightTitle: "Hatsun Agro Standalone September 2023 Net Sales at 1cr.",
    insightDate: "7th December, 2023",
    insightBody: `<p>In a strategic move to expand its footprint in the microfinance sector, CAGL (Consolidated Agro Growth Limited) has successfully acquired Madura Micro Finance for a staggering ₹876 crore. The acquisition, finalized after months of negotiations and due diligence, marks a significant milestone for CAGL, positioning the company as a key player in the financial inclusion landscape.</p>
    <p>Madura Micro Finance, a well-established player in the microfinance industry, boasts a widespread network and a strong client base in rural and semi-urban areas. The acquisition aligns with CAGL's vision to contribute to agricultural and rural development by providing financial services to underserved communities.</p>
    <p>This strategic move not only allows CAGL to diversify its portfolio but also strengthens its commitment to empowering rural economies. The infusion of ₹876 crore into Madura Micro Finance is expected to enhance the latter's operational capabilities, technological infrastructure, and outreach.</p>
    <p>Industry experts anticipate that this acquisition will pave the way for innovative financial products and services tailored to the unique needs of rural customers. As CAGL continues to invest in sustainable development, the acquisition of Madura Micro Finance reflects the company's dedication to fostering financial inclusion and driving economic growth at the grassroots level.</p>`,
    insightType: "Newsletter",
  });
  return (
    <>
      <header>
        <Header backLink={true} actionItems={["download", "share"]}></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section">
              <div className="sec-cont">
                <div className={`${styles.insightDetailWrap}`}>
                  <span className={`${styles.cardType}`}>
                    {insightDetail.insightType}
                  </span>
                  <div className={`${styles.contentWrap}`}>
                    <div className={`${styles.contHead}`}>
                      <span className={`${styles.date}`}>
                        {insightDetail.insightDate}
                      </span>
                      <h1 className={`${styles.insightTitle}`}>
                        {insightDetail.insightTitle}
                      </h1>
                    </div>
                    <div
                      className="cont-body"
                      dangerouslySetInnerHTML={{
                        __html: insightDetail.insightBody,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bs-section typ-insight">
              <div className="sec-head">
                <h2 className="cm-sec-title typ-sm">More Insights</h2>
              </div>
              <div className="sec-cont">
                <div className="bs-swiper typ-insight">
                  <SwiperComponent
                    swiperConfig={{
                      slidesPerView: "auto",
                      spaceBetween: 12,
                      observer: true,
                      cssMode: true,
                      breakpoints: {
                        768: {
                          spaceBetween: 20,
                          cssMode: false,
                        },
                        1280: {
                          cssMode: false,
                          spaceBetween: 24,
                        },
                      },
                    }}
                  >
                    {insightData.map((item, index) => {
                      return (
                        <div key={index} className="slide-item">
                          <InsightCard {...item}></InsightCard>
                        </div>
                      );
                    })}
                    <div className="slide-item card-view-all">
                      <Link to="/insight-list">
                        <div className="title-wrap">
                          <span>View All</span>
                          <span>Insights</span>
                        </div>
                        <i></i>
                      </Link>
                    </div>
                  </SwiperComponent>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default InsightDetail;
