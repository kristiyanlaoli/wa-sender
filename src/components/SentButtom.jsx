let SentButton = () => {
  const handleButtonClick = () => {
    const link = "https://wa.me/6282224070839?text=";
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
