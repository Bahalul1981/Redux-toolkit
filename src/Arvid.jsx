import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dfsgdsjgh } from "./store/slicer/slicer";

function Arvid() {
  const dispatch = useDispatch();
  const [dfh, setDfh] = useState();
  //   const myName = "Hello My name is ";
  const kjhhdf = (e) => {
    const fdjgf = e.target.value;
    setDfh(fdjgf);
  };

  const dsfjkfj = useSelector((ee) => {
    return ee.show.value;
  });
  const newState = useSelector((state) => {
    return state.show.value;
  });
  return (
    <div>
      <hr />
      <h1>Hello Arvid</h1>
      <h4>{newState}</h4>
      <input type="text" onChange={kjhhdf} />
      <button onClick={() => dispatch(dfsgdsjgh(dfh))}>Show</button>
      <h4>{dsfjkfj}</h4>
    </div>
  );
}

export default Arvid;
