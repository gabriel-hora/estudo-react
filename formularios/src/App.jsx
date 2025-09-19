import { useState } from "react";

import "./App.css";
import MyForms from "./components/MyForms";

function App() {
  return (
    <div>
      <h2>Forms</h2>
      <MyForms user={{name: "Gabriel", email:"gabriel@hora"}}/>
    </div>
  );
}

export default App;
