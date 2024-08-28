import React from "react";

function FirstProps(props) {
  const { name, color } = props;
  return (
    <div>
      <h1>
        안녕하세요. 제 이름은 {name}입니다.
        <br />
        제가 좋아하는 색은 {color}입니다.
      </h1>
    </div>
  );
}

export default FirstProps;
