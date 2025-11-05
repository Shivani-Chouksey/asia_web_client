import { useState } from "react";
import Header from "src/components/common/header/Header";
import DeviceCard, {
  DeviceCardData,
} from "src/components/device-card/DeviceCard";
import styles from "./style.module.scss";

function ActiveDevices() {
  const [profileDeviceCards, setProfileDeviceCards] = useState<
    DeviceCardData[]
  >([
    {
      deviceName: "iPhone 15",
      location: "Florence, Italy",
      status: "This Device",
      isActive: true,
    },
    {
      deviceName: "iPad 14",
      location: "Turin, Italy",
      status: "Last Active on Dec 23, 2023",
      isActive: false,
    },
  ]);
  const [advisorDeviceCards, setAdvisorDeviceCards] = useState<
    DeviceCardData[]
  >([
    {
      deviceName: "iPad 14",
      location: "Turin, Italy",
      status: "Last Active on Dec 23, 2023",
      isActive: false,
    },
    {
      deviceName: "iPhone 15",
      location: "Florence, Italy",
      status: "This Device",
      isActive: true,
    },
  ]);
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section">
              <div className="sec-head">
                <h1 className={`cm-sec-title typ-big ${styles.title}`}>
                  Active Devices
                </h1>
                <p className={`${styles.subtitle}`}>
                  Access devices where you are logged in.
                </p>
              </div>
              <div className="sec-cont">
                <div className={`${styles.section}`}>
                  <h2 className={`${styles.secTitle}`}>Your Profile</h2>
                  {profileDeviceCards.map((item, index) => {
                    return (
                      <div key={index} className={`${styles.item}`}>
                        <DeviceCard {...item}></DeviceCard>
                      </div>
                    );
                  })}
                </div>
                <div className={`${styles.section}`}>
                  <h2 className={`${styles.secTitle}`}>Advisor’s Device</h2>
                  {advisorDeviceCards.map((item, index) => {
                    return (
                      <div key={index} className={`${styles.item}`}>
                        <DeviceCard {...item}></DeviceCard>
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

export default ActiveDevices;
