import React, { useState } from "react";

const State = () => {

  const [state, setState] = useState(0);

  // setInterval(() => {
  //   setState(state +1)
  // }, 2000);



  return (
    <div className="container text-center">
      <h1>UseState</h1>
      <hr />
      cuenta: {state}
    </div>
  );
};

export default State;
