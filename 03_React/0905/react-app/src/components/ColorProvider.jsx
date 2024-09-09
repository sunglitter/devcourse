// import React, { createContext } from "react";
// // import ColorContext from "./ColorContext";
// import ColorBox from "./ColorBox";

// // 외부로 ColorContext를 빼면 default 값이 적용이 안됨... 왜지?
// export const ColorContext = createContext("green");

// const ColorProvider = () => {
//   const color = prompt("원하는 색상을 입력하세요");
//   console.log(color);
//   return (
//     <ColorContext.Provider value={color}>
//       <ColorBox />
//     </ColorContext.Provider>
//   );
// };

// export default ColorProvider;

// 복습

import React from "react";
import ColorContext from "./ColorContext";
import ColorBox from "./ColorBox";

const ColorProvider = () => {
  let color = prompt("원하는 색상을 입력하세요"); // prompt 입력된 값은 string

  if (color === null || color.trim() === "") {
    color = "green";
  }

  // ColorContext 객체 = Provider 컴포넌트, createContext 함수
  // 값 전달 방법 => value = {전달한 값}
  return (
    <ColorContext.Provider value={color}>
      <ColorBox />
    </ColorContext.Provider>
  );
};

export default ColorProvider;
