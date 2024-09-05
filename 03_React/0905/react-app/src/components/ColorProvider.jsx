import React, { createContext } from "react";
// import ColorContext from "./ColorContext";
import ColorBox from "./ColorBox";

// 외부로 ColorContext를 빼면 default 값이 적용이 안됨... 왜지?
export const ColorContext = createContext("green");

const ColorProvider = () => {
  const color = prompt("원하는 색상을 입력하세요");
  console.log(color);
  return (
    <ColorContext.Provider value={color}>
      <ColorBox />
    </ColorContext.Provider>
  );
};

export default ColorProvider;
