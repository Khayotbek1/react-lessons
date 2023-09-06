import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Khayot");

  const handleClick = () => {
    setName("Khayotbek");
  };

  return (
    <div className="App">
      <h2>Hello my name is {name}</h2>
      <button className="btn" onClick={handleClick}>
        change name
      </button>
    </div>
  );
}

export default App;
