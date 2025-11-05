import Header from "src/components/common/header/Header";
import Button from "../../components/common/button/Button";
import { Link } from "react-router-dom";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import styles from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApprovalPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/acknowledgement");
  };

  interface Client {
    id: number;
    firstName: string;
    lastName: string;
    profileImage?: string;
    profileImageURL?: string;
    email?: string;
    mobile?: number;
    country?: string;
    tag?: "Investor";
    aboutDesc?: string;
  }
  const clientData: Client[] = [
    {
      id: 1,
      firstName: "Mattia",
      lastName: "Binoto",
      profileImage: `/assets/icons/ferruccio.svg`,
      profileImageURL: "",
      email: "mattia456@ferrari.com",
      mobile: 800123456,
      country: "Italy",
      tag: "Investor",
      aboutDesc:
        "Spent the last five years working with Asia Impact. With a sharp eye for opportunity and a deep understanding of market dynamics, helped guiding clients through successful investments and strategic maneuvers. ",
    },
  ];

  const nameInitials = (firstName: string, lastName: string) => {
    return firstName.charAt(0) + lastName.charAt(0);
  };

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
                  Approval Pending
                </h1>
                <p className={`${styles.subTitle}`}>
                  You have received a request and your approval is awaited.
                </p>
              </div>
              <div className="sec-cont">
                <div className={`${styles.subWrap}`}>
                  {clientData.map((client, index) => (
                    <>
                      <div className={`${styles.profileCont}`}>
                        <div className={`${styles.logoWrap}`}>
                          {client.profileImage !== "" ||
                          client.profileImageURL !== "" ? (
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
                          <p className={`${styles.clientTag}`}>{client.tag}</p>
                        </div>
                      </div>
                      {client.aboutDesc && (
                        <div className={`${styles.aboutCont}`}>
                          <p className={`${styles.contTitle}`}>about</p>
                          <span className={`${styles.contDesc}`}>
                            {client.aboutDesc}
                          </span>
                        </div>
                      )}
                      <div className={`${styles.infoCont}`}>
                        <ul className={`${styles.subList}`}>
                          <li className={`${styles.subItem}`}>
                            <i className={`${styles.sms}`}></i>
                            <div className={`${styles.textWrap}`}>
                              Email ID
                              <span className={`${styles.text}`}>
                                {client.email}
                              </span>
                            </div>
                          </li>
                          <li className={`${styles.subItem}`}>
                            <i className={`${styles.call}`}></i>
                            <div className={`${styles.textWrap}`}>
                              Mobile Number
                              <span className={`${styles.text}`}>
                                {client.mobile}
                              </span>
                            </div>
                          </li>
                          <li className={`${styles.subItem}`} key={index}>
                            <i className={`${styles.map}`}></i>
                            <div className={`${styles.textWrap}`}>
                              Country
                              <span className={`${styles.text}`}>
                                {client.country}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={`${styles.footWrap}`}>
          <Button
            btnStyle="secondary"
            // onClick={}
          >
            Reject
          </Button>
          <Button btnStyle="primary" onClick={handleSuccess}>
            Approve
          </Button>
        </div>
      </main>
    </>
  );
}

export default ApprovalPage;
