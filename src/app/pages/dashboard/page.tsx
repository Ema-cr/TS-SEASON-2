"use client";

import { useEffect, useState } from "react";
import { notification } from "../../../helpers/utils";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      notification("Count is negative", "error");
    } if (count > 0) {
      notification("Count is positive", "success");
    } 
  }, [count]);

  const handleCountPlus = () => {

    if (count < 15 ) {
        setCount(count + 1)
    } else {
      notification("Count is too high", "warning");
    }
  };

  return (
    <div className="">
      <h2>{count}</h2>
      <button onClick={handleCountPlus} className="button">+1</button>
      <button onClick={() => {setCount(count - 1)}} className="button">-1</button>
      <button onClick={() => {setCount(0)}} className="button">Reset</button>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
