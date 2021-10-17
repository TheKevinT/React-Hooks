import React from "react";
import Custom from "./components/Custom";
import Memorize from "./components/memos/Memorize";
// import Effects from "./components/Effects";
// import LayoutEffect from "./components/LayoutEffect";
// import Ref from "./components/Ref";
// import Calculadora from "./components/Calculadora";
// import State from "./components/State";

const App = () => {
  return (
    <>
      <div className="container text-center">
        {/* <Effects />
        <LayoutEffect /> 
        <Ref/>*/}
        <Memorize/>
        <Custom />
      </div>
      {/* <div className="container text-center">
        <h1>Calculadora - PWA</h1>
        <hr />
        <Calculadora />
      </div> */}
      {/* <State/> */}
    </>
  );
};

export default App;
