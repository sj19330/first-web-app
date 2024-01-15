import logo from "./logo.svg";

import HomePage from "./components/HomePage";
import { useState } from "react";

function App() {
  const name = useState("Tony");

  return <HomePage />;
}

export default App;
