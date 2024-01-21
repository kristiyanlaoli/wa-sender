import { useState, useEffect, useContext } from "react";
import { MyContext } from "/src/MyContext.js";
let MessageBox = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const { setMessageValue } = useContext(MyContext);
  useEffect(() => {
    setMessageValue(inputValue);
  }, [inputValue, setMessageValue]);

  return (
    <div className="w-[210px] min-h-[250px]  mx-auto mt-6">

        <p className="font-bold py-2">Input Messages:</p>
        <label>

          <textarea id="textArea" name="textArea" value={inputValue}
            onChange={handleChange}></textarea>
        </label>

    </div>
  );
};
export default MessageBox;
