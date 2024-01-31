import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
        <h1 className="text-3xl font-bold bg-green-400 p-1 ">
          Hello I am Himasnhu, These are my Cards.
        </h1>
      <div className="flex">
        <Card />
        <Card userName="Himanshu" btnText="Click Me" image="https://images.pexels.com/photos/4064839/pexels-photo-4064839.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <Card userName="Ashish" btnText="Visit Me" image="https://images.pexels.com/photos/5749818/pexels-photo-5749818.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </div>



    </>
  );
}

export default App;
