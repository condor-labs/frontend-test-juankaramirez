import React from "react";

//Components
import Main from "./containers/Main";

// Styles
import "./assets/styles/global.scss";

function App() {
  document.body.style.overflow = "hidden";
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
