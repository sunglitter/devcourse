import React, { useEffect, useState } from "react";

const PracUseEffect = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
  }, []);

  function countUp() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("count 값이 변경되었습니다.");
  }, [count]);

  function changeMsg(e) {
    setMsg(e.target.value);
  }

  useEffect(() => {
    console.log("text 값이 변경되었습니다.");
  }, [msg]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countUp}>+ 1</button>
      <hr />
      <input type="text" onChange={changeMsg} />
      <h1>{msg}</h1>
    </div>
  );
};

export default PracUseEffect;
