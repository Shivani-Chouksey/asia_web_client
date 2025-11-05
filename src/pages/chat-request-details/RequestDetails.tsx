import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import Button from "src/components/common/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RequestDetails() {
  const navigate = useNavigate();
  const [openDeleteDrawer, setOpenDeleteDrawer] = useState(false);

  return (
    <>
      <header>
        <Header
          backLink={true}
          actionItems={["delete"]}
          pageTitle="Request Details"
        ></Header>
      </header>
      <main>
        <div className="lyt-main">
          <div className={`${styles.contWrap}`}>
            <div className={`${styles.card}`}>
              <div className={`${styles.cardHead}`}>
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
              <div className={`${styles.cardFoot}`}>
                <p className={`${styles.desc}`}>
                  I am interested in buying 500 DRs for 5€/DR. I am highly
                  interested in the company and want to contribute to its
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomSheet
        title="Delete Request?"
        subText="Once you delete the request, you will not be able to retrieve it back."
        primaryBtnText="Delete"
        size="small"
        open={openDeleteDrawer}
        setOpen={setOpenDeleteDrawer}
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
      </BottomSheet>
    </>
  );
}

export default RequestDetails;
