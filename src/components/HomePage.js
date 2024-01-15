import React, { useState } from "react";
import styles from "../styles/HomePage.module.css";
import Title from "./Title.js";
import Body from "./Body.js";

function HomePage(props) {
  return (
    <div>
      <Title />
      <Body />
    </div>
  );
}

export default HomePage;
