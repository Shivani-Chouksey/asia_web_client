import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import PortfolioCard, {
  PortfolioCardData,
} from "src/components/portfolio-card/PortfolioCard";
import Button from "src/components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import { useLocation } from "react-router-dom";

function PortfolioPage() {
  const [openClientDrawer, setOpenClientDrawer] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.openClientDrawer) {
      setOpenClientDrawer(true);
    }
  }, [location.state]);
  const [clientCode, setClientCode] = useState({
    id: "c002",
    name: "Elena Moretti",
    isDisabled: true,
  });
  const [bsBtnState, setBSbtnState] = useState(true);
  const clientList = [
    {
      id: "c001",
      name: "Antonio Ricci",
      isDisabled: false,
    },
    {
      id: "c002",
      name: "Elena Moretti",
      isDisabled: true,
    },
    {
      id: "c003",
      name: "Francesco Marino",
      isDisabled: false,
    },
    {
      id: "c004",
      name: "Gina Linetti",
      isDisabled: true,
    },
    {
      id: "c005",
      name: "Maria Conti",
      isDisabled: false,
    },
    {
      id: "c006",
      name: "Sofia De Angelis",
      isDisabled: false,
    },
  ];
  const handleRadio = (e: any, item: any) => {
    setClientCode(item);
    setBSbtnState(false);
  };
  const [portfolioCards, setPortfolioCards] = useState<PortfolioCardData[]>([
    {
      companyId: "001",
      companyName: "Banyan Nation",
      companyLocation: "India",
      companyLogo: `/assets/logos/banyan-nation-logo.png`,
      requestCount: 6,
      investmentCount: 700,
      buyPrice: "€1.48",
      lastTradePrice: "€2.48",
    },
    {
      companyId: "002",
      companyName: "Vilcart",
      companyLocation: "India",
      companyLogo: `/assets/logos/vilcart-logo.png`,
      requestCount: 8,
      investmentCount: 500,
      buyPrice: "€7.21",
      lastTradePrice: "€8.04",
    },
    {
      companyId: "003",
      companyName: "Creditas",
      companyLocation: "India",
      companyLogo: `/assets/logos/creditas-logo.png`,
      requestCount: 6,
      investmentCount: 800,
      buyPrice: "€2.62",
      lastTradePrice: "€4.21",
    },
  ]);
  return (
    <>
      <div>
        <div className="lyt-main typ-main">
          <section>
            <div className="bs-section typ-depth">
              <div className="sec-head">
                <div className={`${styles.headWrap}`}>
                  <h2 className="cm-sec-title">Your Portfolio</h2>
                  <Button
                    btnStyle="text"
                    onClick={() => setOpenClientDrawer(true)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="sec-cont">
                <div className={`${styles.portfolioList}`}>
                  {portfolioCards.map((item, index) => {
                    return (
                      <div key={index} className={`${styles.item}`}>
                        <PortfolioCard {...item}></PortfolioCard>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <BottomSheet
        open={openClientDrawer}
        primaryBtnText="Proceed"
        title="Select Client"
        subText="Choose a Client to view their dashboard."
        size="large"
        setOpen={setOpenClientDrawer}
      >
        <div className="bs-form">
          <div className={`${styles.clientDrawer}`}>
            {/* <form action=""> */}
            <div className="search-wrap">
              <span className="search-icon"></span>
              <input type="text" placeholder="Search" />
              <button className="close-btn">
                <i></i>
              </button>
            </div>
            <div className={`${styles.selectionWrap}`}>
              <ul className={`${styles.clientList}`}>
                {clientList.map((item, index) => {
                  return (
                    <li key={index} className={`${styles.clientItem}`}>
                      <input
                        onChange={(e) => handleRadio(e, item)}
                        type="radio"
                        name="client-list"
                        id={item.id}
                        checked={
                          item.id === clientCode.id && item.isDisabled !== true
                        }
                        disabled={item.isDisabled ? true : false}
                      />
                      <label htmlFor={item.id}>
                        <span className={`${styles.client}`}>{item.name}</span>
                        <span className={`${styles.clientCode}`}></span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* </form> */}
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

export default PortfolioPage;
