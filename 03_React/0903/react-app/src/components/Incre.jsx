import React, { useEffect, useState } from "react";

const Incre = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Before updating:", count); // 업데이트 전에 count 출력
    setCount(count + 1); // 상태 업데이트 요청 -> 대략 평균적으로 15ms 소요
    // console.log("After updating:", count); // 업데이트 후에 바로 count 출력 => 비동기이기 때문에 의도한 대로 출력되지 않음
  };

  useEffect(() => {
    console.log("After updating:", count); // count가 업데이트될 때마다 실행 => 업데이트 후에 바로 count 출력하고자 하던 의도대로 실현
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Incre;
