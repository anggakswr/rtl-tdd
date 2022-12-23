import { useState } from "react";

const Bank = () => {
  const [sMoney, setSMoney] = useState("0");

  return (
    <>
      <p>Your Money: {sMoney}</p>

      <input
        type="text"
        placeholder="Money Amount"
        value={sMoney}
        onChange={(e) => setSMoney(e.target.value)}
      />
    </>
  );
};

export default Bank;
