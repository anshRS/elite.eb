"use client";
import React, { useEffect, useState } from "react";
import { history } from "@/data";

const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(history);
  }, []);

  return (
    <div className="col-span-2 row-span-1 bg-[#26282B] p-4 rounded-lg">
      {/* Content for the History */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 min-w-[25%]">Date</th>
            <th className="px-4 min-w-[25%]">Name</th>
            <th className="px-4 min-w-[25%]">Quantity</th>
            <th className="px-4 min-w-[25%]">Buy Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const { id, date, name, quantity, price } = item;
            return (
              <tr key={id}>
                <td className="px-4">
                  <div className="flex items-center justify-center h-full">{date}</div>
                </td>
                <td className="px-4">
                  <div className="flex items-center justify-center h-full">{name}</div>
                </td>
                <td className="px-4">
                  <div className="flex items-center justify-center h-full">{quantity}</div>
                </td>
                <td className="px-4">
                  <div className="flex items-center justify-center h-full">{price}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
