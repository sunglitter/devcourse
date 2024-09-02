// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import CountComponent from "./components/CountComponent";
// import ImageComponent from "./components/ImageComponent";
// import Submit from "./components/Submit";
// import RadioButton from "./components/RadioButton";
// import CheckBox from "./components/CheckBox";
// import Submit from "./components/Submit";
// import EventClick from "./components/EventClick";
// import ChangeFontColor from "./components/ChangeFontColor";

function App() {
  // const [value, setValue] = useState("안녕하세요");
  // const [font, setFont] = useState("50px");

  // function changeFont(size) {
  //   setFont(size);
  // }

  // const fontStyle = {
  //   fontSize: font,
  // };
  // const [message, setMessage] = useState("");

  // // 2. useState() 설계 -> 초기값 : 객체
  // const [form, setForm] = useState({ username: "", message: "" });

  // function onChangeHandler(e) {
  //   // 객체나 배열의 값을 변경 -> Spread 연산자
  //   // Spread 연산자로 값 복사한 경우 -> 뒤에 나오는 값이 최신 값
  //   // Key를 만들 때는 "e.target.name"으로 만들면 새로운 Key를 생성하므로
  //   // 반드시 []를 이용해서 만들어야 함 -> [e.target.name]
  //   const newForm = { ...form, [e.target.name]: e.target.value };

  //   // 원본 form 객체 -> newForm의 값으로 변경
  //   setForm(newForm);
  // }

  // const [message, setMessage] = useState({ title: "제목", color: "black" });

  // function changeMessage(msg) {
  //   // msg = e.target.value = title
  //   // console.log(msg);
  //   // 객체 값 변경 -> Spread 연산자
  //   const newMessage = { ...message };
  //   newMessage.title = msg;
  //   newMessage.color = "red";

  //   // 원본 객체를 새로운 객체로 변경
  //   setMessage(newMessage);
  // }

  // function showMessage() {
  //   alert(message.title);
  // }

  // const productList = [
  //   { name: "모자", price: 10000 },
  //   { name: "신발", price: 30000 },
  //   { name: "가방", price: 80000 },
  // ];

  // const regionList = [
  //   {
  //     region: "서울",
  //     eng: "Seoul",
  //   },
  //   {
  //     region: "부산",
  //     eng: "Busan",
  //   },
  //   {
  //     region: "제주",
  //     eng: "Jeju",
  //   },
  // ];
  const [sum, setSum] = useState(0);
  function comValue(sum) {
    setSum((prev) => prev + 1);
  }

  return (
    <>
      {/* <EventClick /> */}
      {/* <div style={fontStyle}>{value}</div> */}
      {/* <button
        onClick={() => {
          changeFont("100px");
        }}
      >
        글자크기변경
      </button> */}
      {/* <button
        onClick={() => {
          setFont("100px");
        }}
      >
        글자크기변경
      </button> */}
      {/* <ChangeFontColor /> */}
      {/* <h1>{message}</h1>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      /> */}
      {/* <h1>사용자 이름 : {form.username}</h1>
      <h1>내용 : {form.message}</h1> */}
      {/* 1. input 태그에 name 값 달기 */}
      {/* 3. 함수 만들기 (onChangeHandler) */}
      {/* <input
        type="text"
        name="username"
        onChange={onChangeHandler}
        placeholder="사용자 이름"
      />
      <input
        type="text"
        name="message"
        onChange={onChangeHandler}
        placeholder="내용을 입력하세요"
      /> */}
      {/* <h1 style={{ color: message.color }}>{message.title}</h1>
      <hr />
      <input
        type="text"
        onChange={(e) => {
          changeMessage(e.target.value);
        }}
        placeholder="내용을 입력하세요"
      />
      <button
        onClick={() => {
          showMessage();
        }}
      >
        클릭
      </button> */}
      {/* <CheckBox cap={10000} shoes={30000} bag={80000} /> */}
      {/* <CheckBox list={productList} /> */}
      {/* <Submit /> */}
      {/* <h1>라디오 버튼의 value를 출력</h1>
      <RadioButton region={regionList} /> */}
      {/* <Submit /> */}
      {/* <ImageComponent /> */}

      <div className="title">
        <h1>Total Count : {sum}</h1>
      </div>
      <div className="container">
        <CountComponent counts={comValue} />
        <CountComponent counts={comValue} />
      </div>
    </>
  );
}

export default App;
