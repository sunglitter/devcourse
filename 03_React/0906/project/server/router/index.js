const express = require("express");
const router = express.Router();

const todoList = [
  { id: 1, text: "리액트 기초 공부하기", status: false },
  { id: 2, text: "취업 준비하기", status: false },
  { id: 3, text: "여행가기", status: true },
];

router.get("/", (request, response) => {
  response.send("Hello Node.js");
});

router.get("/api/todo", (request, response) => {
  console.log(todoList);
  response.json(todoList);
});

router.post("/api/add", (request, response) => {
  console.log(todoList.length);
  console.log(request.body.text);
  const newItem = {
    id: todoList.length + 1,
    text: request.body.text,
    status: false,
  };
  todoList.push(newItem);
  response.status(201).send(newItem);
});

router.put("/api/todo/:id", (request, response) => {
  const id = parseInt(request.params.id, 10);
  const { status } = request.body;
  // todoList에서 해당 id를 가진 항목 찾기
  const todoIndex = todoList.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    // 항목을 찾지 못한 경우
    return response.status(404).json({ message: "Todo not found" });
  }
  // status 값을 새 값으로 업데이트
  todoList[todoIndex].status = status;
  // 업데이트된 todo 항목을 클라이언트에게 전송
  response.send(todoList[todoIndex]);
});

module.exports = router;
