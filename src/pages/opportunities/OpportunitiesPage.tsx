import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import OpportunitiesCard, {
  OpportunitiesCardData,
} from "src/components/opportunities-card/OpportunitiesCard";
import { toast } from "react-toastify";
import axios from "axios";
import API_ENDPOINTS from "src/api-endpoints";
import { useNavigate } from "react-router-dom";


function OpportunitiesPage() {
  const [opportunitiesCards, setOpportunitiesCards] = useState<
    any[]
  >([
    {
      id: "001",
      name: "Banyan Nation",
      companyLocation: "India",
      companyLogo: `/assets/logos/banyan-nation-logo.png`,
      // portfolioCount: 2,
      activeRequests: 5,
      ebidta: "+20.3",
      turnover: "+120.3",
      lastTradePrice: "€2.48",
    },
    {
      id: "002",
      name: "Vilcart",
      companyLocation: "India",
      companyLogo: `/assets/logos/vilcart-logo.png`,
      // portfolioCount: 0,
      activeRequests: 12,
      ebidta: "+20.3",
      turnover: "+78.3",
      lastTradePrice: "€8.48",
    },
    {
      id: "003",
      name: "Creditas",
      companyLocation: "India",
      companyLogo: `/assets/logos/creditas-logo.png`,
      // portfolioCount: 1,
      activeRequests: 23,
      ebidta: "+20.3",
      turnover: "+50.3",
      lastTradePrice: "€12.48",
    },
  ]);

  const [pagination,setPagination] = useState({
    currentPage:1,
    totalPages:1,
    pageSize:10,
    totalRecords:0
  });
  const navigate=useNavigate()
  const getAllCompanyList = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.get_all_companies);
      console.log(res);
      
      if (res.data.success) {
        setOpportunitiesCards(res.data.data.companies);
        setPagination(res.data.data.pagination)
      }
    } catch (error: any) {
      if(error.response.data.statusCode ===401){
      toast.error(error.response.data.message );
      navigate('/login')

      }
      toast.error(error.response.data.message || "Failed to fetch companies list.");
    }
  }

  useEffect(() => {
    getAllCompanyList();
  }, [])
  return (
    <div className="lyt-main typ-main">
      <section>
        <div className="bs-section typ-depth">
          <div className="sec-head">
            <h2 className="cm-sec-title">Exclusive Opportunities</h2>
          </div>
          <div className="sec-cont">
            <div className={`${styles.opportunitiesList}`}>
              {opportunitiesCards.map((item, index) => {
                return (
                  <div key={index} className={`${styles.item}`}>
                    <OpportunitiesCard {...item}></OpportunitiesCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpportunitiesPage;
