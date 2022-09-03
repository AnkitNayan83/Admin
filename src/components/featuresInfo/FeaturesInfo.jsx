import React from "react";
import "./FeaturesInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export const FeaturesInfo = () => {
  return (
    <div className="featured">
      <div className="featured__item">
        <span className="featured__title">Revenue</span>
        <div className="featured__amount">
          <div className="featured__money">Rs 23,456</div>
          <div className="featured__moneyRate">
            -1,100 <ArrowDownward className="featured__icons negetive" />
          </div>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featured__item">
        <span className="featured__title">Sales</span>
        <div className="featured__amount">
          <div className="featured__money">Rs 3,456</div>
          <div className="featured__moneyRate">
            -500 <ArrowDownward className="featured__icons negetive" />
          </div>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featured__item">
        <span className="featured__title">Cost</span>
        <div className="featured__amount">
          <div className="featured__money">Rs 2,456</div>
          <div className="featured__moneyRate">
            100 <ArrowUpward className="featured__icons" />
          </div>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  );
};
