import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export interface NewsCardData {
  newsID: string;
  newsTitle: string;
  newsDate: string;
  newsTag: string;
  newsImage: string;
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

function NewsCard(props: NewsCardData & { smallCard?: boolean }) {
  return (
    <div
      className={`${styles.cardWrap} ${
        props.smallCard ? `${styles.typSmall}` : ""
      }`}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 18.75%, rgba(0, 0, 0, 0.00) 54.67%, rgba(0, 0, 0, 0.10) 75.09%, rgba(0, 0, 0, 0.80) 98.44%), url(${props.newsImage}), lightgray no-repeat`,
      }}
    >
      <Link to="/news-detail">
        <span
          className={`${styles.tag} cm-tag typ-${newsTagGeneration(
            props["newsTag"]
          )}`}
        >
          {props["newsTag"]}
        </span>
        <h3 className={`${styles.cardTitle}`}>{props["newsTitle"]}</h3>
        <span className={`${styles.date}`}>{props["newsDate"]}</span>
      </Link>
    </div>
  );
}

export default NewsCard;
