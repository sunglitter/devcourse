import express, { NextFunction, Router, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Customer, Product } from "./types";
import databaseA from "./database";
import CustomerModel from "./models/customer";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./database";
import jwt, { VerifyErrors } from "jsonwebtoken";

import path from "path"; // 경로 추가

connectDB();
const sec: string = process.env.TOKEN_SECRET as string;
const generateAccessToken = (username: any) => {
  return jwt.sign({ username }, sec, { expiresIn: "600s" });
};

// require("dotenv").config();
const app = express();
const PORT = 4000;
const router = Router();
//import해준 bodyParser, cors를 사용한다고 적어주기
app.use(bodyParser.json());
//아래 코드로 표현도 가능
//app.use(express.json());
// app.use(cors);
const corsOptions = {
  origin: "*",
  credentials: true,
};
// auth
router.post("/api/v1/auth", (req, res) => {
  const token = generateAccessToken({ username: req.body.username });
  res.json(token);
});
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401);
  }
  jwt.verify(token, sec, (err: VerifyErrors | null, decoded: any) => {
    if (err) {
      return res.status(403).json({ msg: "Forbidden", error: err.message });
    }
    (req as any) = decoded;
  });
  next();
};

app.use(cors(corsOptions));

// 정적 파일 서빙 추가
app.use(express.static(path.join(__dirname, "..", "public")));

// // 기존 코드
// app.get("/", (req, res) => {
//   res.send("hello World");
// });

// 기존 코드 수정
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// mongoose connect
mongoose
  .connect(process.env.MONGODB_URL || "")
  .then(() => console.log("mongodb 연결 완료"))
  .catch((err) => {
    console.error("mongodb 연결 실패", err);
  });

const ranId = () => {
  return Math.floor(Math.random() * 1000);
};
//database의 customer의 전체 데이터를 가져오도록 http get 요청 작성
router.get("/api/v1/customers", async (req, res) => {
  // res.send(databaseA.customer);
  try {
    const customer = await CustomerModel.find();
    if (!customer) {
      return res.sendStatus(404);
    }
    res.json(customer);
  } catch (error) {
    console.error("고객 조회 실패", error);
    res.status(500).json({ error: "조회 중 오류가 발생했습니다." });
  }
});

router.get("/api/v1/customers/:id", async (req, res) => {
  try {
    const customer = await CustomerModel.findOne({ id: req.params.id });
    res.json(customer);
  } catch (error) {
    console.error("고객 조회 실패", error);
    res.status(500).json({ error: "조회 중 오류가 발생하였습니다." });
  }
});

router.post("/api/v1/customers", async (req, res) => {
  const customer: Omit<Customer, "id"> = req.body;

  const newCustomer = new CustomerModel({
    id: uuidv4(),
    name: customer.name,
    address: customer.address,
    email: customer.email,
  });
  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error("고객 저장 실패", error);
    res.status(500).json({ error: "데이터베이스에 고객 정보 저장 실패" });
  }
});

//index를 가지고 id 에 해당되는 customer를 찾고, index조건이 -1이 아니면 있다는 것을 이용해서 있다면, customer를 다시 써준는 것을 작성
router.put("/api/v1/customers/:id", async (req, res) => {
  try {
    const customer = await CustomerModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!customer) {
      return res.sendStatus(404);
    }
    res.json(customer);
  } catch (error) {
    console.error("고객 정보 수정 오류", error);
    res.status(500).json({ error: "고객 정보 수정 중 오류 발생하였습니다." });
  }
});

router.delete("/api/v1/customers/:id", async (req, res) => {
  try {
    const result = CustomerModel.findOneAndDelete({ id: req.params.id });
    if (!result) {
      return res.sendStatus(404);
    }
    res.status(200).json({ msg: "고객 정보 삭제 완료" });
  } catch (error) {
    console.error("고객 삭제 실패", error);
    res.status(500).json({ error: "고객 정보 삭제 중 오류 발생하였습니다." });
  }
});

//라우터 사용 설정
app.use(router);
app.listen({ port: PORT }, () => {
  console.log(`http://127.0.0.1:${PORT} 에서 실행`);
});
