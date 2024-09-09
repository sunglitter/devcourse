import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PacmanLoader } from "react-spinners";

const fetchTodo = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );
};

const TodoFetching = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });

  console.log("Fetched data:", data);

  //로딩 상태 처리
  if (isLoading) return <PacmanLoader color="#ff00c8" size={30} />;

  //에러 상태 처리
  if (error) return <div>An error occurred:{error.message}</div>;

  return (
    <>
      <h3>Todo:{data.id}</h3>
      <p>Status: {data.comleted ? "Completed" : "Not completed"}</p>
    </>
  );
};

export default TodoFetching;
