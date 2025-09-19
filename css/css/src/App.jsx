import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";

function App() {
  const redTitle = false;

  return (
    <div>
      {/*CSS DE COMPONENTE */}
      <MyComponents />
      <p>Este é o parágrafo global</p>
      {/*CLASSE DINAMICA DE CSS*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>
      {/*CLASSE MODULOS*/}
      <Title/>
    </div>
  );
}

export default App;
