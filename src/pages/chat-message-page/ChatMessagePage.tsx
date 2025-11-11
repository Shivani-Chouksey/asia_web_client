import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import CheckBox from "src/components/common/checkbox/CheckBox";
import Button from "src/components/common/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getSocket } from "src/socketService";
import SOCKET_EVENTS from "src/socketEvents";

function ChatMessagePage() {
  const navigate = useNavigate();
  const [openNoteDrawer, setOpenNoteDrawer] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [openRejectDrawer, setOpenRejectDrawer] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState();
  const location = useLocation();
  const notificationData: any = location.state;
  console.log("notification datafrom   location", notificationData);

  const handleCheckboxChange = (event: any) => {
    event.target.checked
      ? setIsCheckboxChecked(true)
      : setIsCheckboxChecked(false);
  };

  const handleButtonClick = async () => {
    setOpenNoteDrawer(true);

    const socket = getSocket();
    if (!socket || !socket.connected) {
      console.error('Socket not connected yet');
      return;
    } else {
      const data = {
        company_req_id: notificationData.data.id,
        chat_note_accept_status: true
      }
       // Emit ACCEPT_CHAT to server
      socket.emit(SOCKET_EVENTS.ACCEPT_CHAT, data);

       // Listen for CHAT_STARTED response
      socket.on(SOCKET_EVENTS.CHAT_STARTED, (data:any) => {
        navigate('/chat-details', { state: data })

      })
    }


  };



  return (
    <>
      <header>
        <Header backLink={true} actionItems={["more"]}></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section typ-news">
              <div className={`${styles.headWrap}`}>
                <h3 className={`${styles.title}`}>New Message Received</h3>
                <p className={`${styles.subTitle}`}>
                  You can choose to reply to the message or reject the chat
                  offer.
                </p>
              </div>
              {notificationData && (
                // notificationData.map((notif: any, index: number) => (
                <>
                  <div className={styles.contWrap}>
                    <div className={styles.card}>
                      <div className={styles.cardHead}>
                        <div className={styles.companyWrap}>
                          <span className={`${styles.companyLogo}`}>
                            <img
                              src="/assets/logos/banyan-nation-logo.png"
                              alt=""
                            />
                          </span>
                          <div className={styles.companyIntro}>
                            <strong className={styles.companyName}>
                              {notificationData.data.companyInfo?.name}
                            </strong>
                            <span className={styles.tag}>
                              {notificationData.data.companyInfo?.type || 'India'}
                            </span>
                          </div>
                        </div>
                        <span className={styles.cardTag}>new</span>
                      </div>
                      <div className={styles.cardFoot}>
                        <p className={styles.desc}>{notificationData.data.message}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.footWrap}`}>
                    <Button
                      btnStyle="secondary"
                      onClick={() => {
                        setOpenRejectDrawer(true);
                      }}
                    >
                      Reject
                    </Button>
                    <Button
                      btnStyle="primary"
                      onClick={() => {
                        setSelectedNotification(notificationData.id)
                        setOpenNoteDrawer(true);
                      }}
                    >
                      Chat
                    </Button>
                  </div>
                </>
                // ))
              )}

              {/* <div className={`${styles.contWrap}`}>
                <div className={`${styles.card}`}>
                  <div className={`${styles.cardHead}`}>
                    <div className={`${styles.companyWrap}`}>
                      <span className={`${styles.companyLogo}`}>
                        <img
                          src="/assets/logos/banyan-nation-logo.png"
                          alt=""
                        />
                      </span>
                      <div className={`${styles.companyIntro}`}>
                        <strong className={`${styles.companyName}`}>
                          {notif.companyInfo?.name}
                        </strong>
                        <span className={`${styles.tag}`}>{notif.companyInfo?.country || 'India'}</span>
                      </div>
                    </div>
                    <span className={`${styles.cardTag}`}>new</span>
                  </div>
                  <div className={`${styles.cardFoot}`}>
                    <p className={`${styles.desc}`}>
                      {notif.message}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </section>

        </div>
      </main>
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
      <BottomSheet
        title="Reject Request?"
        primaryBtnText="Reject"
        size="large"
        center={true}
        open={openRejectDrawer}
        setOpen={setOpenRejectDrawer}
      >
        <div className={`${styles.rejectDrawer}`}>
          <div className={`${styles.rejectWrap}`}>
            <span className={`${styles.remove}`}></span>
            <p className={`${styles.content}`}>
              Once you reject the request, it would be removed from your pending
              requests.
            </p>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

export default ChatMessagePage;
