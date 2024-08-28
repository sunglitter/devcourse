import React from "react";
import PropTypes from "prop-types";

const PropTypesComponents = ({ item, price }) => {
  return (
    <div>
      아이템 : {item}
      <br />
      가격: {price}
    </div>
  );
};

// props에 타입 지정
// 부모가 item: number 전달
// 자식 item: string
// 컴포넌트이름.propTypes = { 키: 값 }
PropTypesComponents.propTypes = {
  item: PropTypes.string,
  price: PropTypes.number.isRequired,
};
export default PropTypesComponents;
