import React, { useState } from "react";
import Header from "src/components/common/header/Header";
import { Tab, Tabs } from "@mui/material";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import CheckBox from "src/components/common/checkbox/CheckBox";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import BuyerSellerCard, {
  BuyerSellerCardData,
} from "../../components/buyer-seller-card/BuyerSellerCard";
import RequestCard from "src/components/request-card/RequestCard";
import Button from "src/components/common/button/Button";

function CompanyDetailsPage() {
  const navigate = useNavigate();
  const [mainTabValue, setMainTabValue] = useState(0);
  const [bottomSheetTabValue, setBottomSheetTabValue] = useState(0);
  const [openSortDrawer, setOpenSortDrawer] = useState(false);
  const [openNoteDrawer, setOpenNoteDrawer] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    event.target.checked
      ? setIsCheckboxChecked(true)
      : setIsCheckboxChecked(false);
  };

  const handleButtonClick = () => {
    // navigate("/express-interest");
  };

  const handleChangeMainTabs = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setMainTabValue(newValue);
  };

  const handleChangeBottomSheetTabs = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setBottomSheetTabValue(newValue);
  };
  const requestsData: BuyerSellerCardData[] = [
    {
      cardId: "01",
      cardType: "seller",
      date: "12th Oct’23",
      count: 2,
      investmentCount: 450,
      bidPrice: "€2500",
      singlePrice: "€5",
      chatFeature: true,
    },
    {
      cardId: "02",
      cardType: "seller",
      date: "12th Oct’23",
      count: 1,
      investmentCount: 450,
      bidPrice: "€3600",
      singlePrice: "€5",
      chatFeature: true,
    },
  ];
  const sortTabItems = [
    {
      id: "tab01",
      title: "Title",
      isActive: false,
      tabPanelItems: [
        {
          itemType: "checkbox",
          itemId: "request1",
          label: "Request 1",
          count: 0,
          isChecked: false,
        },
        {
          itemType: "checkbox",
          itemId: "request2",
          label: "Request 2",
          count: 0,
          isChecked: false,
        },
      ],
    },
    {
      id: "tab03",
      title: "Date",
      isActive: false,
      tabPanelItems: [
        {
          itemType: "radio",
          itemId: "last1month",
          label: "Last 1 Month",
          count: 0,
          isChecked: false,
        },
        {
          itemType: "radio",
          itemId: "last3months",
          label: "Last 3 Months",
          count: 0,
          isChecked: false,
        },
        {
          itemType: "radio",
          itemId: "all",
          label: "All",
          count: 0,
          isChecked: false,
        },
      ],
    },
  ];
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-com-detail typ-sticky-tabs">
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
          <div className={`${styles.companyBody}`}>
            <div className="bs-tabs typ-list count-2">
              <Tabs value={mainTabValue} onChange={handleChangeMainTabs}>
                <Tab label="Overview" />
                <Tab
                  label={
                    <React.Fragment>
                      Active Requests
                      <span className="count">{requestsData.length}</span>
                    </React.Fragment>
                  }
                />
              </Tabs>
              <div className={`${styles.panelWrap}`}>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={mainTabValue !== 0}
                >
                  <div className={`${styles.overviewList}`}>
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
                                Premium Sales (Volume){" "}
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
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={mainTabValue !== 1}
                >
                  <div className={`${styles.requestsWrap}`}>
                    <div className={`${styles.headWrap}`}>
                      <h3 className={`${styles.listTitle}`}>Active Requests</h3>
                      <button
                        className={`${styles.sortBtn}`}
                        onClick={() => setOpenSortDrawer(true)}
                      >
                        <i></i>
                        Sort
                      </button>
                    </div>
                    <div className={`${styles.requestsList}`}>
                      <div className={`${styles.requestsItem}`}>
                        <RequestCard></RequestCard>
                      </div>
                      <div className={`${styles.requestsItem}`}>
                        <RequestCard></RequestCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="act-foot">
            <Button
              // onClick={() => setOpenNoteDrawer(true)}
              btnStyle="primary"
            >
              Express Interest
            </Button>
          </div>
        </div>
      </main>
      <BottomSheet
        title="Sort"
        primaryBtnText="Apply"
        secondaryBtnText="Clear All"
        size="large"
        open={openSortDrawer}
        setOpen={setOpenSortDrawer}
      >
        <div className="bs-filter">
          <div className="left-wrap">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={bottomSheetTabValue}
              onChange={handleChangeBottomSheetTabs}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {sortTabItems.map((item, index) => {
                return <Tab key={index} label={item.title} />;
              })}
            </Tabs>
          </div>
          <div className="right-wrap">
            {sortTabItems.map((item, index) => {
              return (
                <div
                  className="tabpanel"
                  role="tabpanel"
                  hidden={bottomSheetTabValue !== index}
                  key={index}
                >
                  <div className="panel-list">
                    {item.tabPanelItems.map((item, index) => {
                      return (
                        <div className="filter-item" key={index}>
                          {item.itemType === "radio" ? (
                            <>
                              <div className="radio-group">
                                <input
                                  type="radio"
                                  id={item.itemId}
                                  name={item.itemType}
                                />
                                <label htmlFor={item.itemId}>
                                  {item.label}
                                </label>
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                          {item.itemType === "checkbox" ? (
                            <>
                              <CheckBox
                                id={item.itemId}
                                label={item.label}
                                name={item.itemId}
                              ></CheckBox>
                            </>
                          ) : (
                            ""
                          )}
                          {item.count !== 0 ? (
                            <span className="count">{item.count}</span>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BottomSheet>
      <BottomSheet
        title="Note!"
        primaryBtnText="I Agree"
        size="small"
        open={openNoteDrawer}
        setOpen={setOpenNoteDrawer}
        btnDisabled={!isCheckboxChecked}
        btnOnClick={handleButtonClick}
      >
        <div className={`${styles.contentWrap}`}>
          <p className={`${styles.desc}`}>
            Stichting AI-X does not endorse or take responsibility for any of
            the content, information, or overall communication shared by the
            users in the present chat. By communicating via the present chat,
            the users therefore release and discharge Stichting AI-X, including
            its employees, officers and agents from any and all liability
            connected to the contents of the present chat.
          </p>
        </div>
        <div className="check-foot">
          <CheckBox
            id="legalNote"
            label="I have read, understood and accepted that the chat has no legal value."
            name="Legal Note"
            onChange={handleCheckboxChange}
            isChecked={isCheckboxChecked}
          ></CheckBox>
        </div>
      </BottomSheet>
    </>
  );
}

export default CompanyDetailsPage;
