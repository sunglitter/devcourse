import React, { useRef, useState } from "react";

const UseRefComponent2 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function countUp() {
    setCount(count + 1);
    console.log("STATE 변경");
  }

  function refUp() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }
  return (
    <div>
      <h1>State 값 : {count}</h1>
      <h1>Ref 값 : {countRef.current}</h1>
      <button onClick={countUp}>State</button>
      <button onClick={refUp}>Ref</button>
    </div>
  );
};

export default UseRefComponent2;
