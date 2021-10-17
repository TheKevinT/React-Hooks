import React, { useCallback, useMemo, useState } from "react";
import { useMemorizeApp } from "../../hooks/useMemorizeApp";
import Btn from "../memos/Btn";
import Dato from "./Dato";

const Memorize = () => {
//   const [counter, setCounter] = useState(5);
//   const [view, setView] = useState(true);

  //   const _hadleClick = () => {
  //     setCounter(counter + 1);
  //   };

//   const pesado = (iter) => {
//     for (let i = 0; i < iter; i++) {
//       console.log("procesando");
//     }
//     return "Fin del proceso";
//   };
  //pasar como parametros funcion que se debe ejecutar y su dependencia
  //se ejecutara cuando la dependencia cambie

//   const pesadoMemo = useMemo(() => pesado(counter), [counter]);

  //USE CALLBACK permite enviar una funcion
  //se indica una dependencia que no va cambiar

//   const _hadleClick = useCallback(() => {
//     setCounter((actual) => actual + 1);
//   }, [setCounter]);

const [counter, pesadoMemo, _hadleClick, hide] = useMemorizeApp()

  return (
    <>
      <h1>
        Memorize: <Dato value={counter} />
      </h1>
      <hr />

      {pesadoMemo}

      <Btn _hadle={_hadleClick} />
      <button onClick={hide}>ver/Quitar</button>
    </>
  );
};

export default Memorize;
