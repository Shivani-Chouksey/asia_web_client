import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "src/components/common/button/Button";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export default function AccordionModule() {
  return (
    <div className={`${styles.accordionWrap}`}>
      <Accordion
        className="bs-accordion typ-card"
        defaultExpanded={true}
        // disabled={props.interestedBuyerSeller?.length === 0}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <div className={`${styles.titleWrap}`}>
            <strong>UBO Details</strong>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={`${styles.detailsWrap}`}>
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
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
