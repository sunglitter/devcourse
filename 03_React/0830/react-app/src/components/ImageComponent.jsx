import React, { useState } from "react";
// import image from "../images/logo192.png";

const ImageComponent = () => {
  const selectList = ["apple", "mango", "banana", "strawberry"];
  const [select, setSelect] = useState("");

  function updateValue(e) {
    setSelect(e.target.value);
  }
  return (
    <div>
      {/* <h1>src 폴더 내부 이미지 : import를 이용</h1>
      <img src={image} width="150px" alt="이미지" />
      <hr />

      <h1>src 폴더 내부 이미지 : require()를 이용</h1>
      <img src={require("../images/logo192.png")} width="150px" alt="이미지" />
      <hr />

      <h1>public 폴더 이미지</h1>
      <img src="./images/logo192.png" width="150px" alt="이미지" />
      <hr />

      <h1>외부 서버 이미지</h1>
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        alt="이미지"
      /> */}
      <h1>선택한 과일 : {select}</h1>
      <select value={select} onChange={updateValue}>
        {
          // public/images/banana.png
          // <option value={`/images/apple.png`}>apple</option>
          selectList.map((item) => (
            <option value={`/images/${item}.png`}>{item}</option>
          ))
        }
      </select>
      <img src={select} width="150px" alt="과일" />
    </div>
  );
};

export default ImageComponent;
