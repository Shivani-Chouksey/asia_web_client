import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import { TextField } from "@mui/material";
import Button from "src/components/common/button/Button";

function AddAdvisor() {
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section">
              <div className="sec-head">
                <h1 className={`cm-sec-title typ-big ${styles.title}`}>
                  Add Advisor
                </h1>
                <p className={`${styles.subtitle}`}>
                  Enter your Advisors email ID’s to invite them. They will
                  receive a confirmation email to join you.
                </p>
              </div>
              <div className="sec-cont">
                <div className="bs-form">
                  <form action="">
                    <div className="form-group">
                      <TextField
                        label="Email ID"
                        placeholder="Email ID"
                      ></TextField>
                    </div>
                    <div className="form-foot">
                      <Button btnStyle="primary" type="submit" disabled>
                        Proceed
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AddAdvisor;
