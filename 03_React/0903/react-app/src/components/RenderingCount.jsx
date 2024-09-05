import React, { useEffect, useRef, useState } from "react";

const RenderingCount = () => {
  const [count, setCount] = useState(0);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 완료");
  });

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>리렌더링 횟수 : {renderCount.current}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default RenderingCount;
