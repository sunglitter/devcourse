import React, { useState } from "react";

const ChangeFontColor = () => {
  const [fontColor, setFontColor] = useState("black");
  const fontStyle = {
    color: fontColor,
  };

  return (
    <div>
      <h1 style={fontStyle}>글자색 바꾸기</h1>
      <button
        onClick={() => {
          setFontColor("red");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setFontColor("green");
        }}
      >
        초록색
      </button>
      <button
        onClick={() => {
          setFontColor("blue");
        }}
      >
        파란색
      </button>
    </div>
  );
};

export default ChangeFontColor;
