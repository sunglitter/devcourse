import React from "react";

// JavaScript default parameter
// 매개변수 이름 = 값
const DefaultProps = ({ name = "리액트" }) => {
  return <div>안녕하세요. 제 이름은 {name}입니다.</div>;
};

// 컴포넌트이름.defaultProps = { 키 : 값 }
// DefaultProps.defaultProps = { name: "리액트" };

export default DefaultProps;
