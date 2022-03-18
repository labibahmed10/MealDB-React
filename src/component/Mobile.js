import React, { useState } from "react";
import "./Mobile.css";

const Mobile = () => {
  const [percentage, setPercentage] = useState(100);
  const dpercent = () => setPercentage(percentage - 10);

  return (
    <div className="phone">
      <h2>Battery percentage: {percentage >= 0 ? percentage : alert("not possible to decrease")}%</h2>
      <button onClick={dpercent}>Battery Down</button>
    </div>
  );
};

export default Mobile;
