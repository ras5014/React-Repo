import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Getting the redux actions
import {
  decrement,
  increment,
  incrementByAmount,
} from "../state/counter/counterSlice";

export default function ReduxCounter() {
  // Accessing the state value using useSelector
  // The state is the global state managed by Redux
  const count = useSelector((state) => state.counter.value);
  // Dispatch is needed to perform actions
  const dispatch = useDispatch();

  return (
    <div className="page-container">
      <h1 className="headline">Redux JS</h1>
      <h1 className="font-bold text-2xl border-4 rounded-lg p-4">
        Count: {count}
      </h1>
      <div className="flex gap-10 mt-10">
        <button className="button" onClick={() => dispatch(increment())}>
          +1
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          -1
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          +5
        </button>
      </div>
    </div>
  );
}
