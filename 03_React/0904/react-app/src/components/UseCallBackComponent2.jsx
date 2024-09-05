// import React, { useCallback, useEffect, useState } from "react";

// const UseCallBackComponent2 = () => {
//   const [count, setCount] = useState(0);

//   const clickHandler = useCallback(() => {
//     console.log("count : ", count);
//   }, [count]);

//   useEffect(() => {
//     console.log("clickHandler() 변경");
//   }, [clickHandler]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={count}
//         onChange={(e) => setCount(e.target.value)}
//       />
//       <button onClick={clickHandler}>숫자 출력</button>
//     </div>
//   );
// };

// export default UseCallBackComponent2;

// 복습

import React, { useCallback, useEffect, useState } from "react";

const UseCallBackComponent2 = () => {
  const [count, setCount] = useState(0);

  // 1. 렌더링할 때마다 함수를 새로 생성 -> 성능 저하 유발
  // const clickHandler = () => {
  //   console.log("count : ", count);
  // };

  // // 2. 최초 렌더링 함수 생성 이후 재생성 X
  // const clickHandler = useCallback(() => {
  //   console.log("count : ", count); // count는 계속 0의 값을 가짐
  // }, []);

  // 3. count 값이 변경되었을 때만 렌더링할 때 함수를 새로 생성
  const clickHandler = useCallback(() => {
    console.log("count : ", count);
  }, [count]);

  // clickHandler 변경될 때 마다 렌더링할 때 실행
  useEffect(() => {
    console.log("렌더링 완료");
  }, [clickHandler]);

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={clickHandler}>숫자 출력</button>
    </div>
  );
};

export default UseCallBackComponent2;
