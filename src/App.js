import React from "react";
// import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";

const App = () => {
  // const { count } = useSelector((state) => state.counter);
  const global = useSelector((state) => state.global);
  console.log("🚀 ~ App ~ global:", global);

  const dispatch = useDispatch();

  const [darkMode, setDarkMode] = useDarkMode();

  const handleChangeMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };

  return (
    <div className="">
      {/* <h2>
        The count from App: <span className="text-blue-500">{count}</span>
      </h2>
      <Counter /> */}
      <Card />
      <button onClick={handleChangeMode}>Toogle dark mode</button>
    </div>
  );
};

export default App;
