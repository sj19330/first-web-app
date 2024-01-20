import React, { useState } from "react";
import Input from "./Input.js";
import ToDo from "./ToDo.js";

//WHERE IM UP To:
//trying to get the remove button to work

export default function Body() {
  const [toDos, setToDos] = useState(["hello", "there"]);

  const handleRemove = (e) => {
    alert("this is working");
  };

  return (
    <div>
      <p>Your to dos are listed Below:</p>
      {toDos.map((item, i) => (
        <ToDo
          hangleRemove={handleRemove}
          setToDos={setToDos}
          item={item}
          index={i}
        />
      ))}
      <p>Use the input below to add some to do's</p>
      <Input setToDos={setToDos} toDos={toDos} />
      <div>
        <button
          onClick={() => {
            alert(toDos);
          }}
        >
          help
        </button>
        <button
          onClick={() => {
            setToDos([]);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}
