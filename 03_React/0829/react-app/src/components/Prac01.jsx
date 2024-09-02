import React from "react";

const Prac01 = () => {
  const names = ["HTML", "CSS", "JavaScript", "React"];
  // const nameList = names.map((name, index) => {
  //   return <li key={index}>{name}</li>;
  // });
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default Prac01;
