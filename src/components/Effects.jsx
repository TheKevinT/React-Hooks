import React, { useEffect, useState } from "react";

const Effects = () => {
  //crear un state para traer usuarios
  const [users, setUsers] = useState([]);

  //traer la data una sola vez
  useEffect(() => {
    //peticion a JSON PLACEHOLDER
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        //asignamos la data a users
        (data) => {
          setUsers(data);
        }
      );
  }, []);

  console.log(users);

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
            type="email"
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
