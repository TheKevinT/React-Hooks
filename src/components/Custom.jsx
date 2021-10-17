import React from "react";
import { useCounter } from "../hooks/useCounter";

const Custom = () => {
  const [counter, increment, decrement, range] = useCounter(5, 2);
  return (
    <>
      <h1>Custom Hook : {counter}</h1>
      <hr />

      <button onClick={increment}> + {range}</button>
      <button onClick={decrement}> - {range}</button>
    </>
  );
};

export default Custom;
