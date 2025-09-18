//components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";

// styles / css
import "./App.css";
import Events from "./components/Events";

function App() {
  return (
    <>
      <div className="App">
        <FirstComponent/>
        <TemplateExpressions/>
        <Events/>
      </div>
    </>
  );
}

export default App;
