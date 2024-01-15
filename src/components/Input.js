import React, { useState } from "react";

export default function Input({ setToDos, toDos }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setToDos([text]);
    setText("");
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} type="text"></input>
        <input type="submit" value="Press Me"></input>
      </form>
    </div>
  );
}
