import React, { useRef, useState } from "react";

const UseRefComponent3 = () => {
  const [rendering, setRendering] = useState(0); // 렌더링
  const countRef = useRef(0);
  let currentValue = 0;

  function refUp() {
    countRef.current = countRef.current + 1;
    console.log("ref : ", countRef.current);
  }

  function letUp() {
    currentValue = currentValue + 1;
    console.log("let : ", currentValue);
  }

  function stateUp() {
    setRendering(rendering + 1);
  }
  return (
    <div>
      <h1>Ref 값 : {countRef.current}</h1>
      <h1>변수 값 : {currentValue}</h1>
      <button onClick={refUp}>Ref</button>
      <button onClick={letUp}>Let</button>
      <button onClick={stateUp}>Rendering</button>
    </div>
  );
};

export default UseRefComponent3;
