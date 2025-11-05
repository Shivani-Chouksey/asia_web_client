import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "src/components/common/button/Button";
import SwiperComponent from "src/components/common/swiper/SwiperComponent";
import { Pagination } from "swiper";
import LatestTransaction from "src/components/latest-transaction/LatestTransaction";
import NewsCard, { NewsCardData } from "src/components/news-card/NewsCard";
import InsightCard, {
  InsightCardData,
} from "src/components/insight-card/InsightCard";
import ReportsCard, {
  ReportCardData,
} from "src/components/reports-card/ReportsCard";
import HighlightCard, {
  HighlightCardData,
} from "src/components/highlight-card/HighlightCard";
import { Autoplay } from "swiper";

function ImpactPage() {
  const [highlightData, setHighlightData] = useState<HighlightCardData[]>([
    {
      eventType: "Notice",
      noticeTag: "Read",
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
      eventType: "Online",
      eventName: "Addressing Volatility in South Asia",
      eventLogo: `/assets/logos/arya-logo.png`,
      eventLocation: "",
      eventDate: "29th May, 24",
      eventTime: "",
      isFavorite: true,
    },
  ]);
  const [newsCards, setNewsCards] = useState<NewsCardData[]>([
    {
      newsID: "001",
      newsTitle: "CAGL to acquire Madura Micro Finance for ₹876 cr",
      newsDate: "04th November, 2023",
      newsTag: "Leading",
      newsImage:
        "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
    {
      newsID: "002",
      newsTitle: "Creditas raises pre-series A funding from Crowd",
      newsDate: "19th October, 2023",
      newsTag: "Trending",
      newsImage:
        "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
    },
    {
      newsID: "003",
      newsTitle:
        "Startup by 2 Friends Has Turned Plastic Waste Into 300 Million FMCG Bottles",
      newsDate: "11th October, 2023",
      newsTag: "Highlight",
      newsImage:
        "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
    },
    {
      newsID: "004",
      newsTitle:
        "Startup by 2 Friends Has Turned Plastic Waste Into 300 Million FMCG Bottles",
      newsDate: "11th October, 2023",
      newsTag: "In Focus",
      newsImage:
        "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
    },
  ]);
  const [reportsData, setReportsData] = useState<ReportCardData[]>([
    {
      reportId: "001",
      reportTitle: "Banyan Nation",
      reportDate: "2022-23",
      reportType: "Annual Report",
      reportTag: "Latest",
    },
    {
      reportId: "002",
      reportTitle: "Vilcart India.",
      reportDate: "2022-23",
      reportType: "Annual Report",
      reportTag: "Trending",
    },
    {
      reportId: "003",
      reportTitle: "Credit Access India",
      reportDate: "2022-23",
      reportType: "Annual Report",
      reportTag: "In Focus",
    },
    {
      reportId: "004",
      reportTitle: "Banyan Nation",
      reportDate: "2022-23",
      reportType: "Annual Report",
      reportTag: "Latest",
    },
  ]);
  const [insightData, setInsightData] = useState<InsightCardData[]>([
    {
      insightCardId: "001",
      insightCardTitle: "Hatsun Agro Standalone September 2023 Net Sales at",
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
    <div className="lyt-main typ-main">
      <section>
        <div className="bs-section typ-news typ-depth">
          <div className="sec-head">
            <h2 className="cm-sec-title">Highlights</h2>
            <div className="act-wrap">
              <Button
                btnStyle="text"
                navigation={true}
                navigationUrl="/highlight-list"
              >
                <span>View All</span>
                <i className="icon-next"></i>
              </Button>
            </div>
          </div>
          <div className="sec-cont">
            <div className="bs-swiper typ-highlight">
              <SwiperComponent
                swiperConfig={{
                  slidesPerView: "auto",
                  spaceBetween: 8,
                  observer: true,
                  modules: [Pagination, Autoplay],
                  cssMode: false,
                  pagination: {
                    clickable: true,
                  },
                  autoplay: {
                    delay: 3000,
                  },
                  breakpoints: {
                    768: {
                      spaceBetween: 20,
                      cssMode: false,
                    },
                    1280: {
                      cssMode: false,
                      spaceBetween: 24,
                      autoplay: false,
                    },
                  },
                }}
              >
                {highlightData.map((item, index) => {
                  return (
                    <div key={index} className="slide-item">
                      <HighlightCard {...item}></HighlightCard>
                    </div>
                  );
                })}
              </SwiperComponent>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bs-section typ-news typ-depth">
          <div className="sec-head">
            <h2 className="cm-sec-title">News</h2>
            <div className="act-wrap">
              <Button
                btnStyle="text"
                navigation={true}
                navigationUrl="/news-list"
              >
                <span>View All</span>
                <i className="icon-next"></i>
              </Button>
            </div>
          </div>
          <div className="sec-cont">
            <div className="news-grid">
              {newsCards.map((item, index) => {
                return (
                  <div key={index} className="grid-item">
                    <NewsCard {...item} smallCard={true}></NewsCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bs-section typ-reports">
          <div className="sec-head">
            <h2 className="cm-sec-title">Reports</h2>
          </div>
          <div className="sec-cont">
            <div className="bs-swiper typ-reports">
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
                {reportsData.map((item, index) => {
                  return (
                    <div key={index} className="slide-item">
                      <ReportsCard {...item}></ReportsCard>
                    </div>
                  );
                })}
                <div className="slide-item card-view-all">
                  <Link to="/report-list">
                    <div className="title-wrap">
                      <span>View All</span>
                      <span>Reports</span>
                    </div>
                    <i></i>
                  </Link>
                </div>
              </SwiperComponent>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bs-section typ-insight">
          <div className="sec-head">
            <h2 className="cm-sec-title">Insights</h2>
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
      {/* <section>
        <div className="bs-section typ-transaction">
          <div className="sec-head">
            <h2 className="cm-sec-title">Latest Transactions</h2>
          </div>
          <div className="sec-cont">
            <LatestTransaction></LatestTransaction>
          </div>
        </div>
      </section> */}
    </div>
  );
}
export default ImpactPage;
