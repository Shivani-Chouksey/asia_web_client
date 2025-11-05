import Header from "src/components/common/header/Header";
import Button from "../../components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import styles from "./style.module.scss";
import { useState } from "react";

function AdvisorDetails() {
  interface ButtonStyleState {
    chat: "primary" | "text";
    participate: "primary" | "text";
    placeBid: "primary" | "text";
    viewPortfolio: "primary" | "text";
  }
  const [buttonStyle, setButtonStyle] = useState<ButtonStyleState>({
    chat: "primary",
    participate: "primary",
    placeBid: "primary",
    viewPortfolio: "primary",
  });

  //   const handleClick = () => {};
  const handleClick = (btnKey: keyof ButtonStyleState) => {
    setButtonStyle((prevState: ButtonStyleState) => ({
      ...prevState,
      [btnKey]: prevState[btnKey] === "primary" ? "text" : "primary",
    }));
  };
  return (
    <>
      <header>
        <Header backLink={true} actionItems={["delete"]}></Header>
      </header>
      <main>
        <div className="lyt-main typ-ps">
          <section>
            <div className="bs-section ">
              <div className="sec-head">
                <h1 className={`cm-sec-title typ-big ${styles.title}`}>
                  Advisor Details
                </h1>
              </div>
              <div className="sec-cont">
                <div className="bs-profile-card typ-lg">
                  <div className="client-profile">
                    <div className="logo-wrap">
                      <img src="/assets/icons/ferruccio.svg" alt="ferruccio" />
                    </div>
                    <div className="title-wrap">
                      <strong className="title-text">
                        Ferruccio Lamborghini
                      </strong>
                      <p className="mail-text">ferruccio@ferrari.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bs-section typ-access">
              <div className="sec-head">
                <h1 className={`cm-sec-title ${styles.secTitle}`}>
                  Manage Access
                </h1>
              </div>
              <div className="sec-cont">
                <div className={`${styles.cardCont}`}>
                  <h2 className={`${styles.contTitle}`}>Chat</h2>
                  <div className={`${styles.cardWrap}`}>
                    <div className={`${styles.card}`}>
                      <ul className={`${styles.list}`}>
                        <li className={`${styles.item}`}>
                          <div className={`${styles.textWrap}`}>
                            <span className={`${styles.text}`}>View Chat</span>
                            <span className={`${styles.details}`}>
                              Can the Advisor see your chats?
                            </span>
                          </div>
                          <div className={`${styles.ctaWrap}`}>
                            <Button
                              btnStyle={buttonStyle.chat}
                              onClick={() => handleClick("chat")}
                            >
                              No
                            </Button>
                            <Button
                              btnStyle={
                                buttonStyle.chat === "primary"
                                  ? "text"
                                  : "primary"
                              }
                              onClick={() => handleClick("chat")}
                            >
                              Yes
                            </Button>
                          </div>
                        </li>
                        <li className={`${styles.item}`}>
                          <div className={`${styles.textWrap}`}>
                            <span className={`${styles.text}`}>
                              Participate in Chat
                            </span>
                            <span className={`${styles.details}`}>
                              Can the Advisor chat on your behalf?
                            </span>
                          </div>
                          <div className={`${styles.ctaWrap}`}>
                            <Button
                              btnStyle={buttonStyle.participate}
                              onClick={() => handleClick("participate")}
                            >
                              No
                            </Button>
                            <Button
                              btnStyle={
                                buttonStyle.participate === "primary"
                                  ? "text"
                                  : "primary"
                              }
                              onClick={() => handleClick("participate")}
                            >
                              Yes
                            </Button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className={`${styles.cardCont}`}>
                  <h2 className={`${styles.contTitle}`}>Bids</h2>
                  <div className={`${styles.cardWrap}`}>
                    <div className={`${styles.card}`}>
                      <ul className={`${styles.list}`}>
                        <li className={`${styles.item}`}>
                          <div className={`${styles.textWrap}`}>
                            <span className={`${styles.text}`}>
                              Place a bid
                            </span>
                            <span className={`${styles.details}`}>
                              Can the Advisor place a bid on your behalf?
                            </span>
                          </div>
                          <div className={`${styles.ctaWrap}`}>
                            <Button
                              btnStyle={buttonStyle.placeBid}
                              onClick={() => handleClick("placeBid")}
                            >
                              No
                            </Button>
                            <Button
                              btnStyle={
                                buttonStyle.placeBid === "primary"
                                  ? "text"
                                  : "primary"
                              }
                              onClick={() => handleClick("placeBid")}
                            >
                              Yes
                            </Button>
                          </div>
                        </li>
                        <li className={`${styles.item}`}>
                          <div className={`${styles.textWrap}`}>
                            <span className={`${styles.text}`}>
                              View Portfolio
                            </span>
                            <span className={`${styles.details}`}>
                              Can the Advisor see your Portfolio?
                            </span>
                          </div>
                          <div className={`${styles.ctaWrap}`}>
                            <Button
                              btnStyle={buttonStyle.viewPortfolio}
                              onClick={() => handleClick("viewPortfolio")}
                            >
                              No
                            </Button>
                            <Button
                              btnStyle={
                                buttonStyle.viewPortfolio === "primary"
                                  ? "text"
                                  : "primary"
                              }
                              onClick={() => handleClick("viewPortfolio")}
                            >
                              Yes
                            </Button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AdvisorDetails;
