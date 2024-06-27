import Input from "./components/Input";
import Buttons from "./components/Buttons";
import "./App.css";
import { useState } from "react";

function App() {
  let BtnElement = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  let [data, setdata] = useState("");
  function printScreen(e) {
    // let currVal = e.target.innerHTML;
    let currVal=e
    let newData = data + currVal;
    if (currVal === "C") {
      setdata("");
    } else if (currVal === "=") {
      let ans = eval(data);
      setdata(ans);
    } else {
      setdata(newData);
    }
  }

  return (
    <>
      <div className="calculator">
        <Input Data={data}></Input>
        <div className="btnContainer">
          <Buttons btnArr={BtnElement} printScreen={printScreen}></Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
