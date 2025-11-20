import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import CompanyChatCard, {
  CompanyChatCardData,
} from "src/components/company-chat-card/CompanyChatCard";
import React from "react";
import { Tab, Tabs } from "@mui/material";
import RequestCard from "src/components/request-card/RequestCard";
import axios from "axios";
import API_ENDPOINTS from "src/api-endpoints";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function ChatPage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const navigate = useNavigate()
  const pageTabItems = [
    {
      id: "tab01",
      title: "Bids",
      isActive: false,
    },
    {
      id: "tab02",
      title: "Offers",
      isActive: false,
    },
  ];
  const [companyList, setCompanyList] = useState<any>([])
  const [cards, setcards] = useState<CompanyChatCardData[]>([
    {
      companyId: "001",
      companyName: "Banyan Nation",
      companyLocation: "India",
      companyLogo: `/assets/logos/banyan-nation-logo.png`,
      holdingCount: 500,
      cardType: "incoming",
      requestDate: "12th Oct’23",
      requestMessage: "Message Box",
      isNew: false,
      interestedProfile: [
        // {
        //   cardId: "02",
        //   cardType: "buyer",
        //   date: "12th Oct’23",
        //   count: 1,
        //   chatFeature: true,
        // },
      ],
    },
    {
      companyId: "002",
      companyName: "Vilcart",
      companyLocation: "India",
      companyLogo: `/assets/logos/vilcart-logo.png`,
      holdingCount: 500,
      cardType: "outgoing",
      requestDate: "12th Oct’23",
      requestMessage: "Message Box",
      isNew: false,
      interestedProfile: [],
    },
    {
      companyId: "003",
      companyName: "Banyan Nation",
      companyLocation: "India",
      companyLogo: `/assets/logos/banyan-nation-logo.png`,
      holdingCount: 500,
      cardType: "pending",
      requestDate: "12th Oct’23",
      requestMessage: "Message Box",
      isNew: false,
      interestedProfile: [
        {
          cardId: "01",
          cardType: "seller",
          date: "12th Oct’23",
          count: 2,
          chatFeature: true,
        },
        {
          cardId: "02",
          cardType: "seller",
          date: "12th Oct’23",
          count: 1,
          chatFeature: true,
        },
      ],
    },
    {
      companyId: "002",
      companyName: "Vilcart-2",
      companyLocation: "India",
      companyLogo: `/assets/logos/vilcart-logo.png`,
      holdingCount: 500,
      cardType: "outgoing",
      requestDate: "12th Oct’23",
      requestMessage: "Message Box",
      isNew: false,
      interestedProfile: [
        {
          cardId: "01",
          cardType: "seller",
          date: "12th Oct’23",
          count: 2,
          chatFeature: true,
        },
        {
          cardId: "02",
          cardType: "seller",
          date: "12th Oct’23",
          count: 1,
          chatFeature: true,
        },
      ],
    },
  ]);

  const authToken = sessionStorage.getItem('access_token')
  const getAllCompanyRequests = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.get_all_company_requests, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      setCompanyList(res.data.data)
    } catch (error: any) {
      console.error("Error fetching company requests:", error);
      if (error.response.data.statusCode === 401) {
        toast.error(error.response.data.message);
        navigate('/login')

      } else {
        toast.error(error.response?.data?.message || "Failed to fetch company requests.");
      }

    }
  }
  useEffect(() => {
    getAllCompanyRequests();
  }, [])
  const outgoingCard = cards.filter((obj) => {
    return obj.cardType === "outgoing";
  });
  const incomingCard = cards.filter((obj) => {
    return obj.cardType === "incoming";
  });
  const pendingCard = cards.filter((obj) => {
    return obj.cardType === "pending";
  });
  //  const outgoingReq = companyList.filter((obj:any) => {
  //   return obj.outgoingReq
  // });

  console.log("Company requests fetcheddd:", companyList);

  return (
    <div className="lyt-main typ-main">
      <section>
        <div className="bs-section typ-depth">
          <div className="sec-cont">
            <div className="bs-tabs typ-btn">
              <Tabs value={value} onChange={handleChange}>
                <Tab label="OUTGOING" />
                <Tab label="INCOMING" />
                <Tab label="PENDING" />
              </Tabs>
              <div className={`${styles.panelWrap}`}>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={value !== 0}
                >
                  <p> <b>Total Req Count</b>- {companyList.outgoingReq?.length}</p>
                  <div className={`${styles.bidsList}`}>
                    {companyList.outgoingReq && companyList.outgoingReq.map((item: any, index: number) => {
                      return (
                        <div key={index} className={`${styles.item}`}>
                          <CompanyChatCard {...item}></CompanyChatCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={value !== 1}
                >
                  <p> <b>Total Req Count</b>- {companyList.incomingReq?.length}</p>

                  <div className={`${styles.bidsList}`}>
                    {companyList.incomingReq && companyList.incomingReq.map((item: any, index: number) => {
                      return (
                        <div key={index} className={`${styles.item}`}>
                          <CompanyChatCard {...item}></CompanyChatCard>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`${styles.tabPanel}`}
                  role="tabpanel"
                  hidden={value !== 2}
                >
                  <p style={{ marginBottom: "2px" }}> <b>Total Req Count</b> - {companyList.pendingReq?.length}</p>

                  <div className={`${styles.bidsList}`}>
                    {companyList.pendingReq && companyList.pendingReq.map((item: any, index: number) => {
                      return (
                        <div key={index} className={`${styles.item}`}>
                          <RequestCard {...item}></RequestCard>

                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChatPage;
