import Header from "src/components/common/header/Header";
import Button from "src/components/common/button/Button";
import CheckBox from "src/components/common/checkbox/CheckBox";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.scss";
import { useState } from "react";

function TermsConditions() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: any) => {
    event.target.checked ? setIsChecked(true) : setIsChecked(false);
  };

  const handleClick = () => {
    navigate("/acknowledgement");
  };
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main">
          <div className={`${styles.section}`}>
            <div className={`${styles.sectionHead}`}>
              <h1 className={`${styles.pgTitle}`}>Terms & Conditions</h1>
            </div>
            <div className="static-cont-list">
              <ul className="list">
                <li className="item">
                  <h3 className="title">Acceptance of Terms</h3>
                  <ul className="sublist">
                    <li className="sub-item">
                      User acceptance of the terms and conditions.
                    </li>
                    <li className="sub-item">Eligibility to use the app.</li>
                    <li className="sub-item">
                      Your commitment to comply with these terms.
                    </li>
                  </ul>
                </li>
                <li className="item">
                  <h3 className="title">Use of the App</h3>
                  <ul className="sublist">
                    <li className="sub-item">
                      Permitted use and access to the app.
                    </li>
                    <li className="sub-item">
                      Prohibited uses and activities.
                    </li>
                    <li className="sub-item">
                      User-generated content guidelines.
                    </li>
                  </ul>
                </li>
                <li className="item">
                  <h3 className="title">Registration and Accounts</h3>
                  <ul className="sublist">
                    <li className="sub-item">
                      Account creation and responsibilities.
                    </li>
                    <li className="sub-item">
                      Account termination and suspension.
                    </li>
                  </ul>
                </li>
                <li className="item">
                  <h3 className="title">Privacy and Data</h3>
                  <ul className="sublist">
                    <li className="sub-item">
                      Data collection, use, and protection.
                    </li>
                    <li className="sub-item">
                      User data rights and permissions.
                    </li>
                  </ul>
                </li>
                <li className="item">
                  <h3 className="title">Eligibility</h3>
                  <ul className="sublist">
                    <li className="sub-item">
                      You must be at least 18 years old and have the legal
                      capacity to enter into agreements to use our services.
                    </li>
                    <li className="sub-item">
                      If you are representing a legal entity, you must have the
                      authority to bind that entity to these terms.
                    </li>
                  </ul>
                </li>
                <li className="item">
                  <h3 className="title">Confidentiality</h3>
                  <ul className="sublist">
                    <li className="sub-item">
                      All information, data, and materials provided to you by
                      the Firm are confidential and proprietary.
                    </li>
                    <li className="sub-item">
                      You agree not to disclose, reproduce, or use such
                      information for any purpose other than evaluating
                      potential investment opportunities.
                    </li>
                  </ul>
                </li>
                <li className="item">
                  <h3 className="title">Investment Commitment</h3>
                  <ul className="sublist">
                    <li className="sub-item">
                      By participating in any investment opportunity presented
                      by the Firm, you acknowledge that the commitment is
                      irrevocable, and you are responsible for any legal
                      obligations arising from such commitments.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="terms-foot">
            <CheckBox
              id="terms"
              label="I have read, understood and accepted all the Terms and Conditions."
              name="termsCondition"
              onChange={handleChange}
            ></CheckBox>
            <div className="cta">
              <Button
                btnStyle="primary"
                type="button"
                onClick={handleClick}
                disabled={!isChecked}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TermsConditions;
