import React from "react";
import "./SmallWidgets.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const SmallWidgets = () => {
  return (
    <div className="smallWidgets">
      <span className="widgetsmall__title">New User</span>
      <ul className="smallWidgets-list">
        <li className="smallWidgets-list-item">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="smallWidgets-list-image"
          />
          <div className="smallWidgets-user">
            <span className="smallWidgets-username">John Doe</span>
            <span className="smallWidgets-usertitle">Software Engineer</span>
          </div>
          <button className="smallWidgets-button">
            <VisibilityIcon className="smallWidgets-button-icon" />
            Display
          </button>
        </li>
        <li className="smallWidgets-list-item">
          <img
            src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            alt=""
            className="smallWidgets-list-image"
          />
          <div className="smallWidgets-user">
            <span className="smallWidgets-username">Lilly</span>
            <span className="smallWidgets-usertitle">S.E.O</span>
          </div>
          <button className="smallWidgets-button">
            <VisibilityIcon className="smallWidgets-button-icon" />
            Display
          </button>
        </li>
        <li className="smallWidgets-list-item">
          <img
            src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80"
            alt=""
            className="smallWidgets-list-image"
          />
          <div className="smallWidgets-user">
            <span className="smallWidgets-username">Maria</span>
            <span className="smallWidgets-usertitle">WEB 3</span>
          </div>
          <button className="smallWidgets-button">
            <VisibilityIcon className="smallWidgets-button-icon" />
            Display
          </button>
        </li>
        <li className="smallWidgets-list-item">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="smallWidgets-list-image"
          />
          <div className="smallWidgets-user">
            ``
            <span className="smallWidgets-username">Alex</span>
            <span className="smallWidgets-usertitle">Corporate</span>
          </div>
          <button className="smallWidgets-button">
            <VisibilityIcon className="smallWidgets-button-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};
