import React, { useState } from "react";

export default function Input({ setToDos, toDos }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos((prev) => [...prev, text]);
    setText("");
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add your to dos here"
          value={text}
          onChange={handleChange}
          type="text"
        ></input>
        <input type="submit" value="Press Me"></input>
      </form>
    </div>
  );
}
