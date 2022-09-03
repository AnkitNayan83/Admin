import React from "react";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  Home,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__component">
        <div className="sidebarComponent__title">Dashboard</div>
        <div className="sidebarComponent__options">
          <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
            <div className="sidebarComponent__option active">
              <span className="sidebar__icons">
                <Home />
              </span>
              <span>Home</span>
            </div>
          </Link>
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <Timeline />
            </span>
            <span>Analytics</span>
          </div>
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <TrendingUp />
            </span>
            <span>Sales</span>
          </div>
        </div>
      </div>
      <div className="sidebar__component">
        <div className="sidebarComponent__title">Quick Menu</div>
        <div className="sidebarComponent__options">
          <Link to={`/user`} style={{ textDecoration: "none", color: "black" }}>
            <div className="sidebarComponent__option">
              <span className="sidebar__icons">
                <PermIdentity />
              </span>
              <span>Users</span>
            </div>
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="sidebarComponent__option">
              <span className="sidebar__icons">
                <Storefront />
              </span>
              <span>Products</span>
            </div>
          </Link>
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <AttachMoney />
            </span>
            <span>Transactions</span>
          </div>
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <BarChart />
            </span>
            <span>Reports</span>
          </div>
        </div>
      </div>
      <div className="sidebar__component">
        <div className="sidebarComponent__title">Notifications</div>
        <div className="sidebarComponent__options">
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <MailOutline />
            </span>
            <span>Mail</span>
          </div>
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <DynamicFeed />
            </span>
            <span>Feedback</span>
          </div>
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <ChatBubbleOutline />
            </span>
            <span>Messages</span>
          </div>
        </div>
      </div>
      <div className="sidebar__component">
        <div className="sidebarComponent__title">More</div>
        <div className="sidebarComponent__options">
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <WorkOutline />
            </span>
            <span>Manage</span>
          </div>
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <Timeline />
            </span>
            <span>Analytics</span>
          </div>
          <div className="sidebarComponent__option">
            <span className="sidebar__icons">
              <Report />
            </span>
            <span>Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
};
