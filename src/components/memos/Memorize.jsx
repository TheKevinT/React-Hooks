import React, { useMemo, useState } from "react";
import Dato from "./Dato";

const Memorize = () => {
  const [counter, setCounter] = useState(5);
  const [view, setView] = useState(true);

  const _hadleClick = () => {
    setCounter(counter + 1);
  };

  const pesado = (iter) => {
    for (let i = 0; i < iter; i++) {
      console.log("procesando");
    }
    return "Fin del proceso";
  };
  //pasar como parametros funcion que se debe ejecutar y su dependencia
  //se ejecutara cuando la dependencia cambie

  const pesadoMemo = useMemo(() => pesado(counter), [counter]);

  return (
    <>
      <h1>
        Memorize: <Dato value={counter} />
      </h1>
      <hr />

      {pesadoMemo}

      <button onClick={_hadleClick}>+1</button>
      <button onClick={() => setView(!view)}>ver/Quitar</button>
    </>
  );
};

export default Memorize;
