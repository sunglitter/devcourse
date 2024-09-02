import React, { useState } from "react";
import "../style/TodoInsert.scss";
import { IoIosAddCircleOutline } from "react-icons/io";

const TodoInsert = ({ insertItem }) => {
  // 추가한 todo 아이템
  const [item, setItem] = useState("");
  const changeHandler = (e) => setItem(e.target.value);

  // submit 이벤트 처리
  const submitHandler = (e) => {
    // 페이지 새로고침 방지
    e.preventDefault();

    // 빈칸을 입력한 경우, 추가 안함
    if (item.trim() === "") {
      return;
    }

    // 아이템 추가
    insertItem(item);

    // input 창에 텍스트 비우기
    setItem("");
  };

  return (
    <form className="TodoInsert" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="일정을 입력하세요"
        value={item}
        onChange={changeHandler}
      />
      <button type="submit">
        <IoIosAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoInsert;
