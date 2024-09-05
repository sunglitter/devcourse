import React, { useEffect, useState } from "react";

const AddName = () => {
  //   const [names, setNames] = useState(["정수아", "리액트"]); // 숫자, 문자열, 배열, 객체, 함수 등이 인자로 올 수 있음
  //   const [names, setNames] = useState(heavywork()); // 복잡한 계산이 이루어지는 함수가 인자로 오게되면 사이트 성능 저하를 유발
  const [names, setNames] = useState(() => heavywork()); // 해결방법: 최초에 1번 호출 = 콜백함수
  const [input, setInput] = useState("");

  function inputChange(e) {
    setInput(e.target.value);
  }
  function uploadInput() {
    setNames((prevState) => [...prevState, input]);
    // setNames(function(prevState) {return [input, ...prevState]});  << 동일함
  }

  // 복잡한 계산이 이루어지는 함수의 예
  function heavywork() {
    for (let i = 0; i < 1000; i++) {
      console.log("엄청 복잡한 계산 중.. 시간 오래 걸림..");
    }

    return ["정수아", "리액트"];
  }

  //   // 1. 콜백함수 => 렌더링 발생시마다 실행
  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다.");
  //     console.log({ names });
  //   });

  //   // 2. mount될 때만 실행하고 싶을 때 => 비어있는 의존성 배열 추가
  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다.");
  //     console.log({ names });
  //   }, []);

  // 3. 특정 값이 update될 때만 실행하고 싶을 때 => 특정 값이 들어있는 의존성 배열 추가
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ names });
  }, [names]);

  return (
    <div>
      <input type="text" onChange={inputChange} />
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default AddName;
