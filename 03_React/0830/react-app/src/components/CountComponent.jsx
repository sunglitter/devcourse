import React, { useState } from "react";
import "./CountComponent.css";

const CountComponent = (props) => {
  const [value, setValue] = useState(0);
  function addCount() {
    setValue(value + 1);
    props.counts();
  }
  return (
    <div className="countDiv">
      <h1>{value}</h1>
      <button className="countBtn" onClick={addCount}>
        클릭
      </button>
    </div>
  );
};

export default CountComponent;
