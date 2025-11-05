import { useState } from "react";
import SwiperComponent from "../common/swiper/SwiperComponent";
import styles from "./style.module.scss";
import { Autoplay } from "swiper";

export interface TransactionData {
  companyId: string;
  companyLogo: string;
  transactionCount: number;
  transactionPrice: string;
  showDetail: boolean;
  bubbleSize: "small" | "medium" | "large";
}

function LatestTransaction() {
  const [transactionData, setTransactionData] = useState<TransactionData[]>([
    {
      companyId: "001",
      companyLogo: `/assets/logos/banyan-nation-logo.png`,
      transactionCount: 20,
      transactionPrice: "€10,000",
      showDetail: true,
      bubbleSize: "large",
    },
    {
      companyId: "002",
      companyLogo: `/assets/logos/arya-logo.png`,
      transactionCount: 10,
      transactionPrice: "€13,000",
      showDetail: false,
      bubbleSize: "small",
    },
    {
      companyId: "003",
      companyLogo: `/assets/logos/bina-artha-logo.png`,
      transactionCount: 54,
      transactionPrice: "€40,000",
      showDetail: false,
      bubbleSize: "medium",
    },
    {
      companyId: "004",
      companyLogo: `/assets/logos/creditas-logo.png`,
      transactionCount: 25,
      transactionPrice: "€25,000",
      showDetail: false,
      bubbleSize: "small",
    },
    {
      companyId: "005",
      companyLogo: `/assets/logos/credit-access-india-logo.png`,
      transactionCount: 32,
      transactionPrice: "€16,000",
      showDetail: true,
      bubbleSize: "large",
    },
    {
      companyId: "006",
      companyLogo: `/assets/logos/machine-maze-logo.png`,
      transactionCount: 54,
      transactionPrice: "€40,000",
      showDetail: false,
      bubbleSize: "medium",
    },
    {
      companyId: "007",
      companyLogo: `/assets/logos/vilcart-logo.png`,
      transactionCount: 25,
      transactionPrice: "€25,000",
      showDetail: false,
      bubbleSize: "medium",
    },
    {
      companyId: "008",
      companyLogo: `/assets/logos/one-puhunan-logo.png`,
      transactionCount: 32,
      transactionPrice: "€16,000",
      showDetail: true,
      bubbleSize: "large",
    },
  ]);
  return (
    <div className={`${styles.transactionCard}`}>
      <div className={`${styles.transactionWrap}`}>
        <div className="bs-swiper typ-transaction">
          <SwiperComponent
            swiperConfig={{
              slidesPerView: 4,
              loop: true,
              // modules: [Autoplay],
              spaceBetween: 16,
              observer: true,
              speed: 2000,
              autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              },
              loopedSlides: 8,
              breakpoints: {
                768: {
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 8,
                  loopedSlides: 18,
                },
              },
            }}
          >
            {transactionData?.map((item, index) => {
              return (
                <div
                  className={`${styles.transactionBubble} ${
                    styles[item.bubbleSize]
                  } transaction-bubble`}
                  key={index}
                >
                  <span className={`${styles.imgWrap}`}>
                    <img src={item.companyLogo} alt="" />
                  </span>
                  {item.showDetail ? (
                    <div
                      className={`${styles.transactionDetail} detail-pos bubble-${item.bubbleSize}`}
                    >
                      <span>{item.transactionCount} DRs</span> at{" "}
                      <span>{item.transactionPrice}</span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </SwiperComponent>
        </div>
      </div>
      <div className={`${styles.infographyWrap}`}>
        <span></span>
      </div>
    </div>
  );
}

export default LatestTransaction;
