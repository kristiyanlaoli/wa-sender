import { useState, useContext, useEffect } from "react";
import { MyContext } from "/src/MyContext.js";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const InputNumber = () => {
  const { setNumber } = useContext(MyContext);

  const [phone, setPhone] = useState("");
  useEffect(() => {
    if (phone[3] == 0) {
      setNumber(phone.slice(1, 3) + phone.slice(4, phone.length));
    } else {
      setNumber(phone.slice(1, phone.length));
    }
  }, [phone]);

  return (
    <div className="bg-slate-300 w-[210px] mx-auto">
      <p className="font-bold py-2">Input number:</p>
      <PhoneInput
        defaultCountry="id"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};

export default InputNumber;
