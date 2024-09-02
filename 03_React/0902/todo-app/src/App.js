import { useRef, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 기초 공부하기", status: true },
    {
      id: 2,
      text: "포트폴리오 만들기",
      status: true,
    },
    {
      id: 3,
      text: "프로젝트 준비하기",
      status: false,
    },
  ]);

  const nextId = useRef(4);

  const insertHandler = (item) => {
    // 새로운 todo 객체 생성
    const todo = {
      id: nextId.current,
      text: item,
      status: false,
    };

    // 기존에 있던 todos에 새로운 todo를 추가
    setTodos([...todos, todo]);

    nextId.current += 1;
  };

  const removeHandler = (deleted) =>
    setTodos(todos.filter((prevTodo) => prevTodo.id !== deleted));

  const updateHandler = (updated) =>
    setTodos(
      todos.map((prevTodo) => (prevTodo.id === updated.id ? updated : prevTodo))
    );
  return (
    <TodoTemplate>
      <TodoInsert insertItem={insertHandler} />
      <TodoList
        todos={todos}
        removeItem={removeHandler}
        updateItem={updateHandler}
      />
    </TodoTemplate>
  );
}

export default App;
