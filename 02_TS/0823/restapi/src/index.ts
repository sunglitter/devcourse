import express from "express";
const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen({ port: PORT }, () => {
  console.log(`http://localhost:${PORT} 에서 실행`);
});
