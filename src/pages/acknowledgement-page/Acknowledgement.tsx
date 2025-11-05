import { useState } from "react";
import SuccessError, {
  AcknowledgementMsgProp,
} from "src/components/success-error/SuccessError";
import Button from "../../components/common/button/Button";
import styles from "./style.module.scss";

function Acknowledgement() {
  const [acknowledgementMsg, setAcknowledgementMsg] =
    useState<AcknowledgementMsgProp>({
      title: "Process Completed!",
      content:
        "We need 3-5 business days to review your application. Until then, browse latest news on the platform.",
      type: "success",
    });

  return (
    <>
      <SuccessError {...acknowledgementMsg}></SuccessError>
      <div className={`${styles.footWrap}`}>
        <Button btnStyle="primary" navigation={true} navigationUrl="/impact">
          Proceed
        </Button>
      </div>
    </>
  );
}

export default Acknowledgement;
