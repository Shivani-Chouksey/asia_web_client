import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import { TextField } from "@mui/material";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import { useState } from "react";

function ConfirmClient() {
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-details-form">
          <div className={`${styles.section}`}>
            <div className={`${styles.sectionHead}`}>
              <h1 className={`${styles.pgTitle}`}>Confirm Clients</h1>
              <p className={`${styles.description}`}>
                Confirmation email will be sent to the below added Clients for
                their approval.
              </p>
            </div>
            <div className="bs-confirmation">
              <div className="cont">
                <ul className="list">
                  <li className="item">
                    <div className="bs-form">
                      <div className="form-group">
                        <TextField
                          value={"rinaldo.piaggio@hotmail.com"}
                          label="Client #1"
                          InputProps={{ readOnly: true }}
                        ></TextField>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="bs-form">
                      <div className="form-group">
                        <TextField
                          value={"alessandramussolini99@gmail.com"}
                          label="Client #2"
                          InputProps={{ readOnly: true }}
                        ></TextField>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form-foot">
              <Button
                btnStyle="primary"
                navigation={true}
                navigationUrl="/acknowledgement"
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

export default ConfirmClient;
