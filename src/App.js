import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(0);

  const handleInc = (value) => {
    setData(data + value);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2 data-testid="counter-value">{data}</h2>
      <button
        data-testid="counter-decrement-button"
        onClick={() => handleInc(-1)}
      >
        -
      </button>
      <button
        data-testid="counter-increment-button"
        onClick={() => handleInc(1)}
      >
        +
      </button>
    </div>
  );
}

export default App;
