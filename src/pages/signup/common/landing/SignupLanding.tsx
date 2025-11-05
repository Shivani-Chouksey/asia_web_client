import { Link } from "react-router-dom";
import Button from "src/components/common/button/Button";
import Header from "src/components/common/header/Header";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import styles from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupLanding() {
  const [openOnboardDrawer, setOpenOnboardDrawer] = useState(false);
  const [selectedOnboardType, setSelectedOnboardType] = useState("");
  const [bsBtnState, setBsBtnState] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/signup/intro");
  };
  const handleRadio = (event: any) => {
    setSelectedOnboardType(event.target.id);
  };

  const handleOpenBottomSheet = () => {
    setOpenOnboardDrawer(true);
    setSelectedOnboardType("");
  };

  const handleCloseBottomSheet = () => {
    setOpenOnboardDrawer(false);
    setSelectedOnboardType("");
  };

  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-signup">
          <h1 className={`${styles.title}`}>Do you want to onboard?</h1>
          <div className={`${styles.cardWrap}`}>
            <div className={`${styles.userCardList}`}>
              <div className={`${styles.journeyCard}`}>
                <button onClick={handleOpenBottomSheet}>
                  <span
                    className={`${styles.userIcon} ${styles.investor}`}
                  ></span>
                  <div className={`${styles.titleDescWrap}`}>
                    <strong>As an investor</strong>
                    <p>
                      Become an investor and contribute to a more sustainable
                      world.
                    </p>
                  </div>
                  <span className={`${styles.arrowIcon}`}></span>
                </button>
              </div>
              <div className={`${styles.journeyCard}`}>
                <Link to="">
                  <span
                    className={`${styles.userIcon} ${styles.advisor}`}
                  ></span>
                  <div className={`${styles.titleDescWrap}`}>
                    <strong>As an Advisor</strong>
                    <p>
                      Onboard as an already existing advisor to our investors.
                    </p>
                  </div>
                  <span className={`${styles.arrowIcon}`}></span>
                </Link>
              </div>
              {/* <div className={`${styles.journeyCard}`}>
                <Link to="">
                  <span
                    className={`${styles.userIcon} ${styles.company}`}
                  ></span>
                  <div className={`${styles.titleDescWrap}`}>
                    <strong>As a Company</strong>
                    <p>Onboard your organization as a legal entity.</p>
                  </div>
                  <span className={`${styles.arrowIcon}`}></span>
                </Link>
              </div> */}
            </div>
            {/* <div className={`${styles.actWrap}`}>
              <Button btnStyle="text" navigation={true} navigationUrl="/">
                <span>Skip and Explore</span>
                <i className={`${styles.arrowIcon}`}></i>
              </Button>
            </div> */}
          </div>
        </div>
      </main>
      <BottomSheet
        title="How do you want to onboard?"
        subText="Select the type of category you want to onboard as."
        primaryBtnText="Confirm"
        size="small"
        open={openOnboardDrawer}
        setOpen={handleCloseBottomSheet}
        btnDisabled={selectedOnboardType === ""}
        btnOnClick={handleNavigate}
      >
        <div className={`${styles.cardCont}`}>
          <div className={`${styles.cardWrap}`}>
            <div className={`${styles.journeyCard}`}>
              <input
                type="radio"
                id="naturalPerson"
                name="onboardType"
                checked={selectedOnboardType === "naturalPerson"}
                onChange={handleRadio}
              />
              <label htmlFor="naturalPerson">
                <span
                  className={`${styles.userIcon} ${styles.investor}`}
                ></span>
                <div className={`${styles.titleDescWrap}`}>
                  <strong>As a Natural Person</strong>
                  <p>
                    Become an investor and contribute to a more sustainable
                    world.
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div className={`${styles.cardWrap}`}>
            <div className={`${styles.journeyCard}`}>
              <input
                type="radio"
                id="legalEntity"
                name="onboardType"
                checked={selectedOnboardType === "legalEntity"}
                onChange={handleRadio}
              />
              <label htmlFor="legalEntity">
                <span className={`${styles.userIcon} ${styles.company}`}></span>
                <div className={`${styles.titleDescWrap}`}>
                  <strong>As a Legal Entity</strong>
                  <p>Onboard as a legal entity and contribute further.</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

export default SignupLanding;
