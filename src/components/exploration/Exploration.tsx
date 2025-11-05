import styles from "./style.module.scss";
import Button from "../common/button/Button";

export interface ExploreData {
  title: string;
  exploreImage: string;
}

function Exploration() {
  return (
    <div className={`${styles.logoContentWrap}`}>
      <div className={`${styles.exploreImage}`}>
        {/* <img src={props.exploreImage} alt={`explore-${[props.title]}`} /> */}
        {/* <img
          src="../../../public/assets/logos/explore-opportunities.png"
          alt="opp"
        /> */}
      </div>
      <div className={`${styles.contentWrap}`}>
        <h2 className={`${styles.title}`}>Register to View Opportunities</h2>
      </div>
      <div className={`${styles.footWrap}`}>
        <Button btnStyle="primary">Register</Button>
      </div>
    </div>
  );
}

export default Exploration;
