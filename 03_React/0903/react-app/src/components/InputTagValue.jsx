import React, { useRef, useState } from "react";

const InputTagValue = () => {
  const [name, setName] = useState("sooa");
  const [age, setAge] = useState(10);

  const nameRef = useRef();
  const ageRef = useRef();

  return (
    <div>
      <div>
        <h1>input 태그 value 값 지정</h1>
        이름 :{" "}
        <input
          type="text"
          ref={nameRef}
          value={name}
          onChange={(e) => setName(nameRef.current.value)}
        />
        나이 :{" "}
        <input
          type="number"
          ref={ageRef}
          value={age}
          onChange={(e) => setAge(ageRef.current.value)}
        />
      </div>
    </div>
  );
};

export default InputTagValue;
