import { useState } from "react";
import styles from "./style.module.scss";
import NewsCard, { NewsCardData } from "src/components/news-card/NewsCard";
import Button from "src/components/common/button/Button";
import Header from "src/components/common/header/Header";
import SwiperComponent from "src/components/common/swiper/SwiperComponent";

function newsTagGeneration(tag: string) {
  let resultTag = "";
  switch (tag) {
    case "Leading":
      resultTag = "leading";
      break;
    case "Highlight":
      resultTag = "highlight";
      break;
    case "Latest":
      resultTag = "latest";
      break;
    case "In Focus":
      resultTag = "focus";
      break;
    case "Trending":
      resultTag = "trending";
      break;
    default:
      resultTag = "";
      break;
  }
  return resultTag;
}

function NewsDetail() {
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
  const [newsDetail, setNewsDetail] = useState({
    id: "001",
    newsTitle:
      "CreditAccess Grameen to acquire Madura Micro Finance for ₹876 cr",
    newsDate: "7th December, 2023",
    newsBody: `<p>In a strategic move to expand its footprint in the microfinance sector, CAGL (Consolidated Agro Growth Limited) has successfully acquired Madura Micro Finance for a staggering ₹876 crore. The acquisition, finalized after months of negotiations and due diligence, marks a significant milestone for CAGL, positioning the company as a key player in the financial inclusion landscape.</p>
        <p> Madura Micro Finance, a well-established player in the microfinance industry, boasts a widespread network and a strong client base in rural and semi-urban areas. The acquisition aligns with CAGL's vision to contribute to agricultural and rural development by providing financial services to underserved communities.</p>
        <p>This strategic move not only allows CAGL to diversify its portfolio but also strengthens its commitment to empowering rural economies. The infusion of ₹876 crore into Madura Micro Finance is expected to enhance the latter's operational capabilities, technological infrastructure, and outreach.</p>
        <p>Industry experts anticipate that this acquisition will pave the way for innovative financial products and services tailored to the unique needs of rural customers. As CAGL continues to invest in sustainable development, the acquisition of Madura Micro Finance reflects the company's dedication to fostering financial inclusion and driving economic growth at the grassroots level.</p>`,
    newsImage:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    newsTag: "Leading",
  });
  return (
    <>
      <header>
        <Header backLink={true} actionItems={["share"]}></Header>
      </header>
      <main>
        <div className="lyt-main typ-newsdetail">
          <section>
            <div className="bs-section">
              <div className="sec-cont">
                <div className={`${styles.newsDetailWrap}`}>
                  <div className={`${styles.imgWrap}`}>
                    <img src={newsDetail.newsImage} alt="" />
                    <span
                      className={`${styles.tag} cm-tag typ-${newsTagGeneration(
                        newsDetail.newsTag
                      )}`}
                    >
                      {newsDetail.newsTag}
                    </span>
                  </div>
                  <div className={`${styles.contentWrap}`}>
                    <div className={`${styles.contHead}`}>
                      <h1 className={`${styles.newsTitle}`}>
                        {newsDetail.newsTitle}
                      </h1>
                      <span className={`${styles.date}`}>
                        {newsDetail.newsDate}
                      </span>
                    </div>
                    <div
                      className="cont-body"
                      dangerouslySetInnerHTML={{ __html: newsDetail.newsBody }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bs-section typ-news">
              <div className="sec-head">
                <h2 className="cm-sec-title typ-sm">More News</h2>
              </div>
              <div className="sec-cont">
                <div className="bs-swiper typ-news">
                  <SwiperComponent
                    swiperConfig={{
                      slidesPerView: "auto",
                      spaceBetween: 12,
                      observer: true,
                    }}
                  >
                    {newsCards.map((item, index) => {
                      return (
                        <NewsCard
                          key={index}
                          {...item}
                          smallCard={true}
                        ></NewsCard>
                      );
                    })}
                  </SwiperComponent>
                  <div className="act-wrap">
                    <Button btnStyle="text">
                      <span>View All</span>
                      <i className="icon-next"></i>
                    </Button>
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

export default NewsDetail;
