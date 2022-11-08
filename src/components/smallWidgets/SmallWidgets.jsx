import React, { useEffect, useState } from "react";
import "./SmallWidgets.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";

export const SmallWidgets = () => {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("user?new=true", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);
  return (
    <div className="smallWidgets">
      <span className="widgetsmall__title">New User</span>
      <ul className="smallWidgets-list">
        {newUsers.map((user) => (
          <li className="smallWidgets-list-item">
            <img
              src={user.profilePic}
              alt=""
              className="smallWidgets-list-image"
            />
            <div className="smallWidgets-user">
              <span className="smallWidgets-username">{user.username}</span>
              <span className="smallWidgets-usertitle">{user.email}</span>
            </div>
            <button className="smallWidgets-button">
              <VisibilityIcon className="smallWidgets-button-icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
