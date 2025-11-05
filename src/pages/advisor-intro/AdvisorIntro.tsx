import Header from "src/components/common/header/Header";
import Button from "../../components/common/button/Button";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

function AdvisorIntro() {
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
        <div className="introScreen">
          <div className={`${styles.logoContentWrap}`}>
            <i className={`${styles.success}`}></i>
            <div className={`${styles.contentWrap}`}>
              <h2 className={`${styles.title}`}>Add Advisor</h2>
              <p className={`${styles.description}`}>
                Advisor can provide valuable insights on portfolio companies and
                provide guidance.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className={`${styles.footWrap}`}>
        <Button btnStyle="primary" onClick={handleClick}>
          Add Advisor
        </Button>
      </div>
    </>
  );
}

export default AdvisorIntro;
