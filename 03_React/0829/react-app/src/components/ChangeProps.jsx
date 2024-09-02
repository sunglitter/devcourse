import React from "react";

const ChangeProps = (props) => {
  let { name } = props; // sooa

  // 리액트는 컴포넌트 내부에서 함수의 값이 변경이 되었어도
  // 화면 재렌더링 안함
  function changeName() {
    name = "React";
    console.log(name);
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>클릭</button>
    </div>
  );
};

export default ChangeProps;
