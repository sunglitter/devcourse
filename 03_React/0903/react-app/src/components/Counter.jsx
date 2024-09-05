import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div>현재 카운터 값은 {num}입니다.</div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
