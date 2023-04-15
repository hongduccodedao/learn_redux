import React from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

const App = () => {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="">
      <h2>
        The count from App: <span className="text-blue-500">{count}</span>
      </h2>
      <Counter />
    </div>
  );
};

export default App;
