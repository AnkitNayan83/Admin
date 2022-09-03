import React from "react";
import { Notifications, Language, Settings } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import "./Topbar.css";
import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          <div className="topbar__left">
            <span className="topbar__logo">Netflixadmin</span>
          </div>
        </Link>
        <div className="topbar__right">
          <div className="topbar__icon">
            <Badge badgeContent={4} color="primary">
              <Notifications color="action" />
            </Badge>
          </div>
          <div className="topbar__icon">
            <Language />
          </div>
          <div className="topbar__icon">
            <Settings />
          </div>
          <div className="topbar__profile">
            <img
              src="https://i.ibb.co/tpPJjB3/Whats-App-Image-2022-06-21-at-5-48-06-PM.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
