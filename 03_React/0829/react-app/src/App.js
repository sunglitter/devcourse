import "./App.css";
// import ChangeProps from "./components/ChangeProps";
// import Prac01 from "./components/Prac01";
// import PriceList from "./components/PriceList";
// import TodoTask from "./components/TodoTask";
// import MovieComponent from "./components/MovieComponent";
import { useState } from "react";
import UserID from "./components/UserID";
import UserPW from "./components/UserPW";
// import Spread from "./components/Spread";
// import ChildComponent from "./components/ChildComponent";

function App() {
  // const movieList = [
  //   {
  //     title: "행복의 나라",
  //     open: "2024.08.14",
  //     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88454/88454_320.jpg",
  //   },
  //   {
  //     title: "에이리언-로물루스",
  //     open: "2024.08.14",
  //     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88170/88170_320.jpg",
  //   },
  //   {
  //     title: "트위스터스",
  //     open: "2024.08.14",
  //     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88442/88442_320.jpg",
  //   },
  // ];

  // const todoList = [
  //   { taskName: "빨래하기", finished: false },
  //   { taskName: "공부하기", finished: true },
  // ];

  // const priceList = [1000, 2000, 1000, 4000];

  // props 값을 변경 못하는지??

  // const [1, 2] = useState(초기값)
  // const [인사, 인사변경] = useState(["안녕하세요", "재미있는", "리액트"]);

  // font, setFont
  // name, setName

  // const [font, setFont] = useState("50px");

  // const fontStyle = {
  //   // 키(카멜케이스): 값
  //   fontSize: font,
  // };

  // const [value, setValue] = useState("안녕하세요");

  // function printConsole() {
  //   // 콘솔 창에 value 값 출력
  //   console.log(value);

  //   // value 값 변경
  //   setValue("반가워요");
  // }

  // const [number, setNumber] = useState(0);
  // function count() {
  //   // 숫자를 1씩 증가
  //   // number = 0 + 1 => 1 + 1 => 2...
  //   setNumber(number + 1);
  // }
  // function reset() {
  //   setNumber(0);
  // }

  // const [msg, setMsg] = useState("안녕하세요");
  // function login() {
  //   setMsg("로그인되었습니다.");
  // }
  // function logout() {
  //   setMsg("로그아웃되었습니다.");
  // }

  // const [value, setValue] = useState(["안녕", "하이"]);
  // function changeArr() {
  //   // 객체, 배열의 값을 변경하려면 -> Spread 연산자
  //   const newValue = [...value];
  //   newValue[1] = "Hello"; // newValue = ['안녕', 'Hello']

  //   // 화면 업데이트
  //   setValue(newValue);
  // }

  // // 1. useState()
  // const [value, setValue] = useState("");

  // // data: 자식이 작성한 글자
  // function addDateHandler(data) {
  //   // 변수 값을 변경
  //   setValue(data);
  // }

  // ID: admin / PW: 1234
  // alert 로그인 성공 / alert 로그인 실패

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function addIdHandler(id) {
    // ID 컴포넌트로부터 ID 값을 전달 받아서 처리
    // 기존 id = ''
    // 전달받은 id = 'admin'
    setId(id); // id = 'admin'
  }

  function addPwHandler(pw) {
    // PW 컴포넌트로부터 PW 값을 전달 받아서 처리
    // 기존 pw = ''
    // 전달받은 pw = '1234'
    setPw(pw); // pw = '1234'
  }

  function loginCheck() {
    // 기존에 지정된 id, pw 값을 비교
    if (id === "admin" && pw === "1234") {
      // 로그인 성공
      alert("로그인 성공");
    } else {
      // 로그인 실패
      alert("로그인 실패");
    }
  }

  return (
    <div>
      {/* {movieList.map((movie) => (
        <MovieComponent title={movie.title} open={movie.open} img={movie.img} />
      ))} */}

      {/* {todoList.map((todo) => (
        <div>{todo.taskName}</div>
      ))} */}

      {/* {todoList.map((todo) => (
        <TodoTask taskName={todo.taskName} />
      ))} */}

      {/* <h3>가격목록</h3>
      {priceList.map((price, index) => (
        <PriceList prices={price} key={index} />
      ))} */}

      {/* <ChangeProps name="sooa" /> */}

      {/* <div style={fontStyle}>{인사[0]}</div>
      <div style={fontStyle}>{인사[1]}</div>
      <div style={fontStyle}>{인사[2]}</div>
      <div sytle={fontStyle}>{font}</div> */}

      {/* <h1>{value}</h1>

      <button onClick={printConsole}>클릭</button> */}

      {/* <h1>{number}</h1>

      <button onClick={count} onMouseOut={reset}>
        클릭
      </button> */}

      {/* <h1>{msg}</h1>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button> */}

      {/* <Spread /> */}

      {/* <h1>{value[0]}</h1>
      <h1>{value[1]}</h1>
      <button onClick={changeArr}>배열 값 변경</button> */}

      {/* <h3>ChildComponent로부터 전달받은 데이터 : {value}</h3>
      <ChildComponent onAddData={addDateHandler} /> */}
      <UserID onAddId={addIdHandler} />
      <UserPW onAddPw={addPwHandler} />
      <button onClick={loginCheck}>Login</button>
    </div>
  );
}

export default App;
