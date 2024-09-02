import React from "react";
import TodoListItem from "./TodoListItem";
import "../style/TodoList.scss";

const TodoList = (props) => {
  const { todos, removeItem, updateItem } = props;
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
