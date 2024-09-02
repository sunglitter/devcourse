import React, { useState } from "react";

const CheckBox = (props) => {
  // 선물 포장 뜯기
  const { list } = props;

  // total 값 저장할 변수 생성
  const [total, setTotal] = useState(0);

  function changeHandler(checkbox) {
    // checkbox = <input type="checkbox" value=10000 checked/>
    // 체크 되었는지, 안되었는지...
    if (checkbox.checked) {
      // 체크 된 상태
      // total = total + checkbox.value

      // // 0 + "10000" = 010000
      // setTotal(total + parseInt(checkbox.value)); // 0 -> 10000

      // 리액트 스타일
      setTotal((prevState) => prevState + parseInt(checkbox.value));
    } else {
      // 체크 안 된 상태
      // setTotal(total - parseInt(checkbox.value));

      // 리액트 스타일
      setTotal((prevState) => prevState - parseInt(checkbox.value));
    }
  }

  return (
    <div>
      {list.map((item) => (
        <label key={item.name}>
          <input
            type="checkbox"
            value={item.price}
            onChange={(e) => changeHandler(e.target)}
          />
          {item.name}
        </label>
      ))}

      {/* <input
        type="checkbox"
        value={cap}
        onChange={(e) => {
          changeHandler(e.target);
        }}
      />
      모자 1만원
      <br />
      <input
        type="checkbox"
        value={shoes}
        onChange={(e) => {
          changeHandler(e.target);
        }}
      />
      신발 3만원
      <br />
      <input
        type="checkbox"
        value={bag}
        onChange={(e) => {
          changeHandler(e.target);
        }}
      />
      가방 8만원 */}

      <br />
      <p>합계 : {total}</p>
    </div>
  );
};

export default CheckBox;
