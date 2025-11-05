import styles from "./style.module.scss";
import Button from "../common/button/Button";
import { useNavigate } from "react-router-dom";

// export interface ClientData {
//   title: string;
//   exploreImage: string;
// }

function SelectClient() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/portfolios", { state: { openClientDrawer: true } });
  };

  return (
    <div className={`${styles.logoContentWrap}`}>
      <div className={`${styles.image}`}>
        <img src="/assets/icons/user-square.svg" alt="select-client" />
      </div>
      <div className={`${styles.contentWrap}`}>
        <h2 className={`${styles.title}`}>Select Client</h2>
        <p className={`${styles.description}`}>
          Once selected, you’ll be shown selected Clients Portfolio Dashboard
        </p>
      </div>
      <div className={`${styles.footWrap}`}>
        <Button btnStyle="primary" onClick={handleClick}>
          Select Client
        </Button>
      </div>
    </div>
  );
}

export default SelectClient;
