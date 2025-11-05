import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "src/components/common/header/Header";
import Button from "src/components/common/button/Button";
import ProfileCard, {
  ProfileData,
} from "src/components/profile-card/ProfileCard";

export const StepContext = React.createContext<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);
function AddProfilePicture({ currentStep }: { currentStep: number }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile-update/profile-add-advisor");
  };
  const [profileData, setProfileData] = useState<ProfileData>({
    id: "p001",
    firstName: "Mattia",
    lastName: "Binotta",
    profileImage: "",
  });

  const [step, setStep] = useState(currentStep);
  return (
    <StepContext.Provider value={{ step, setStep }}>
      <header>
        <Header
          backLink={true}
          showProgress={true}
          currentStep={step}
          totalSteps={3}
        ></Header>
      </header>

      <div className="lyt-main">
        <div className={`${styles.section}`}>
          <div className={`${styles.sectionHead}`}>
            <div className={`${styles.titleWrap}`}>
              <h1 className={`${styles.pgTitle}`}>Add Profile Picture</h1>
              <button type="button" className="edit-btn" onClick={handleClick}>
                skip
              </button>
            </div>
            <p className={`${styles.subTitle}`}>
              The picture would be only visible to your advisor.
            </p>
          </div>
          <div className={`${styles.sectionCont}`}>
            <div className="profile-card">
              <ProfileCard {...profileData}></ProfileCard>
            </div>
          </div>
        </div>
        <div className={`${styles.footWrap}`}>
          <Button btnStyle="primary" onClick={handleClick}>
            Proceed
          </Button>
        </div>
      </div>
    </StepContext.Provider>
  );
}

export default AddProfilePicture;
