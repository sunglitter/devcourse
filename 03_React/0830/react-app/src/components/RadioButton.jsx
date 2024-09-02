import React, { useState } from "react";

const RadioButton = (props) => {
  const { region } = props;
  const [form, setForm] = useState("");

  function updateValue(e) {
    setForm(e.target.value); // e.target.value = item.eng = form
  }

  function submitHandler(e) {
    e.preventDefault();
    alert(form);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {region.map((item) => (
          <label key={item.eng}>
            <input
              type="radio"
              name="city"
              value={item.eng}
              onChange={updateValue}
            />
            {item.region}
          </label>
        ))}
        &nbsp; &nbsp;
        <input type="submit" value="확인" />
      </form>
    </div>
  );
};

export default RadioButton;
