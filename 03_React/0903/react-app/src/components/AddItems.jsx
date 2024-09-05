import React, { useState } from "react";

const AddItems = () => {
  const [items, setItems] = useState(["초콜렛", "사탕"]);
  const [input, setInput] = useState("");

  function inputChange(e) {
    setInput(e.target.value);
  }

  function updateInput() {
    setItems((prevState) => [input, ...prevState]);
  }
  return (
    <div>
      <input type="text" onChange={inputChange} />
      <button onClick={updateInput}>추가</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddItems;
