import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "../style/TodoListItem.scss";

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="todo">
        <input type="checkbox" className="checkbox" />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <IoIosRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
