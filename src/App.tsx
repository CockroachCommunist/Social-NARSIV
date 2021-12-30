import React from "react";
import { useDispatch } from "react-redux";
import { start } from "./store/user/slices/get";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(start());
        }}
      >
        CLICK
      </button>
    </div>
  );
}

export default App;
