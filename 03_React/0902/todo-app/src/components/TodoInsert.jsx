import React from "react";
import "../style/TodoInsert.scss";
import { IoIosAddCircleOutline } from "react-icons/io";

const TodoInsert = (insertItem) => {
  // 데이터 입력 후, 추가 버튼 클릭
  // App.js의 insertItem()을 실행

  return (
    <form className="TodoInsert">
      <input type="text" placeholder="일정을 입력하세요" />
      <button type="submit">
        <IoIosAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoInsert;
