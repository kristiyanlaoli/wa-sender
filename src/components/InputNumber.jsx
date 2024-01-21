import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const InputNumber = () => {
  const [phone, setPhone] = useState("");
  if (phone[3] == 0) {
    let part1 = phone.slice(1, 3) + phone.slice(4, phone.length);
    console.log(part1);
  } else {
    console.log(phone.slice(1, phone.length));
  }

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