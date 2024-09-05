// import React, { useReducer, useState } from "react";
// import sumReducer from "./sumReducer";

// const UseReducerPrac = () => {
//   const [sum, dispatch] = useReducer(sumReducer, 0);

//   function selectHamburger() {
//     dispatch({ type: "HAMBURGER", price: 8000 });
//   }

//   function selectFrenchFries() {
//     dispatch({ type: "FRENCHFRIES", price: 3000 });
//   }

//   function selectCola() {
//     dispatch({ type: "COLA", price: 2000 });
//   }

//   function selectSoftIcecream() {
//     dispatch({ type: "SOFTICECREAM", price: 1500 });
//   }

//   return (
//     <div>
//       <h1>패스트푸드</h1>
//       <div>
//         <button onClick={selectHamburger}>
//           <h1>🍔</h1>
//           8000원
//         </button>
//         <button onClick={selectFrenchFries}>
//           <h1>🍟</h1>
//           3000원
//         </button>
//         <button onClick={selectCola}>
//           <h1>🥤</h1>
//           2000원
//         </button>
//         <button onClick={selectSoftIcecream}>
//           <h1>🍦</h1>
//           1500원
//         </button>
//       </div>
//       <h1>선택한 상품 : {}</h1>
//       <h1>지불할 금액 : {sum}원</h1>
//     </div>
//   );
// };

// export default UseReducerPrac;

// 복습
import React, { useReducer } from "react";
import sumReducer from "./sumReducer";

const UseReducerPrac = () => {
  const [sum, dispatch] = useReducer(sumReducer, 0);

  const container = {
    textAlign: "center",
  };

  const btnStyle = {
    background: "none",
    border: "1px solid gray",
    padding: "20px",
    fontSize: "30px",
    cursor: "pointer",
  };

  return (
    <div style={container}>
      <h1>🌱새싹 햄버거 가게🌱</h1>
      <h1>지불할 금액 : {sum}원</h1>
      <br />
      <buttton
        style={btnStyle}
        onClick={() => dispatch({ type: "햄버거", price: 8000 })}
      >
        🍔
      </buttton>
      <buttton
        style={btnStyle}
        onClick={() => dispatch({ type: "감자튀김", price: 3000 })}
      >
        🍟
      </buttton>
      <buttton
        style={btnStyle}
        onClick={() => dispatch({ type: "음료", price: 2000 })}
      >
        🥤
      </buttton>
      <buttton
        style={btnStyle}
        onClick={() => dispatch({ type: "아이스크림", price: 1500 })}
      >
        🍦
      </buttton>
    </div>
  );
};

export default UseReducerPrac;
