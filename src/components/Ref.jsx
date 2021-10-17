import React, { useRef } from "react";

const Ref = () => {
  //ref sirve para crear una referencia a un elemento del DOM
  //el hook ref recibe un null porque el valor inicial de la referencia va a ser null
  const ref = useRef(null);
  const _handleRef = () => {
    // const ref = document.getElementById("area");
    ref.current.value = "Hola mundo";
    ref.current.select();
    console.log(ref);
  };
  return (
    <>
      <h1 onClick={_handleRef}>USE REF</h1>
      <hr />

      <textarea ref={ref} placeholder="Escribe un mensaje..."></textarea>
    </>
  );
};

export default Ref;
