import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/common/header/Header";

export const StepContext = React.createContext<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);
function DetailsForm() {
  const [step,setStep] = useState(1);
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
      <Outlet />
      </StepContext.Provider>

  );
}

export default DetailsForm;
