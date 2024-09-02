import React from "react";

const PriceList = (props) => {
  const { prices } = props;
  return <div>가격: {prices}원</div>;
};

export default PriceList;
