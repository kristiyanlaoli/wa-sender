import { useState } from "react";
let MessageBox = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="w-[210px] mx-auto mt-6">
    <form>
        <p className="font-bold py-2">Input Messages:</p>
      <label>
        <input className="w-[210px] rounded-sm border-2" name="firstName" value={inputValue} onChange={handleChange} />
      </label>
    </form>
    </div>
  );

};
export default MessageBox;
