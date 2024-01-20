import React from "react";

export default function ToDo({ handleRemove, item, index }) {
  return (
    <div>
      <h1>{index}.</h1>
      <p>{item}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
