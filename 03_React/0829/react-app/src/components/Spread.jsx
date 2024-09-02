import React from "react";

function Spread() {
  const person1 = { name: "sooa" };
  // const person2 = { name: "sooa", age: 20 };
  // const person3 = { name: "sooa", age: 20, region: "seoul" };

  // // =를 사용해서 복사를 하게 되면 같은 주소를 참조하게 됨
  // const person2 = person1;
  // person2.age = 20;

  // const person3 = person2;
  // person3.region = "seoul";

  const person2 = { ...person1, age: 20 };
  const person3 = { ...person2, region: "seoul" };
  // const person4 = { ...person3, region: "busan" };
  const person4 = { region: "busan", ...person3 };

  return (
    <div>
      <h1>{JSON.stringify(person1)}</h1>
      <h1>{JSON.stringify(person2)}</h1>
      <h1>{JSON.stringify(person3)}</h1>
      <h1>{JSON.stringify(person4)}</h1>
    </div>
  );
}

export default Spread;
