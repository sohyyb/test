import React from "react";
function Greet({ name, onClick }) {
  // function handleClick() {
  //   alert(`Hello ${name}`);
  // }
  return <button onClick={onClick}>Click me</button>;
}
function App() {
  function handleClick() {
    alert(`Hello world`);
  }
  return (
    <div className="App">
      <div>
        <Greet name="John" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
