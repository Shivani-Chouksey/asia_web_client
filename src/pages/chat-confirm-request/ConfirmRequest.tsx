import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getSocket } from "src/socketService";
import SOCKET_EVENTS from "src/socketEvents";
import axios from "axios";
import API_ENDPOINTS from "src/api-endpoints";
import { toast } from "react-toastify";

function ConfirmRequest() {
  const navigate = useNavigate();
  const location = useLocation()
  const [openRejectDrawer, setOpenRejectDrawer] = useState(false);
  const requestData = location.state
  console.log("confirm req data ", location.state);
  const AcceptRejectReqHandler = async (req_status: string) => {
    try {
      console.log('req_status', req_status);

      const res = await axios.post(API_ENDPOINTS.approve_ai_officer_req, { company_req_id: requestData.data.id, req_status },{headers:{Authorization:`Bearer ${sessionStorage.getItem('access_token')}`}})
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }


  return (
    <>
      <header>
        <Header backLink={true} actionItems={["more"]}></Header>
      </header>
      <main>
        <div className="lyt-main typ-request">
          <h1 className={`${styles.title}`}>Confirm Request</h1>
          <p className={`${styles.subTitle}`}>
            Your approval is awaited to invite the AI Officer.
          </p>
          <div className={`${styles.section}`}>
            <h2 className={`${styles.secTitle}`}>AGREEMENT PROCESS</h2>
            <div className={`${styles.cardWrap}`}>
              <div className={`${styles.card}`}>
                <div className={`${styles.infoCont}`}>
                  <i className={`${styles.error}`}></i>
                  <span className={`${styles.desc}`}>
                    AI Officer has been invited by the first party.
                  </span>
                </div>
                <div className={`${styles.stepsList}`}>
                  <div className={`${styles.steps}`}>
                    <p>Awaiting your approval.</p>
                  </div>
                  <div className={`${styles.steps}`}>
                    <p>First party will be notified.</p>
                  </div>
                  <div className={`${styles.steps}`}>
                    <p>
                      Asia Impact Officer will contact both the parties
                      post-approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.footWrap}`}>
            <Button
              btnStyle="secondary"
              onClick={() => {
                setOpenRejectDrawer(true);
                AcceptRejectReqHandler('rejected')
              }}
            >
              Reject
            </Button>
            <Button btnStyle="primary" onClick={() => AcceptRejectReqHandler('accepted')}>Confirm</Button>
          </div>
        </div>
      </main>
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

export default ConfirmRequest;
