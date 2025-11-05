import { useState } from "react";
import NewsCard, { NewsCardData } from "src/components/news-card/NewsCard";
import styles from "./style.module.scss";
import Header from "src/components/common/header/Header";

function NewsListing() {
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
  return (
    <>
      <header>
        <Header backLink={true} pageTitle="Latest News"></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section typ-news typ-depth">
              <div className="sec-cont">
                <div className={`${styles.newsList}`}>
                  {newsCards.map((item, index) => {
                    return (
                      <div key={index} className={`${styles.item}`}>
                        <NewsCard {...item}></NewsCard>
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
export default NewsListing;
