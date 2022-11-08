import React, { useMemo, useState } from "react";
import { Chart } from "../components/Chart/Chart";
import { FeaturesInfo } from "../components/featuresInfo/FeaturesInfo";
import "./Home.css";
import { SmallWidgets } from "../components/smallWidgets/SmallWidgets";
import { LargeWidgets } from "../components/LargeWidgets/LargeWidgets";
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const MONTHS = useMemo(
    () => [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const stat = await axios.get("user/stats");
        const statList = stat.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statList.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, []);
  return (
    <div className="home">
      <FeaturesInfo />
      <Chart data={userStats} title="User Analytics" datakey="New User" grid />
      <div className="homeWidgets">
        <SmallWidgets />
        <LargeWidgets />
      </div>
    </div>
  );
};
