import React, { useEffect, useState } from "react";

const Effects = () => {
  //crear un state para traer usuarios
  //   const [users, setUsers] = useState([]);
  //crear un state para id de usuarios
  //   const [id, setId] = useState(10);

  //traer la data una sola vez
  //   useEffect(() => {
  //peticion a JSON PLACEHOLDER
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then(
  //         //asignamos la data a users
  //         (data) => {
  //           setUsers(data);
  //         }
  //       );
  //   }, []);

  //crear otro efecto para hacer otra petición diferente
  //la dependencia que va estar escuchando es el Id
  //se ejecuta cuando el ID cambie
  //   useEffect(() => {
  //       setUsers([{
  //           hola:'cambio en ID'
  //       }])
  //       console.log(users)
  //   }, [id]);

  //   console.log(users);

  // ---------------------------

  const [state, setstate] = useState(0);
  const evento =  (e) => {
    console.log("moviendo");
  }

 useEffect(() => {
     if(state === "123"){
         window.addEventListener("mousemove",evento);
     }
     //seccion de limpieza para que no haga ciclos
     return () => {
        window.removeEventListener("mousemove",evento);
     }
 }, [state])

  const _handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <form onSubmit={_handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Search
          </label>
          <input
            type="text"
            onChange={e => setstate(e.target.value)}
            value={state}
            // value={id}
            // onChange={(e) => setId(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Effects;
