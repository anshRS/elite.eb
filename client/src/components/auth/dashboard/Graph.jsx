"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { graphData } from "@/data";

const Graph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // api call
        setChartData({
          labels: graphData?.map((item) => item.date),
          datasets: [
            {
              label: "Price",
              data: graphData?.map((item) => item.price),
              backgroundColor: "#26282B", // Set the background color
              borderColor: "rgba(75,192,192,1)", // Set the line color
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return chartData ? (
    <Line
      className="flex w-full items-center justify-center"
      data={chartData}
    />
  ) : null;
};

export default Graph;