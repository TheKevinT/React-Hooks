import React, { useState } from "react";
import Dato from "./Dato";

const Memorize = () => {
  const [counter, setCounter] = useState(5);
  const [view, setView] = useState(true);

  const _hadleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>
        Memorize: <Dato value={counter} />
      </h1>
      <hr />

      <button onClick={_hadleClick}>+1</button>
      <button onClick={() => setView(!view)}>ver/Quitar</button>
    </>
  );
};

export default Memorize;
