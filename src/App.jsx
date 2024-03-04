import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import InputNumber from "./components/InputNumber";
import MessageBox from "./components/MessageBox";
import SentButton from "./components/SentButtom";
import { MyContext } from "./MyContext.js";
import Footer from "./components/Footer.jsx";

function App() {
  const [number, setNumber] = useState("");
  const [messageValue, setMessageValue] = useState("");
  return (
    <>
      <div className="App">
        <MyContext.Provider
          value={{ number, setNumber, messageValue, setMessageValue }}
        >
          <Header />
          <InputNumber />
          <MessageBox />

          <SentButton />
          <Footer />
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
