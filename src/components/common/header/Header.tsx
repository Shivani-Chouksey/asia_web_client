import React, { useEffect, useState } from "react";
import { Tab, Tabs, FormControl, TextField } from "@mui/material";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import styles from "./style.module.scss";
import CheckBox from "../checkbox/CheckBox";
import { Link, useNavigate } from "react-router-dom";

export interface HeaderProps {
  showProfile?: boolean;
  pageTitle?: string;
  backLink?: boolean;
  actionItems?: string[];
  showChat?: boolean;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
  center?: boolean;
}

function Header(props: HeaderProps) {
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
  const [openDownloadDrawer, setOpenDownloadDrawer] = useState(false);
  const [openDeleteDrawer, setOpenDeleteDrawer] = useState(false);
  const [openEndDrawer, setOpenEndDrawer] = useState(false);
  const [openReportDrawer, setOpenReportDrawer] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [value, setValue] = React.useState(0);
  const [tempProfileImage, setTempProfileImage] = useState("");
  const [openPreviewDrawer, setOpenPreviewDrawer] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({
    id: "",
    name: "",
    size: "",
    type: "",
  });
  const backLink = useNavigate();
  const navigate = useNavigate();
  const handleNotification = () => {
    backLink("/notifications");
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile({
        id: "" + file.lastModified,
        name: file.name,
        size: "" + Math.round(file.size / 1024) + " KB",
        type: file.type,
      });

      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        setTempProfileImage(event.target?.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleConfirmUpload = () => {
    setOpenPreviewDrawer(false);
  };

  const handleCancelPreview = () => {
    setOpenPreviewDrawer(false);
    setUploadedFile({ id: "", name: "", size: "", type: "" });
    setTempProfileImage("");
  };

  const filterTabItems = [
    {
      id: "tab01",
      title: "Category",
      isActive: false,
      tabPanelItems: [
        {
          itemType: "checkbox",
          itemId: "onlineEvent",
          label: "Online Event",
          count: 15,
          isChecked: false,
        },
        {
          itemType: "checkbox",
          itemId: "offlineEvent",
          label: "Offline Event",
          count: 12,
          isChecked: false,
        },
        {
          itemType: "checkbox",
          itemId: "reads",
          label: "Reads",
          count: 5,
          isChecked: false,
        },
        {
          itemType: "checkbox",
          itemId: "important",
          label: "Important",
          count: 1,
          isChecked: false,
        },
        {
          itemType: "checkbox",
          itemId: "reserach",
          label: "Research",
          count: 2,
          isChecked: false,
        },
      ],
    },
    {
      id: "tab03",
      title: "Date",
      isActive: false,
      tabPanelItems: [
        {
          itemType: "radio",
          itemId: "last1month",
          label: "Last 1 Month",
          count: 0,
          isChecked: false,
        },
        {
          itemType: "radio",
          itemId: "last3months",
          label: "Last 3 Months",
          count: 0,
          isChecked: false,
        },
        {
          itemType: "radio",
          itemId: "all",
          label: "All",
          count: 0,
          isChecked: false,
        },
      ],
    },
    // {
    //   id: "tab01",
    //   title: "Report",
    //   isActive: false,
    //   tabPanelItems: [
    //     {
    //       itemId: "annualReports",
    //       label: "Annual Reports",
    //       count: 15,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "quarterlyReports",
    //       label: "Quarterly Reports",
    //       count: 12,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "companyReports",
    //       label: "Company Reports",
    //       count: 5,
    //       isChecked: false,
    //     },
    //   ],
    // },
    // {
    //   id: "tab02",
    //   title: "Company",
    //   isActive: false,
    //   tabPanelItems: [
    //     {
    //       itemId: "banyanNation",
    //       label: "Banyan Nation",
    //       count: 3,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "vilcart",
    //       label: "Vilcart",
    //       count: 2,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "creditAccessIndia",
    //       label: "Credit Access India",
    //       count: 5,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "onePuhunan",
    //       label: "One Puhunan",
    //       count: 3,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "creditas",
    //       label: "Creditas",
    //       count: 1,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "machineMaze",
    //       label: "Machine Maze",
    //       count: 2,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "arya",
    //       label: "Arya",
    //       count: 4,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "binaArtha",
    //       label: "Bina Artha",
    //       count: 2,
    //       isChecked: false,
    //     },
    //   ],
    // },
    // {
    //   id: "tab03",
    //   title: "Date",
    //   isActive: false,
    //   tabPanelItems: [
    //     {
    //       itemId: "last3months",
    //       label: "Last 3 Months",
    //       count: 0,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "last6months",
    //       label: "Last 6 months",
    //       count: 0,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "last1year",
    //       label: "Last 1 year",
    //       count: 0,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "last2years",
    //       label: "Last 2 years",
    //       count: 0,
    //       isChecked: false,
    //     },
    //     {
    //       itemId: "all",
    //       label: "All",
    //       count: 0,
    //       isChecked: false,
    //     },
    //   ],
    // },
  ];
  useEffect(() => {
    if (props.currentStep && props.totalSteps) {
      document.documentElement.style.setProperty(
        "--progress-count",
        (props.currentStep * 100) / props.totalSteps + "%"
      );
    }
  }, [props.currentStep]);
  const user=sessionStorage.getItem('user_email')
  return (
    <>
      <div className={`bs-header ${props.center ? "center" : ""}`}>
        {props.showProfile ? (
          <div className="profile-wrap">
            <i className="user-logo"></i>
            <span className="intro-text">Hi, {user}</span>
          </div>
        ) : (
          <div className="icon-title-wrap">
            {props.backLink ? (
              <button onClick={() => backLink(-1)}>
                <i className="back-icon"></i>
              </button>
            ) : (
              <></>
            )}
            {props.pageTitle ? (
              <h1 className="pg-title">{props.pageTitle}</h1>
            ) : (
              <></>
            )}
          </div>
        )}
        {props.showChat ? (
          <button className="advisor-chat">
            {sessionStorage.getItem('user_role')} <i></i>
          </button>
        ) : (
          <></>
        )}
        {props.actionItems ? (
          <div className="act-wrap">
            {props.actionItems.map((item, index) => {
              switch (item) {
                case "notification":
                  return (
                    <button
                      key={index}
                      className="notification"
                      onClick={handleNotification}
                    >
                      <i></i>
                      <span className="notification-count">2</span>
                    </button>
                  );
                case "share":
                  return (
                    <button key={index} className="share">
                      <i></i>
                    </button>
                  );
                case "favorite":
                  return (
                    <button
                      key={index}
                      className="fav-btn"
                      onClick={handleFavorite}
                    >
                      {isFavorite ? (
                        <i className="favorite-filled"></i>
                      ) : (
                        <i className="favorite"></i>
                      )}
                    </button>
                  );
                case "filter":
                  return (
                    <button
                      key={index}
                      className="filter-btn"
                      onClick={() => setOpenFilterDrawer(true)}
                    >
                      <i></i>
                      Filter
                    </button>
                  );
                case "delete":
                  return (
                    <button
                      key={index}
                      className="delete"
                      onClick={() => setOpenDeleteDrawer(true)}
                    >
                      <i></i>
                    </button>
                  );
                case "download":
                  return (
                    <button
                      key={index}
                      className="download"
                      onClick={() => setOpenDownloadDrawer(true)}
                    >
                      <i></i>
                    </button>
                  );
                case "more":
                  return (
                    <button key={index} className="more" onClick={handleClick}>
                      <i></i>
                    </button>
                  );
                default:
                  return <></>;
              }
            })}
          </div>
        ) : (
          <></>
        )}
        {props.showProgress ? (
          <div className="progress-wrap">
            <span className="step">
              {props.currentStep}/{props.totalSteps}
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <BottomSheet
        title="Filter"
        primaryBtnText="Apply"
        secondaryBtnText="Clear All"
        size="large"
        open={openFilterDrawer}
        setOpen={setOpenFilterDrawer}
      >
        <div className="bs-filter">
          <div className="left-wrap">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {filterTabItems.map((item, index) => {
                return <Tab key={index} label={item.title} />;
              })}
            </Tabs>
          </div>
          <div className="right-wrap">
            {filterTabItems.map((item, index) => {
              return (
                <div
                  className="tabpanel"
                  role="tabpanel"
                  hidden={value !== index}
                  key={index}
                >
                  <div className="panel-list">
                    {item.tabPanelItems.map((item, index) => {
                      return (
                        <div className="filter-item" key={index}>
                          {item.itemType === "radio" ? (
                            <>
                              <div className="radio-group">
                                <input
                                  type="radio"
                                  id={item.itemId}
                                  name={item.itemType}
                                />
                                <label htmlFor={item.itemId}>
                                  {item.label}
                                </label>
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                          {item.itemType === "checkbox" ? (
                            <>
                              <CheckBox
                                id={item.itemId}
                                label={item.label}
                                name={item.itemId}
                              ></CheckBox>
                            </>
                          ) : (
                            ""
                          )}
                          {item.count !== 0 ? (
                            <span className="count">{item.count}</span>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                    `
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BottomSheet>
      <BottomSheet
        title="Download Report"
        subText="Banyan Nation"
        primaryBtnText="Download Report"
        size="small"
        open={openDownloadDrawer}
        setOpen={setOpenDownloadDrawer}
      >
        <Link to="" download={true}>
          <div className="download-wrap">
            <div className="cm-document-wrap">
              <i className="document-icon document"></i>
              <div className="info-wrap">
                <span className="doc-title">Annual Report (2022-23)</span>
                <span className="foot-note">399 KB</span>
              </div>
            </div>
          </div>
        </Link>
      </BottomSheet>
      <BottomSheet
        title="Remove Advisor"
        subText="Advisors can provide valuable insights on portfolio companies and provide guidance."
        primaryBtnText="Remove"
        size="small"
        open={openDeleteDrawer}
        setOpen={setOpenDeleteDrawer}
        // btnOnClick={handleRemove}
      >
        <div className="bs-profile-card">
          <div className="client-profile">
            <div className="logo-wrap">
              <img src="/assets/icons/ferruccio.svg" alt="Client Logo" />
            </div>
            <div className="title-wrap">
              <strong className="title-text">Ferruccio Lamborghini</strong>
              <p className="mail-text">ferruccio@ferrari.com</p>
            </div>
          </div>
        </div>
      </BottomSheet>
      <BottomSheet
        title="End Chat"
        primaryBtnText="End"
        size="large"
        center={true}
        open={openEndDrawer}
        setOpen={setOpenEndDrawer}
      >
        <div className={`${styles.rejectDrawer}`}>
          <div className={`${styles.rejectWrap}`}>
            <span className={`${styles.remove}`}></span>
            <p className={`${styles.content}`}>
              Once you reject the request, it would be removed from your pending
              requests.
            </p>
          </div>
        </div>
      </BottomSheet>
      <BottomSheet
        title="Report User"
        primaryBtnText="Submit"
        size="large"
        open={openReportDrawer}
        setOpen={setOpenReportDrawer}
      >
        <div className="bs-section typ-chat">
          <div className="bs-form">
            <p className="form-desc">
              Please share a brief account of the incident.
            </p>
            <form>
              <div className="form-body">
                <div className="form-group">
                  <FormControl variant="standard">
                    <TextField
                      id="reportMessage"
                      maxRows={6}
                      multiline
                      name="report Message"
                    />
                  </FormControl>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`${styles.uploadCont}`}>
          <div className={`${styles.head}`}>
            <span className={`${styles.title}`}>
              Upload a supporting document{" "}
            </span>
            <span className={`${styles.optional}`}>Optional</span>
          </div>
          <div className="bs-upload">
            <div className="doc-card">
              {uploadedFile.id === "" ? (
                <div className="upload-section">
                  <div className="upload-item capture-pic">
                    <button></button>
                    <span className="text">Click a Picture</span>
                  </div>
                  <div className="upload-item upload-file">
                    <span className="text">Upload File</span>
                    <input
                      type="file"
                      name=""
                      id="upload-doc"
                      onChange={handleUpload}
                    />
                  </div>
                </div>
              ) : (
                <div className="uploaded-state">
                  <div className="cm-document-wrap">
                    <i
                      className={`document-icon ${
                        uploadedFile.type.indexOf("image") !== -1
                          ? "image"
                          : "document"
                      }`}
                    ></i>
                    <div className="info-wrap">
                      <span className="doc-title">{uploadedFile.name}</span>
                      <span className="foot-note">{uploadedFile.size} KB</span>
                    </div>
                    <div className="action-wrap">
                      <button
                        type="button"
                        className="show-media"
                        onClick={() => setOpenPreviewDrawer(true)}
                      >
                        <i></i>
                      </button>
                      <button
                        type="button"
                        className="trash-btn"
                        onClick={handleCancelPreview}
                      >
                        <i></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="upload-note">
                <strong className="note-title">
                  <i></i>Note
                </strong>
                <ul className="note-list">
                  <li className="note-item">PDF or PNG of max 5 MB.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BottomSheet>
      <BottomSheet
        open={openPreviewDrawer}
        primaryBtnText="Confirm"
        btnDisabled={false}
        size="large"
        title={uploadedFile.name}
        setOpen={setOpenPreviewDrawer}
        btnOnClick={handleConfirmUpload}
        btnSecondaryOnClick={handleCancelPreview}
      >
        <div className="upload-preview">
          {uploadedFile.type.indexOf("image") !== -1 ? (
            <img src={tempProfileImage} alt="" />
          ) : (
            <iframe src={tempProfileImage}></iframe>
          )}
        </div>
      </BottomSheet>
      <div
        className={`${styles.menuCont} ${menuActive ? `${styles.show}` : ""}`}
      >
        <ul className={`${styles.list}`}>
          <li className={`${styles.item}`}>
            <button onClick={() => setOpenEndDrawer(true)}>End Chat</button>
          </li>
          <li className={`${styles.item}`}>
            <button onClick={() => setOpenReportDrawer(true)}>
              Report User
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
