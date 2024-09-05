import React, { useRef, useState } from "react";

const UseRefComponent4 = () => {
  const [text, setText] = useState("");
  const inputRef = useRef(); // inputRef = { current: <input>}

  function transferHandler(e) {
    // input 태그 안의 내용: inputRef.current.value
    setText(inputRef.current.value); // 렌더링 -> inputRef.current.value 화면 업데이트
    console.log("렌더링 완료");
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={transferHandler}>전송</button>
      <h3>전송된 단어 : {text}</h3>
    </div>
  );
};

export default UseRefComponent4;
