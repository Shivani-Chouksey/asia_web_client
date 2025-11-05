import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export interface HighlightCardData {
  eventType: "Online" | "Offline" | "Notice";
  noticeTag?: "Read" | "Important" | "Research";
  eventName: string;
  eventLogo: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  isFavorite: boolean;
}

function HighlightCard(props: HighlightCardData) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bs-highlight-card">
      <Link to="/highlight-detail">
        <div className="card-wrap">
          <div className="logo-wrap">
            <img src={props.eventLogo} alt={props.eventName} />
          </div>
          <div className="info-wrap">
            <div className="info-head">
              <strong className="title">{props.eventName}</strong>
              <div className="card-tag">
                {props.eventType === "Notice" ? (
                  <>
                    <i className={props.noticeTag}></i>
                    <span>{props.noticeTag}</span>
                  </>
                ) : (
                  <>
                    <i
                      className={
                        props.eventType === "Offline"
                          ? "Offline"
                          : props.eventType
                      }
                    ></i>
                    <span>
                      {props.eventType === "Offline"
                        ? props.eventLocation
                        : props.eventType}
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="timeline-list">
              <div className="timeline-item">
                <i className="date"></i>
                <span>{props.eventDate}</span>
              </div>
              {props.eventTime !== "" ? (
                <div className="timeline-item">
                  <i className="time"></i>
                  <span>{props.eventTime}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Link>
      <button className="fav-btn" onClick={handleFavorite}>
        {isFavorite ? (
          <i className="favorite-filled"></i>
        ) : (
          <i className="favorite"></i>
        )}
      </button>
    </div>
  );
}

export default HighlightCard;
