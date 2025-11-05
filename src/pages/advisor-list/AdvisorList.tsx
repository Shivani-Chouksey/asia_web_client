import Header from "src/components/common/header/Header";
import Button from "../../components/common/button/Button";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdvisorDetails() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-advisor");
  };

  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-btn-spacing">
          <section>
            <div className="bs-section typ-lg-top">
              <div className="sec-head">
                <h1 className={`cm-sec-title typ-big ${styles.title}`}>
                  Advisor Details
                </h1>
                <p className={`${styles.subTitle}`}>
                  Manage your Advisor with ease. View your existing Advisor and
                  a add new one in a few taps.
                </p>
              </div>
              <div className="sec-cont">
                <div className={`${styles.subWrap}`}>
                  <ul className={`${styles.subList}`}>
                    <li className={`${styles.subItem}`}>
                      <Link to="/advisor-details">
                        <div className={`${styles.logoWrap}`}>
                          <img
                            src="/assets/icons/ferruccio.svg"
                            alt="ferruccio"
                          />
                        </div>
                        <div className={`${styles.titleWrap}`}>
                          <strong className={`${styles.clientName}`}>
                            Ferruccio Lamborghini
                          </strong>
                        </div>
                        <span className={`${styles.arrowIcon}`}></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={`${styles.footWrap}`}>
          <Button btnStyle="primary" onClick={handleClick}>
            Add Advisor
          </Button>
        </div>
      </main>
    </>
  );
}

export default AdvisorDetails;
