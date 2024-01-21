import { useContext } from "react";
import { MyContext } from "/src/MyContext";
let SentButton = () => {
  const { number, messageValue } = useContext(MyContext);

  const handleButtonClick = () => {
    const link = `https://wa.me/${number}?text=${messageValue}`;
    window.open(link, "_blank");
  };

  return (
    <>
      <button className="bg-green-400 p-2" onClick={handleButtonClick}>
        Sent
      </button>
    </>
  );
};
export default SentButton;
