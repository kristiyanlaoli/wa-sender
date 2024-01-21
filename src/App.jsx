import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import InputNumber from "./components/InputNumber";
import MessageBox from "./components/MessageBox";
import SentButton from "./components/SentButtom";
import { MyContext } from "./MyContext.js";

function App() {
  const [number, setNumber] = useState("");
  const [messageValue, setMessageValue] = useState("");
  return (
    <>
      <MyContext.Provider
        value={{ number, setNumber, messageValue, setMessageValue }}
      >
        <Header />
        <InputNumber />
        <MessageBox />

        <SentButton />
      </MyContext.Provider>
    </>
  );
}

export default App;
