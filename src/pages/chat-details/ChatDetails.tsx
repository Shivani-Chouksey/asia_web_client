import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import { FormControl, TextField, Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "src/components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";

function ChatDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = () => {
    navigate("/chat-confirm-request");
  };

  return (
    <>
      <header>
        <Header
          backLink={true}
          actionItems={["more"]}
          pageTitle="Anonymous"
          center={true}
        ></Header>
      </header>
      <main>
        <div className="lyt-main typ-message">
          <div
            className={`${styles.messageGroup} ${
              value === 1 ? `${styles.hidden}` : ""
            }`}
          >
            <div className={`${styles.infoCont}`}>
              <i className={`${styles.error}`}></i>
              <span className={`${styles.desc}`}>
                ATTENTION: As soon as you reply to the message, there will be no
                more anonymity.
              </span>
            </div>
            <ul className={`${styles.list}`}>
              <li className={`${styles.item} ${styles.receive}`}>
                <div className={`${styles.wrap}`}>
                  <p className={`${styles.text}`}>
                    I am interested in buying 500 DRs for 5€/DR. I am highly
                    interested in the company and want to contribute to its
                    growth.
                  </p>
                </div>
                <span className={`${styles.time}`}>23:56</span>
              </li>
              <li className={`${styles.item} ${styles.send}`}>
                <div className={`${styles.wrap}`}>
                  <p className={`${styles.text}`}>
                    Hey, I am interested in the offer. However, I want to revise
                    the price a bit.
                  </p>
                </div>
                <span className={`${styles.time}`}>23:56</span>
              </li>
              <li className={`${styles.item} ${styles.send}`}>
                <div className={`${styles.wrap}`}>
                  <p className={`${styles.text}`}>
                    Hey, I am interested in the offer. However, I want to revise
                    the price a bit.
                  </p>
                </div>
                <span className={`${styles.time}`}>23:56</span>
              </li>
              <li className={`${styles.item} ${styles.send}`}>
                <div className={`${styles.wrap}`}>
                  <p className={`${styles.text}`}>
                    Hey, I am interested in the offer. However, I want to revise
                    the price a bit.
                  </p>
                </div>
                <span className={`${styles.time}`}>23:56</span>
              </li>
              <li className={`${styles.item} ${styles.receive}`}>
                <div className={`${styles.wrap}`}>
                  <p className={`${styles.text}`}>
                    Hey, I am interested in the offer. However, I want to revise
                    the price a bit.
                  </p>
                </div>
                <span className={`${styles.time}`}>23:56</span>
              </li>
              <li className={`${styles.item} ${styles.receive}`}>
                <div className={`${styles.wrap}`}>
                  <p className={`${styles.text}`}>
                    Hey, I am interested in the offer. However, I want to revise
                    the price a bit.
                  </p>
                </div>
                <span className={`${styles.time}`}>23:56</span>
              </li>
            </ul>
          </div>
          <div className={`${styles.footWrap}`}>
            <div className={`${styles.tabWrap}`}>
              <div className="bs-tabs typ-list typ-chat">
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="chat" />
                  <Tab label="Call AI Officer" />
                </Tabs>
                <div className={`${styles.panelWrap}`}>
                  <div
                    className={`${styles.tabPanel}`}
                    role="tabpanel"
                    hidden={value !== 0}
                  ></div>
                  <div
                    className={`${styles.tabPanel}`}
                    role="tabpanel"
                    hidden={value !== 1}
                  >
                    <div className={`${styles.tabContent}`}>
                      <div className={`${styles.headWrap}`}>
                        <h3 className={`${styles.title}`}>Invite AI Officer</h3>
                        <p className={`${styles.subTitle}`}>
                          If you have reached an agreement, you can call AI
                          officer to help you proceed.
                        </p>
                      </div>
                      <div className={`${styles.section}`}>
                        <h2 className={`${styles.secTitle}`}>
                          AGREEMENT PROCESS
                        </h2>
                        <div className={`${styles.cardWrap}`}>
                          <div className={`${styles.card}`}>
                            <div className={`${styles.stepsList}`}>
                              <div className={`${styles.steps}`}>
                                <p>Call AI Officer.</p>
                              </div>
                              <div className={`${styles.steps}`}>
                                <p>Await other party’s confirmation.</p>
                              </div>
                              <div className={`${styles.steps}`}>
                                <p>
                                  Asia Impact Officer will contact both the
                                  parties post-approval.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.footBtn}`}>
                      <Button btnStyle="primary" onClick={handleClick}>
                        Call AI Officer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.inputGroup} ${
                value === 1 ? `${styles.hidden}` : ""
              }`}
            >
              <div className="bs-form typ-full">
                <div className="message-wrap">
                  <FormControl variant="standard">
                    <TextField
                      id="message"
                      multiline
                      maxRows={4}
                      placeholder="Write message here..."
                      name="message"
                    />
                  </FormControl>
                </div>
              </div>
              <button>
                <i className={`${styles.send}`}></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ChatDetails;
