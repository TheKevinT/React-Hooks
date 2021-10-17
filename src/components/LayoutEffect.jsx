import React, { useEffect, useLayoutEffect, useState } from "react";

const LayoutEffect = () => {
  const [data, setData] = useState([]);

  const [length, setLength] = useState(0);

  const newData = [
    { name: "Kevin", email: "kevin@gamil.com" },
    { name: "Kevin", email: "kevin@gamil.com" },
    { name: "Kevin", email: "kevin@gamil.com" },
    { name: "Kevin", email: "kevin@gamil.com" },
    { name: "Kevin", email: "kevin@gamil.com" },
  ];

  //   const efecto = data.length;

  useEffect(() => {
    setTimeout(() => {
      setData(newData);
    }, 5000);
  }, [newData]);

  //se carga despues que se crea el componente
  useLayoutEffect(() => {

    setLength(data.length);
  }, []);
  return (
    <>
      <h1>UseLayoutEffect</h1>
      <hr />
      <p>Valores {length}</p>
    </>
  );
};

export default LayoutEffect;
