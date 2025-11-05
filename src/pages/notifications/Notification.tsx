import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import { useState } from "react";
import Button from "src/components/common/button/Button";

export interface NotificationItem {
  id: string;
  title: string;
  isNew: boolean;
  description: string;
  timestamp: string;
  viewBtnText?: string;
  viewBtnLink?: string;
  itemType?: "report" | "chat";
  porfolioName?: string;
  inPortfolio?: boolean;
  chatMessage?: string;
}

function Notification() {
  const [notificationData, setNotificationData] = useState<NotificationItem[]>([
    {
      id: "001",
      title: "Access Pin Changed",
      isNew: false,
      description: "Your access pin has been changed.",
      timestamp: "Wednesday, 14 February 2024 13:27:13 GMT+05:30",
    },
    {
      id: "002",
      title: "New Message Request",
      description: "You have received a new message on your request.",
      isNew: true,
      itemType: "chat",
      timestamp: "Wednesday, 22 April 2024 13:27:13 GMT+05:30",
      viewBtnText: "VIEW MESSAGE",
      viewBtnLink: "",
      porfolioName: "Banyan Nation",
      inPortfolio: true,
      chatMessage: "I am interested in buying 500 DRs for 5€/DR.",
    },
    {
      id: "003",
      title: "Approval Pending",
      isNew: true,
      description: "Furrecio Lamborghini has requested to be your advisor.",
      timestamp: "Wednesday, 23 January 2024 13:27:13 GMT+05:30",
      viewBtnText: "View",
      viewBtnLink: "",
    },
    {
      id: "004",
      title: "Veditas 2nd Quaterly Report",
      isNew: true,
      description:
        "Veditas observes a new change in the sustainable market in India.",
      timestamp: "Wednesday, 7 February 2024 13:27:13 GMT+05:30",
      viewBtnText: "View Report",
      viewBtnLink: "",
      itemType: "report",
    },
  ]);
  let todayData: NotificationItem[] = [],
    olderData: NotificationItem[] = [];
  //   useEffect(() => {
  let todayDate = new Date();
  todayData = notificationData.filter((item) => {
    const temp = new Date(item.timestamp);
    return (
      todayDate.getFullYear() === temp.getFullYear() &&
      todayDate.getMonth() === temp.getMonth() &&
      todayDate.getDate() === temp.getDate()
    );
  });
  olderData = notificationData.filter((item) => {
    const temp = new Date(item.timestamp);
    return (
      todayDate.getFullYear() !== temp.getFullYear() ||
      todayDate.getMonth() !== temp.getMonth() ||
      todayDate.getDate() !== temp.getDate()
    );
  });
  //   }, []);
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-notification">
          {todayData.length !== 0 ? (
            <div className={`${styles.section}`}>
              <h2 className={`${styles.sectionTitle}`}>Today</h2>
              <div className={`${styles.notificationWrapper}`}>
                <ul className={`${styles.list}`}>
                  {todayData.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`${styles.item} ${
                          item.isNew ? styles.typNew : ""
                        }`}
                      >
                        <h3 className={`${styles.notificationTitle}`}>
                          {item.title}
                        </h3>
                        <p className={`${styles.notificationDesc}`}>
                          {item.description}
                        </p>
                        {item.itemType === "chat" ? (
                          <div className={`${styles.requestCard}`}>
                            <div className={`${styles.headWrap}`}>
                              <strong>{item.porfolioName}</strong>
                              {item.inPortfolio ? (
                                <span className={`${styles.tag}`}>
                                  In Portfolio
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className={`${styles.footWrap}`}>
                              <p className={`${styles.cardDesc}`}>
                                Sure, I can revise it. Do you have a quote in
                                mind?
                              </p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className={`${styles.footWrap}`}>
                          <span className={`${styles.time}`}>2 days ago</span>
                          {item.viewBtnText ? (
                            <Button
                              btnStyle="text"
                              navigation={true}
                              navigationUrl={item.viewBtnLink}
                            >
                              {item.itemType === "chat"
                                ? "View Message"
                                : item.itemType === "report"
                                ? "View Report"
                                : "View"}
                              <i className={`${styles.iconNext}`}></i>
                            </Button>
                          ) : (
                            ""
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
          {olderData.length !== 0 ? (
            <div className={`${styles.section}`}>
              <h2 className={`${styles.sectionTitle}`}>Older</h2>
              <div className={`${styles.notificationWrapper}`}>
                <ul className={`${styles.list}`}>
                  {olderData.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`${styles.item} ${
                          item.isNew ? styles.typNew : ""
                        }`}
                      >
                        <h3 className={`${styles.notificationTitle}`}>
                          {item.title}
                        </h3>
                        <p className={`${styles.notificationDesc}`}>
                          {item.description}
                        </p>
                        {item.itemType === "chat" ? (
                          <div className={`${styles.requestCard}`}>
                            <div className={`${styles.headWrap}`}>
                              <strong>{item.porfolioName}</strong>
                              {item.inPortfolio ? (
                                <span className={`${styles.tag}`}>
                                  In Portfolio
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className={`${styles.footWrap}`}>
                              <p className={`${styles.cardDesc}`}>
                                Sure, I can revise it. Do you have a quote in
                                mind?
                              </p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className={`${styles.footWrap}`}>
                          <span className={`${styles.time}`}>2 days ago</span>
                          {item.viewBtnText ? (
                            <Button
                              btnStyle="text"
                              navigation={true}
                              navigationUrl={item.viewBtnLink}
                            >
                              {item.itemType === "chat" ? (
                                <span>View Message</span>
                              ) : item.itemType === "report" ? (
                                <span>View Report</span>
                              ) : (
                                <span>View</span>
                              )}
                              <i className={`${styles.iconNext}`}></i>
                            </Button>
                          ) : (
                            ""
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}

export default Notification;
