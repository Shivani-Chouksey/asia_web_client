import React, { useState } from "react";
import AddClientCard, {
  AddClientCardData,
} from "src/components/add-client-card/AddClientCard";
import Header from "src/components/common/header/Header";
import Button from "../../components/common/button/Button";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

function AddClient() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/confirm-client");
  };
  const [cardCount, setCardCount] = useState(1);
  const [isProceedDisabled, setIsProceedDisabled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [addClientButtonClicked, setAddClientButtonClicked] = useState(false);

  const handleAddCard = () => {
    setCardCount((prevCount) => prevCount + 1);
    setIsDisabled(true);
    setAddClientButtonClicked(true);
    setIsProceedDisabled(false);
  };
  const handleConfirm = () => {
    setIsDisabled(false);
    setAddClientButtonClicked(false);
    setIsProceedDisabled(true);
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
                  Your Clients
                </h1>
                <p className={`${styles.subtitle}`}>
                  Manage your Clients with ease. View your existing Clients and
                  add new ones in a few taps.
                </p>
              </div>
              <div className="sec-cont">
                <div className={`${styles.contWrap}`}>
                  <ul className={`${styles.cardList}`}>
                    {[...Array(cardCount)].map((_, index) => (
                      <li className={`${styles.cardItem}`} key={index}>
                        <AddClientCard
                          cardCount={index + 1}
                          onConfirm={handleConfirm}
                        />
                      </li>
                    ))}
                    <button
                      type="button"
                      disabled={isDisabled || addClientButtonClicked}
                      className={`${styles.addBtn}`}
                      onClick={handleAddCard}
                    >
                      <i className={`${styles.addIcon}`}></i>
                      Add another Client
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className={`${styles.footWrap}`}>
            <Button
              btnStyle="primary"
              disabled={!isProceedDisabled}
              onClick={handleClick}
            >
              Proceed
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddClient;
