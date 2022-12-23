import { useState } from "react";

const Counter = () => {
  const [nNumber, setNNumber] = useState(0);

  return (
    <>
      {nNumber}

      <button onClick={() => setNNumber((nPrevNumber) => nPrevNumber + 1)}>
        plus
      </button>
    </>
  );
};

export default Counter;
