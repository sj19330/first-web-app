import React, { useState } from "react";

function HomePage(props) {
  const filler = "this is what will be displayed";

  return (
    <div style={{ background: "grey" }}>
      <p>{filler}</p>
    </div>
  );
}

export default HomePage;
