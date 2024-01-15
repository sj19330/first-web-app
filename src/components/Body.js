import React, { useState } from "react";
import Input from "./Input.js";
import ToDo from "./ToDo.js";

//WHERE IM UP TO:
// currently sorting functionality to add a new todo
// it seems to work but the page instantly refreshes
// so it resets the list to the original usestate.
// need to sort this out.

export default function Body() {
  const [toDos, setToDos] = useState(["hello", "there"]);

  return (
    <div>
      <Input setToDos={setToDos} toDos={toDos} />
      {toDos.map((item, i) => (
        <ToDo item={item} index={i} />
      ))}
    </div>
  );
}
