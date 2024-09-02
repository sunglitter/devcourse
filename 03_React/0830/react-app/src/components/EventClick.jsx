import React, { useState } from "react";

const EventClick = () => {
  const [value, setValue] = useState("안녕하세요");

  function printConsole() {
    console.log(value);
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={printConsole}>클릭</button>
    </div>
  );
};

export default EventClick;
