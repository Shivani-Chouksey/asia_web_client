import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import styles from "./style.module.scss";
import PhoneNumber from "../phone-number/PhoneNumber";
import UploadCard from "../upload-card/UploadCard";

export interface LrFieldData {
  cardId: string;
  isFilled?: boolean;
}

function AddLr(props: LrFieldData & { cardIndex: number }) {
  return (
    <div
      className={`${styles.cardWrap} ${
        props.isFilled ? `${styles.dataFilled}` : ""
      }`}
    >
      <Accordion className="bs-accordion typ-2" defaultExpanded={true}>
        <AccordionSummary id="panel2a-header">
          <div className={`${styles.cardHeader}`}>
            <span className={`${styles.icon}`}>
              <i></i>
            </span>
            <div className={`${styles.cardTitle}`}>
              <span>Add LR {props.cardIndex}</span>
              {props.isFilled ? <strong>Name</strong> : ""}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={`${styles.cardCont}`}>
            <div className="form-section typ-card">
              <h3 className="frm-sec-title">Essential details</h3>
              <p className="frm-sec-desc">
                Details required in accordance to EU Laws.
              </p>
              <div className="form-group">
                <FormControl variant="standard">
                  <TextField
                    id="fname"
                    label="First Name"
                    placeholder="First Name"
                  />
                </FormControl>
              </div>
              <div className="form-group">
                <FormControl variant="standard">
                  <TextField
                    id="lname"
                    label="Last Name"
                    placeholder="Last Name"
                  />
                </FormControl>
              </div>
              <div className="form-group typ-phone">
                <PhoneNumber></PhoneNumber>
              </div>
            </div>
            <div className="form-section typ-card">
              <h3 className="frm-sec-title">Identity Proof</h3>
              <p className="frm-sec-desc">
                Essential for background check and verification.
              </p>
              <UploadCard
                uploaded={false}
                uploadType="Identity Proof"
                uploadText="Add Identity Proof"
                cardId="001"
                popupTitle="Identity Proof"
                popupDesc="Essential for background check and verification."
              ></UploadCard>
            </div>
            <div className="form-section typ-card">
              <h3 className="frm-sec-title">Residence Proof </h3>
              <p className="frm-sec-desc">
                To verify communication address and citizenship.
              </p>
              <UploadCard
                uploaded={false}
                uploadType="Address"
                uploadText="Add Address"
                cardId="002"
                popupTitle="Residence Proof"
                popupDesc="To verify communication address and citizenship."
              ></UploadCard>
            </div>
            {/* <div className="form-section typ-card">
                <h3 className="frm-sec-title">Shareholding Register</h3>
                <p className="frm-sec-desc">
                  Essential for background check and verification.
                </p>
                <UploadCard
                  uploaded={false}
                  uploadType="Document"
                  uploadText="Add Power of Attorney"
                  cardId="003"
                  popupTitle="Power of Attorney"
                  popupDesc="Essential for verifying Legal Representative's Authority."
                ></UploadCard>
              </div> */}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AddLr;
