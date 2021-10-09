import React, { useEffect, useState } from "react";

const State = () => {
  // useEffect no retorna nada
  // maneja el ciclo de vida
  // se utiliza para que algo se ejecute una sola vez
  // const [state, setState] = useEffect();
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(state);
  },[]);

  const _handleClick = () => {
    setState(state + 1);
  };

  return (
    <div className="container text-center">
      <h1>UseEffect</h1>
      <hr />
      cuenta: {state}
      <button onClick={_handleClick}> +1</button>
    </div>
  );
};

export default State;
