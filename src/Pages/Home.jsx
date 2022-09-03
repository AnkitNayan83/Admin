import React from "react";
import { Chart } from "../components/Chart/Chart";
import { FeaturesInfo } from "../components/featuresInfo/FeaturesInfo";
import "./Home.css";
import { userData } from "../components/demo";
import { SmallWidgets } from "../components/smallWidgets/SmallWidgets";
import { LargeWidgets } from "../components/LargeWidgets/LargeWidgets";

export const Home = () => {
  return (
    <div className="home">
      <FeaturesInfo />
      <Chart
        data={userData}
        title="User Analytics"
        datakey="Active User"
        grid
      />
      <div className="homeWidgets">
        <SmallWidgets />
        <LargeWidgets />
      </div>
    </div>
  );
};
