import { useEffect, useState } from "react";

const Magic = () => {
  const [bTextOn, setBTextOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBTextOn(true);
    }, 3000);
  }, []);

  return <p>{bTextOn ? "Abrakadabra" : ""}</p>;
};

export default Magic;
