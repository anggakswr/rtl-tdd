import { useState } from "react";

const Popup = () => {
  const [bPopupOn, setBPopupOn] = useState(false);

  return (
    <>
      <button onClick={() => setBPopupOn(true)}>show popup</button>
      {bPopupOn && <div>popup</div>}
    </>
  );
};

export default Popup;
