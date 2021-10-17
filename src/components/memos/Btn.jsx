import React, { memo } from "react";

const Btn = ({ _hadle}) => {
  return (
    <>
      <button onClick={_hadle}>+1</button>
    </>
  );
};

export default memo(Btn);
