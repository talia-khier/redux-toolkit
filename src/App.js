import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increaseAmount,
  decrement,
  increment,
} from "./redux/slices/counterSlices";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux ToolKit Counter</h1>
      <h2>Counter: {counter.value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increaseAmount(3))}>Increase Amount</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
