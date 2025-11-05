import Header from "src/components/common/header/Header";
import Button from "../../components/common/button/Button";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import styles from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdvisorClientPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-client");
  };
  const handleNavigate = () => {
    navigate("/acknowledgement");
  };
  const [onboard, setOnboard] = useState({
    id: "c002",
    title: "As a Legal Entity",
    description: "Onboard as an already existing advisor to our investors.",
    isDisabled: false,
  });
  const [bsBtnState, setBSbtnState] = useState(true);
  const [openOnboardDrawer, setOpenOnboardDrawer] = useState(false);
  const [openDeleteDrawer, setOpenDeleteDrawer] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleRadio = (e: any, item: any) => {
    setSelectedRadio(item.id);
    setBSbtnState(false);
  };
  const handleOpenOnboardDrawer = () => {
    setOpenOnboardDrawer(true);
    setSelectedRadio("");
    setBSbtnState(true);
  };

  const handleTrashIconClick = (client: Client) => {
    setSelectedClient(client);
    setOpenDeleteDrawer(true);
  };

  const handleDeleteClient = () => {
    // console.log("Deleting client:", selectedClient);
    setSelectedClient(null);
    setOpenDeleteDrawer(false);
  };

  const nameInitials = (firstName: string, lastName: string) => {
    return firstName.charAt(0) + lastName.charAt(0);
  };
  interface Client {
    id: number;
    firstName: string;
    lastName: string;
    profileImage: string;
    profileImageURL: string;
    email: string;
  }
  const clientData = [
    {
      id: 1,
      firstName: "Rinaldo",
      lastName: "Piaggio",
      profileImage: `/assets/icons/ferruccio.svg`,
      profileImageURL: "",
      email: "rinaldo.piaggio@hotmail.com",
    },
    {
      id: 2,
      firstName: "Vincenza",
      lastName: "Milano",
      profileImage: `/assets/icons/ferruccio.svg`,
      profileImageURL: "",
      email: "veeencenzamilanooo@hotmail.com",
    },
  ];
  const onboardList = [
    {
      id: "c001",
      title: "As an investor",
      icon: "profile",
      description:
        "Become an investor and contribute to a more sustainable world.",
      isDisabled: false,
    },
    {
      id: "c002",
      title: "As a Legal Entity",
      icon: "advisor",
      description: "Onboard as an already existing advisor to our investors.",
      isDisabled: false,
    },
  ];
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main typ-btn-spacing">
          <section>
            <div className="bs-section typ-lg-top">
              <div className="sec-head">
                <h1 className={`cm-sec-title typ-big ${styles.title}`}>
                  Your Clients
                </h1>
                <p className={`${styles.subTitle}`}>
                  Manage your Clients with ease. View your existing Clients and
                  add new ones in a few taps.
                </p>
              </div>
              <div className="sec-cont">
                <div className={`${styles.subWrap}`}>
                  <ul className={`${styles.subList}`}>
                    {clientData.map((client, index) => (
                      <li className={`${styles.subItem}`} key={index}>
                        <div className={`${styles.logoWrap}`}>
                          {client.profileImage || client.profileImageURL ? (
                            <img
                              src={
                                client.profileImage || client.profileImageURL
                              }
                              alt={`${client.firstName} ${client.lastName}`}
                            />
                          ) : (
                            <>
                              <span>
                                {nameInitials(
                                  client.firstName,
                                  client.lastName
                                )}
                              </span>
                            </>
                          )}
                        </div>
                        <div className={`${styles.titleWrap}`}>
                          <strong className={`${styles.clientName}`}>
                            {client.firstName} {client.lastName}
                          </strong>
                          <p className={`${styles.clientMail}`}>
                            {client.email}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleTrashIconClick(client)}
                        >
                          <i className={`${styles.trash}`}></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={`${styles.footWrap}`}>
          <Button btnStyle="secondary" onClick={handleOpenOnboardDrawer}>
            Onboard Client
          </Button>
          <Button btnStyle="primary" onClick={handleClick}>
            Add Client
          </Button>
        </div>
      </main>
      <BottomSheet
        title="Onboard Client"
        subText="Select the type of Client you want to onboard."
        primaryBtnText="Confirm"
        size="small"
        open={openOnboardDrawer}
        setOpen={setOpenOnboardDrawer}
        btnDisabled={bsBtnState}
        btnOnClick={handleNavigate}
      >
        <div className={`${styles.cardWrap}`}>
          <ul className={`${styles.onboardList}`}>
            {onboardList.map((item, index) => {
              return (
                <li key={index} className={`${styles.onboardItem}`}>
                  <div className={`${styles.journeyCard}`}>
                    <input
                      onChange={(e) => handleRadio(e, item)}
                      type="radio"
                      name="onboard-list"
                      id={item.id}
                      checked={selectedRadio === item.id}
                      disabled={item.isDisabled}
                    />
                    <label htmlFor={item.id}>
                      <span
                        className={`${styles.userIcon} ${styles[item.icon]}`}
                      ></span>
                      <div className={`${styles.titleDescWrap}`}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </BottomSheet>
      {selectedClient && openDeleteDrawer && (
        <BottomSheet
          title="Remove Client"
          subText="You will no longer be able to manage and access the Client’s Details."
          primaryBtnText="Remove"
          size="small"
          open={openDeleteDrawer}
          setOpen={setOpenDeleteDrawer}
          btnOnClick={handleDeleteClient}
        >
          <div className={`${styles.cardWrap}`}>
            <div className={`${styles.clientProfile}`}>
              <div className={`${styles.logoWrap}`}>
                {selectedClient.profileImage ||
                selectedClient.profileImageURL ? (
                  <img
                    src={
                      selectedClient.profileImage ||
                      selectedClient.profileImageURL
                    }
                    alt={`${selectedClient.firstName} ${selectedClient.lastName}`}
                  />
                ) : (
                  <>
                    <span>
                      {nameInitials(
                        selectedClient.firstName,
                        selectedClient.lastName
                      )}
                    </span>
                  </>
                )}
              </div>
              <div className={`${styles.titleWrap}`}>
                <strong className={`${styles.clientName}`}>
                  {selectedClient.firstName} {selectedClient.lastName}
                </strong>
                <p className={`${styles.clientMail}`}>{selectedClient.email}</p>
              </div>
            </div>
          </div>
        </BottomSheet>
      )}
    </>
  );
}

export default AdvisorClientPage;
