import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const newObj={
    "name":"raina",
    "gender":"male"
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      {/* <Card username="ujwal" obj={newObj}/> */}
      <Card username="Jane" btnText="click me"/>
      <Card username="John" btnText="follow me"/>
    </>
  );
}

export default App;
