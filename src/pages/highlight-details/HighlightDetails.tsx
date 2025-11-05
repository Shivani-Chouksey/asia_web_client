import { useState } from "react";
import styles from "./style.module.scss";
import Header from "src/components/common/header/Header";
import Button from "src/components/common/button/Button";
import { useNavigate } from "react-router-dom";

function HighlightDetail() {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/acknowledgement");
  };
  const [highlightDetail, setHighlightDetail] = useState({
    eventTitle: "Focus on Climate Hedging",
    eventLocation: "Milan, Italy",
    eventDate: "8th Aug, 2024",
    eventTime: "16:00-17:00 CET",
    eventBody: `<p>In the face of escalating climate challenges, businesses are increasingly turning towards climate hedging as a strategic imperative. Acknowledging the risks posed by climate change, companies are implementing innovative solutions to mitigate environmental impact. From renewable energy investments to carbon offset initiatives, the focus on climate hedging not only safeguards against potential risks but also aligns businesses with global sustainability goals. Embracing this forward-looking approach not only future-proofs operations but also contributes to building a more resilient and environmentally conscious business ecosystem, where companies actively play a role in combating climate change for a sustainable future.</p>`,
    eventImage:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
  });
  return (
    <>
      <header>
        <Header backLink={true} actionItems={["favorite"]}></Header>
      </header>
      <main>
        <div className="lyt-main typ-highlight-detail">
          <section>
            <div className="bs-section">
              <div className="sec-cont">
                <div className={`${styles.highlightDetailWrap}`}>
                  <div className={`${styles.imgWrap}`}>
                    <img src={highlightDetail.eventImage} alt="" />
                  </div>
                  <div className={`${styles.contentWrap}`}>
                    <div className={`${styles.contHead}`}>
                      <h1 className={`${styles.eventTitle}`}>
                        {highlightDetail.eventTitle}
                      </h1>
                      <span className={`${styles.date}`}>
                        <i className={`${styles.location}`}></i>
                        {highlightDetail.eventLocation}
                      </span>
                      <span className={`${styles.date}`}>
                        <i className={`${styles.calendar}`}></i>
                        {highlightDetail.eventDate}
                      </span>
                      <span className={`${styles.date}`}>
                        <i className={`${styles.time}`}></i>
                        {highlightDetail.eventTime}
                      </span>
                    </div>
                    <div className={`${styles.section}`}>
                      <h3 className={`${styles.secTitle}`}>About</h3>
                      <div
                        className="cont-body"
                        dangerouslySetInnerHTML={{
                          __html: highlightDetail.eventBody,
                        }}
                      ></div>
                    </div>
                    <div className={`${styles.section}`}>
                      <h2 className={`${styles.secTitle}`}>Itinerary</h2>
                      <div className={`${styles.cardWrap}`}>
                        <div className={`${styles.card}`}>
                          <div className={`${styles.stepsList}`}>
                            <div className={`${styles.steps}`}>
                              <p>Commencement address</p>
                            </div>
                            <div className={`${styles.steps}`}>
                              <p>Key note session by Rinaldo Piaggio </p>
                            </div>
                            <div className={`${styles.steps}`}>
                              <p>Circular economy in sustainability</p>
                            </div>
                            <div className={`${styles.steps}`}>
                              <p>Insights into Banyan Nation</p>
                            </div>
                            <div className={`${styles.steps}`}>
                              <p>Closing address</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.section}`}>
                      <h2 className={`${styles.secTitle}`}>
                        Kindly ensure the following.
                      </h2>
                      <div className={`${styles.cardWrap}`}>
                        <div className={`${styles.card}`}>
                          <div className={`${styles.checkList}`}>
                            <div className={`${styles.iconTextWrap}`}>
                              <i className={`${styles.check}`}></i>
                              <span className={`${styles.date}`}>
                                Reach 20 minutes before the event.
                              </span>
                            </div>
                            <div className={`${styles.iconTextWrap}`}>
                              <i className={`${styles.check}`}></i>
                              <span className={`${styles.date}`}>
                                Adhere to the seating chart.
                              </span>
                            </div>
                            <div className={`${styles.iconTextWrap}`}>
                              <i className={`${styles.check}`}></i>
                              <span className={`${styles.date}`}>
                                Mobile phones on silent during the event.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.section}`}>
                      <h2 className={`${styles.secTitle}`}>Venue</h2>
                      <div className={`${styles.content}`}>
                        <span className={`${styles.textLine}`}>
                          Hotel Sanpi Milano,
                        </span>
                        <span className={`${styles.textLine}`}>
                          Via Lazzaro Palazzi 18,
                        </span>
                        <span className={`${styles.textLine}`}>
                          Milan, Italy, 20124
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.section}`}>
                      <h2 className={`${styles.secTitle}`}>For any queries</h2>
                      <div className={`${styles.content}`}>
                        <span className={`${styles.textLine}`}>
                          Write to
                          <a href="" className={`${styles.linkText}`}>
                            eventi@asiaimpact.com
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="act-foot">
            <Button btnStyle="primary" onClick={handleClick}>
              Interested
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default HighlightDetail;
