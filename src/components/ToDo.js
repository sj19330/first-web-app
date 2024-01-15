import React from "react";

export default function ToDo({ item, index }) {
  return (
    <div>
      <h1>{index}.</h1>
      <p>{item}</p>
      <button>remove</button>
    </div>
  );
}
