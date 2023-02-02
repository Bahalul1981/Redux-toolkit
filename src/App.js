import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Arvid from "./Arvid";
import { newState } from "./store/slicer/slicer";
function App() {
  const dispatch = useDispatch();
  const dataFromStore = useSelector((dataCheck) => {
    return dataCheck.show.value;
  });

  return (
    <div className="App">
      <h1>Welcome to Redux-toolkit</h1>
      <h2>{dataFromStore}</h2>
      <button onClick={() => dispatch(newState())}>Add</button>
      <Arvid />
    </div>
  );
}

export default App;
