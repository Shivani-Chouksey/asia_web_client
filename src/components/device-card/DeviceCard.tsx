import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";
import { useState } from "react";

export interface DeviceCardData {
  deviceName: string;
  location: string;
  status: string;
  isActive?: boolean;
}

function DeviceCard(props: DeviceCardData) {
  const [openDeleteDrawer, setOpenDeleteDrawer] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<DeviceCardData | null>(
    null
  );
  const handleTrashIconClick = () => {
    setSelectedDevice(props);
    setOpenDeleteDrawer(true);
  };
  const handleDeleteClient = () => {
    // console.log("Deleting Device:", selectedDevice);
  };
  return (
    <>
      <div className={`${styles.cardWrap}`}>
        <div className={`${styles.card}`}>
          <div className={`${styles.deviceWrap}`}>
            <div className={`${styles.deviceDetails}`}>
              <div className={`${styles.infoWrap}`}>
                <div className={`${styles.deviceInfo}`}>
                  <i className={`${styles.mobile}`}></i>
                  <p className={`${styles.deviceTitle}`}>{props.deviceName}</p>
                </div>
                <div className={`${styles.deviceInfo}`}>
                  <i className={`${styles.location}`}></i>
                  <p className={`${styles.deviceTitle}`}>{props.location}</p>
                </div>
              </div>
              <p
                className={`${styles.deviceStatus} ${
                  props.isActive ? `${styles.active}` : ""
                }`}
              >
                {props.status}
              </p>
            </div>
            <button type="button" onClick={() => handleTrashIconClick()}>
              <i className={`${styles.trash}`}></i>
            </button>
          </div>
        </div>
      </div>
      {selectedDevice && openDeleteDrawer && (
        <BottomSheet
          title="Remove Device"
          subText="Are you sure you wish to delete this device?"
          primaryBtnText="Remove Device"
          size="small"
          open={openDeleteDrawer}
          setOpen={setOpenDeleteDrawer}
        >
          <div className={`${styles.drawer}`}>
            <div className={`${styles.cardWrap}`}>
              <div className={`${styles.card}`}>
                <div className={`${styles.deviceWrap}`}>
                  <div className={`${styles.deviceDetails}`}>
                    <div className={`${styles.infoWrap}`}>
                      <div className={`${styles.deviceInfo}`}>
                        <i className={`${styles.mobile}`}></i>
                        <p className={`${styles.deviceTitle}`}>
                          {props.deviceName}
                        </p>
                      </div>
                      <div className={`${styles.deviceInfo}`}>
                        <i className={`${styles.location}`}></i>
                        <p className={`${styles.deviceTitle}`}>
                          {props.location}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`${styles.deviceStatus} ${
                        props.isActive ? `${styles.active}` : ""
                      }`}
                    >
                      {props.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BottomSheet>
      )}
    </>
  );
}

export default DeviceCard;
