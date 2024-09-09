import { useQuery } from "@tanstack/react-query";
import React from "react";

const fetchTodoList = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
};

const TodoListFetching = () => {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
  });
  return (
    <div>
      <h3>이번 주 할 일 리스트</h3>
      {data.map((todo) => (
        <p key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          {todo.title}
        </p>
      ))}
    </div>
  );
};

export default TodoListFetching;
