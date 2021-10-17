import React, { memo } from "react";
// memo permite memorizar el estado de mi componente
//react memo es una funcion que recibe todo el componente
const Dato = ({ value }) => {
  console.log("otra vez me carge");
  return (
    <>
      <p>{value}</p>
    </>
  );
};
export default memo(Dato);
