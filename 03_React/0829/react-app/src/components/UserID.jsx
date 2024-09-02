import React from "react";

const UserID = (props) => {
  function updateValue(e) {
    props.onAddId(e.target.value);
  }
  return (
    <div>
      <h3>
        ID : <input type="text" onChange={updateValue} />
      </h3>
    </div>
  );
};

export default UserID;
