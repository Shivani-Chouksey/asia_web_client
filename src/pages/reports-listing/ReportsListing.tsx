import { useState } from "react";
import styles from "./style.module.scss";
import ReportsCard, {
  ReportCardData,
} from "src/components/reports-card/ReportsCard";
import Header from "src/components/common/header/Header";

function ReportsListing() {
  const [reportsData, setReportsData] = useState<ReportCardData[]>([
    {
      reportId: "001",
      reportTitle: "Banyan Nation",
      reportDate: "2022-23",
      reportType: "Annual Report",
      reportTag: "Latest",
    },
    {
      reportId: "002",
      reportTitle: "Vilcart Tech.",
      reportDate: "2022-23",
      reportType: "Annual Report",
      reportTag: "Trending",
    },
    {
      reportId: "001",
      reportTitle: "One Puhunan",
      reportDate: "2022-23",
      reportType: "Annual Report",
      reportTag: "Highlight",
    },
    {
      reportId: "001",
      reportTitle: "Credit Access India",
      reportDate: "2022-23",
      reportType: "Annual Report",
      reportTag: "In Focus",
    },
  ]);
  return (
    <>
      <header>
        <Header
          backLink={true}
          pageTitle="Reports"
          actionItems={["filter"]}
        ></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section typ-depth">
              <div className="sec-cont">
                <div className={`${styles.reportsList}`}>
                  {reportsData.map((item, index) => {
                    return (
                      <div key={index} className={`${styles.item}`}>
                        <ReportsCard {...item} bigCard={true}></ReportsCard>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ReportsListing;
