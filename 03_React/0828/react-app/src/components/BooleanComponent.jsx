import React from "react";

const BooleanComponent = ({ study }) => {
  const message = study ? "오늘은 공부하자" : "내일은 놀자";
  return <div>{message}</div>;
};

export default BooleanComponent;
