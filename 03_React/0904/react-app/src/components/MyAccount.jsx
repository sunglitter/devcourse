// import React, { useReducer, useState } from "react";
// import accountCalc from "./accountCalc";

// const MyAccount = () => {
//   const [balance, dispatch] = useReducer(accountCalc, 0);
//   const [money, setMoney] = useState(0);

//   function deposit() {
//     dispatch({ type: "deposit", amount: money });
//   }

//   function withdraw() {
//     dispatch({ type: "withdraw", amount: money });
//   }

//   return (
//     <div>
//       <h1>금액을 입력하세요.</h1>
//       <input
//         type="number"
//         value={money}
//         onChange={(e) => setMoney(parseInt(e.target.value))}
//         step="1000"
//       />
//       <h1>입금 또는 출금 버튼을 클릭하세요.</h1>
//       <button onClick={deposit}>입금</button>
//       <button onClick={withdraw}>출금</button>
//       <h1>현재 잔액 : {balance}</h1>
//     </div>
//   );
// };

// export default MyAccount;

// 복습

import React, { useReducer, useState } from "react";
import accountCalc from "./accountCalc";

const MyAccount = () => {
  const [balance, dispatch] = useReducer(accountCalc, 0);
  const [money, setMoney] = useState(0);

  const container = {
    textAlign: "center",
  };

  const dpBtnStyle = {
    background: "skyblue",
    border: "none",
    margin: "10px",
    padding: "20px",
    fontSize: "20px",
  };

  const wdBtnStyle = {
    background: "hotpink",
    border: "none",
    margin: "10px",
    padding: "20px",
    fontSize: "20px",
  };

  return (
    <div style={container}>
      <h3>🏧금액을 입력하세요.</h3>
      <input
        type="number"
        value={money}
        step="1000"
        onChange={(e) => setMoney(parseInt(e.target.value))}
      />
      <h3>🏧입금 또는 출금 버튼을 눌러주세요.</h3>
      <button
        style={dpBtnStyle}
        onClick={() => dispatch({ type: "deposit", amount: money })}
      >
        입금
      </button>
      <button
        style={wdBtnStyle}
        onClick={() => dispatch({ type: "withdraw", amount: money })}
      >
        출금
      </button>
      <h3>💸현재 잔액 : {balance}원</h3>
    </div>
  );
};

export default MyAccount;
