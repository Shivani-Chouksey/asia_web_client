import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export interface ReportCardData {
  reportId: string;
  reportTitle: string;
  reportDate: string;
  reportType: string;
  reportTag?: string;
}

function newsTagGeneration(tag: string) {
  let resultTag = "";
  switch (tag) {
    case "Leading":
      resultTag = "leading";
      break;
    case "Highlight":
      resultTag = "highlight";
      break;
    case "Latest":
      resultTag = "latest";
      break;
    case "In Focus":
      resultTag = "focus";
      break;
    case "Trending":
      resultTag = "trending";
      break;
    default:
      resultTag = "";
      break;
  }
  return resultTag;
}

function ReportsCard(props: ReportCardData & { bigCard?: boolean }) {
  return (
    <div
      className={`${styles.cardWrap} ${
        props.bigCard ? `${styles.typBig}` : ""
      }`}
    >
      <Link to="/report-detail">
        <div className={`${styles.headWrap}`}>
          <h3 className={`${styles.cardTitle}`}>{props.reportTitle}</h3>
          {props.reportTag ? (
            <span
              className={`${styles.tag} cm-tag typ-${newsTagGeneration(
                props["reportTag"]
              )}`}
            >
              {props.reportTag}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className={`${styles.footWrap}`}>
          <span className={`${styles.date}`}>{props.reportDate}</span>
          <span className={`${styles.reportType}`}>
            {props.reportType}{" "}
            <i className={`${styles.cmIcon} ${styles.arrowRight}`}></i>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ReportsCard;
