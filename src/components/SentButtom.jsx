import { useContext } from "react";
import { MyContext } from "/src/MyContext";
let SentButton = () => {
  const { number, messageValue } = useContext(MyContext);

  const handleButtonClick = () => {
    const link = `https://wa.me/${number}?text=${messageValue}`;
    window.open(link, "_blank");
  };

  return (
    <div className="text-center my-8">
      <button className="font-bold text-white rounded-xl bg-green-400 shadow-lg hover:bg-green-600 p-2" onClick={handleButtonClick}>
        Sent
      </button>
    </div>
  );
};
export default SentButton;
