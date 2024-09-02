import React, { useState } from "react";

const Submit = () => {
  //   const [form, setForm] = useState();

  //   const [text, setText] = useState("");

  const [select, setSelect] = useState("");

  //   function changeHandler(e) {
  //     setForm(e.target.value);
  //   }

  //   function submitHandler(e) {
  //     e.preventDefault();
  //     // console.log("submit 이벤트 발생");
  //     console.log("submit으로 받은 데이터 : ", form);
  //   }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   // console.log("submit 이벤트 발생");
  //   console.log("submit으로 받은 데이터 : ", text);
  // }

  //   function changeHandler(e) {
  //     setText(e.target.value);
  //   }

  function changeHandler(e) {
    setSelect(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    // console.log("submit 이벤트 발생");
    console.log("submit으로 받은 데이터 : ", select);
  }

  return (
    <div>
      {/* <h1>Submit 이벤트</h1>
      <form onSubmit={submitHandler}>
        <input type="submit" value="확인" />
      </form> */}

      {/* <form onSubmit={submitHandler}>
        <h1>이름 : {form}</h1>
        <input type="text" onChange={changeHandler} />
        <input type="submit" value="전송" />
      </form> */}

      {/* <form onSubmit={submitHandler}>
        <h1>내용 : {text}</h1>
        <textarea value={text} onChange={changeHandler}></textarea>
        <input type="submit" value="전송" />
      </form> */}
      <h1>선택한 과일 : {select}</h1>
      <form onSubmit={submitHandler}>
        {/* <select> 태그의 value 속성 = 선택된 option 값 */}
        <select value={select} onChange={changeHandler}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="전송" />
        <img src={select} alt="이미지" />
      </form>
    </div>
  );
};

export default Submit;
