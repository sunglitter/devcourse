import React from "react";

const UserPW = (props) => {
  function updateValue(e) {
    props.onAddPw(e.target.value);
  }
  return (
    <div>
      <h3>
        PW : <input type="password" onChange={updateValue} />
      </h3>
    </div>
  );
};

export default UserPW;
