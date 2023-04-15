import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "../redux-toolkit/counterSlice";
// import { decrement, increment, incrementBy } from "../redux/couter";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  // useSelector là hàm có sẵn của redux, nó sẽ lấy giá trị từ store
  const dispatch = useDispatch();
  // dispath là hàm có sẵn của redux, nó sẽ gọi action và gửi lên reducer
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementBy = () => {
    dispatch(incrementBy(5));
  };

  return (
    <div>
      <h2 className="">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleIncrementBy}
        >
          Increment 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
