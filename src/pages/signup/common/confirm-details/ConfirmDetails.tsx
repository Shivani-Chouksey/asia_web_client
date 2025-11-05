import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function ConfirmDetails() {
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-details-form">
          <div className={`${styles.section}`}>
            <div className={`${styles.sectionHead}`}>
              <h1 className={`${styles.pgTitle}`}>Confirm details</h1>
            </div>
            <div className="bs-confirmation">
              <div className="confirm-card">
                <div className="head-wrap">
                  <strong className="card-title">Personal Details</strong>
                  <Button btnStyle="text">Edit</Button>
                </div>
                <div className="cont-wrap">
                  <ul className="label-value-list">
                    <li className="label-value-item">
                      <label>Name</label>
                      <span className="value">Mattia Binotta</span>
                    </li>
                    <li className="label-value-item">
                      <label>Phone Number</label>
                      <span className="value">+39 - 800123456</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="confirm-card">
                <div className="head-wrap">
                  <strong className="card-title">Identification Proof</strong>
                  <Button btnStyle="text">Edit</Button>
                </div>
                <div className="cont-wrap">
                  <ul className="label-value-list">
                    <li className="label-value-item">
                      <label>Identity Proof</label>
                      <span className="value">Passport</span>
                    </li>
                    <li className="label-value-item">
                      <label>Passport Number</label>
                      <span className="value">CDD 56 8966 5445 </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="confirm-card">
                <div className="head-wrap">
                  <strong className="card-title">Residence Proof</strong>
                  <Button btnStyle="text">Edit</Button>
                </div>
                <div className="cont-wrap">
                  <ul className="label-value-list">
                    <li className="label-value-item">
                      <label>Address</label>
                      <span className="value">
                        05, Via dell'Industria 5, near Pagani HQ, 41018, San
                        Cesario Sul Panaro
                      </span>
                    </li>
                    <li className="label-value-item">
                      <label>Address Proof</label>
                      <span className="value">CDD 56 8966 5445</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <Accordion className="bs-accordion" defaultExpanded={true}>
                <AccordionSummary id="panel2a-header">
                  <div className={`${styles.cardHeader}`}>
                    <div className={`${styles.cardTitle}`}>UBO Details</div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={`${styles.cardCont}`}>
                    <div className="confirm-card">
                      <div className="head-wrap">
                        <strong className="card-title">UBO1</strong>
                        <Button btnStyle="text">Edit</Button>
                      </div>
                      <div className="cont-wrap">
                        <ul className="label-value-list">
                          <li className="label-value-item">
                            <label>Name</label>
                            <span className="value">Mattia Binotta</span>
                          </li>
                          <li className="label-value-item">
                            <label>Phone Number</label>
                            <span className="value">+39 - 800123456</span>
                          </li>
                          <li className="label-value-item">
                            <label>Identity Proof</label>
                            <span className="value">Passport</span>
                          </li>
                          <li className="label-value-item">
                            <label>Address</label>
                            <span className="value">
                              05, Via dell'Industria 5, near Pagani HQ, 41018,
                              San Cesario Sul Panaro
                            </span>
                          </li>
                          <li className="label-value-item">
                            <label>Proof of Address</label>
                            <span className="value">Gas Bill</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="confirm-card">
                      <div className="head-wrap">
                        <strong className="card-title">UBO2</strong>
                        <Button btnStyle="text">Edit</Button>
                      </div>
                      <div className="cont-wrap">
                        <ul className="label-value-list">
                          <li className="label-value-item">
                            <label>Name</label>
                            <span className="value">Mattia Binotta</span>
                          </li>
                          <li className="label-value-item">
                            <label>Phone Number</label>
                            <span className="value">+39 - 800123456</span>
                          </li>
                          <li className="label-value-item">
                            <label>Identity Proof</label>
                            <span className="value">Passport</span>
                          </li>
                          <li className="label-value-item">
                            <label>Address</label>
                            <span className="value">
                              05, Via dell'Industria 5, near Pagani HQ, 41018,
                              San Cesario Sul Panaro
                            </span>
                          </li>
                          <li className="label-value-item">
                            <label>Proof of Address</label>
                            <span className="value">Gas Bill</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion> 
              <Accordion className="bs-accordion" defaultExpanded={true}>
                <AccordionSummary id="panel2a-header">
                  <div className={`${styles.cardHeader}`}>
                    <div className={`${styles.cardTitle}`}>
                      Point of Contact Details
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={`${styles.cardCont}`}>
                    <div className="confirm-card">
                      <div className="head-wrap">
                        <strong className="card-title">Details</strong>
                        <Button btnStyle="text">Edit</Button>
                      </div>
                      <div className="cont-wrap">
                        <ul className="label-value-list">
                          <li className="label-value-item">
                            <label>Name</label>
                            <span className="value">Ferruccio Lamborghini</span>
                          </li>
                          <li className="label-value-item">
                            <label>Email ID</label>
                            <span className="value">ferruccio@xyz.com</span>
                          </li>
                          <li className="label-value-item">
                            <label>Country of Residence</label>
                            <span className="value">Italy</span>
                          </li>
                          <li className="label-value-item">
                            <label>Phone Number</label>
                            <span className="value">+39 - 800123456</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion> */}
            </div>
            <div className="form-foot">
              <Button
                btnStyle="primary"
                navigation={true}
                navigationUrl="/terms-conditions"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ConfirmDetails;
