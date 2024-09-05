import React, { useReducer, useState } from "react";
import reducer from "./reducer";
import MemberList from "./MemberList";
import "./AddMemberInfo.scss";

// 초기값 형태
// initialState = {
//  count: 0,
//  member: [
//    {
//      index: "",
//      name: "",
//      age: "",
//      region: "",
//    }
//  ]
// }

const AddMemberInfo = () => {
  const initialState = {
    count: 0,
    member: [],
  };

  const [userList, dispatch] = useReducer(reducer, initialState);
  const [newUser, setNewUser] = useState({});

  function changeHandler(e) {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div>
      <div className="container">
        <h1>전체 회원 수 : {userList.count}</h1>
        <label>
          이름 : <input type="text" name="name" onChange={changeHandler} />
        </label>
        <label>
          나이 : <input type="number" name="age" onChange={changeHandler} />
        </label>
        <label>
          지역 :
          <input type="text" name="address" onChange={changeHandler} />
        </label>
        <button
          className="addBtn"
          onClick={() => {
            dispatch({ type: "addMember", newUser: newUser });
          }}
        >
          추가
        </button>
      </div>

      <MemberList userList={userList.member} dispatch={dispatch} />
    </div>
  );
};

export default AddMemberInfo;
