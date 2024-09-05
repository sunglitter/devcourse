import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => hardCalculator(hardNumber), [hardNumber]);
  const easySum = easyCalculator(easyNumber);

  function hardCalculator(number) {
    // number = hardNumber
    // 어렵고 복잡하고 시간이 오래걸리는 작업
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    return number + 10000;
  }

  function easyCalculator(number) {
    console.log("쉬운 계산중");
    return number + 1;
  }

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
};

export default UseMemo;
