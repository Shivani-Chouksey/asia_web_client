import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Header from "src/components/common/header/Header";
import React, { useState } from "react";
import {
  Tab,
  Tabs,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SwiperComponent from "src/components/common/swiper/SwiperComponent";
import ReportsCard, {
  ReportCardData,
} from "src/components/reports-card/ReportsCard";
import styles from "./style.module.scss";

function ReportDetails() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
  return (
    <>
      <header>
        <Header backLink={true} actionItems={["download"]}></Header>
      </header>
      <main>
        <div className="lyt-main typ-report-detail typ-sticky-tabs">
          <div className={`${styles.portfolioHead}`}>
            <div className={`${styles.companyWrap}`}>
              <span className={`${styles.companyLogo}`}>
                <img src="/assets/logos/banyan-nation-logo.png" alt="" />
              </span>
              <div className={`${styles.companyIntro}`}>
                <strong className={`${styles.companyName}`}>
                  Banyan Nation
                </strong>
                <span className={`${styles.tag}`}>India</span>
              </div>
            </div>
          </div>
          <div className={`${styles.reportBody}`}>
            <div className="bs-tabs typ-list count-2">
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Reports" />
                <Tab label={"Overview"} />
              </Tabs>
              <div className={`${styles.panelWrap}`}>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={value !== 0}
                >
                  <div className={`${styles.tabDataList}`}>
                    <div className={`${styles.cardItem}`}>
                      <div className={`${styles.cardHead}`}>
                        <h3 className={`${styles.cardTitle}`}>Summary</h3>
                      </div>
                      <div className={`${styles.cardCont}`}>
                        <p className={`${styles.cardDesc}`}>
                          Banyan Nation is one of India's first vertically
                          integrated plastic recycling companies, helping global
                          brands use more recycled plastic instead of virgin
                          plastic. The company is a Show More
                        </p>
                      </div>
                    </div>
                    <div className={`${styles.cardItem}`}>
                      <div className={`${styles.cardHead}`}>
                        <h3 className={`${styles.cardTitle}`}>Impact</h3>
                      </div>
                      <div className={`${styles.cardCont}`}>
                        <p className={`${styles.cardDesc}`}>
                          Banyan Nation’s revenues increased 36.5%YoY and
                          +9.8%QoQ and volumes of premium granules sold this
                          quarter grew Show More
                        </p>
                        <div className={`${styles.tableWrap}`}>
                          <div className={`${styles.tableBody}`}>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Plastic Collected
                              </span>
                              <span className={`${styles.value}`}>
                                120 Tonnes
                              </span>
                            </div>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Plastic Recycled
                              </span>
                              <span className={`${styles.value}`}>
                                130 Tonnes
                              </span>
                            </div>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Volume Sold
                              </span>
                              <span className={`${styles.value}`}>
                                1054 Tonnes
                              </span>
                            </div>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Premium Sales (Volume)
                              </span>
                              <span className={`${styles.value}`}>
                                929 Tonnes
                              </span>
                            </div>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Granules Produced
                              </span>
                              <span className={`${styles.value}`}>
                                877 Tonnes
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bs-section typ-more-reports">
                    <div className="sec-head">
                      <h2 className="cm-sec-title typ-sm">More Reports</h2>
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
                        </SwiperComponent>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={value !== 1}
                >
                  <div className={`${styles.tabDataList}`}>
                    <div className={`${styles.cardItem}`}>
                      <div className={`${styles.cardHead}`}>
                        <h3 className={`${styles.cardTitle}`}>
                          Sustainability Goals Achieved
                        </h3>
                      </div>
                      <div className={`${styles.cardCont}`}>
                        <p className={`${styles.cardDesc}`}>
                          Banyan Nation over the years has strived to achieve
                          UNDP’s sustainability goals. As they continue the
                          journey towards sustainability, here are some goals
                          they have accomplished and constantly work towards.
                        </p>
                        <div className={`${styles.subWrap}`}>
                          <ul className={`${styles.subList}`}>
                            <li className={`${styles.subItem}`}>
                              <i className={`${styles.growth}`}></i>
                              <span className={`${styles.text}`}>
                                Decent Work and Economic Growth
                              </span>
                            </li>
                            <li className={`${styles.subItem}`}>
                              <i className={`${styles.industry}`}></i>
                              <span className={`${styles.text}`}>
                                Industry Innovation and Infrastructure
                              </span>
                            </li>
                            <li className={`${styles.subItem}`}>
                              <i className={`${styles.climate}`}></i>
                              <span className={`${styles.text}`}>
                                Climate Action
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.cardItem}`}>
                      <div className={`${styles.cardHead}`}>
                        <h3 className={`${styles.cardTitle}`}>Summary</h3>
                      </div>
                      <div className={`${styles.cardCont}`}>
                        <p className={`${styles.cardDesc}`}>
                          Banyan Nation is one of India's first vertically
                          integrated plastic recycling companies, helping global
                          brands use more recycled plastic instead of virgin
                          plastic. The company is a Show More
                        </p>
                      </div>
                    </div>
                    <div className={`${styles.cardItem}`}>
                      <div className={`${styles.cardHead}`}>
                        <h3 className={`${styles.cardTitle}`}>Impact</h3>
                      </div>
                      <div className={`${styles.cardCont}`}>
                        <p className={`${styles.cardDesc}`}>
                          Banyan Nation’s revenues increased 36.5%YoY and
                          +9.8%QoQ and volumes of premium granules sold this
                          quarter grew Show More
                        </p>
                        <div className={`${styles.tableWrap}`}>
                          <div className={`${styles.tableBody}`}>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Plastic Collected
                              </span>
                              <span className={`${styles.value}`}>
                                120 Tonnes
                              </span>
                            </div>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Plastic Recycled
                              </span>
                              <span className={`${styles.value}`}>
                                130 Tonnes
                              </span>
                            </div>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Volume Sold
                              </span>
                              <span className={`${styles.value}`}>
                                1054 Tonnes
                              </span>
                            </div>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Premium Sales (Volume)
                              </span>
                              <span className={`${styles.value}`}>
                                929 Tonnes
                              </span>
                            </div>
                            <div className={`${styles.tableItem}`}>
                              <span className={`${styles.label}`}>
                                Granules Produced
                              </span>
                              <span className={`${styles.value}`}>
                                877 Tonnes
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ReportDetails;
