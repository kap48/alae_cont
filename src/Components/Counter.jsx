import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const addAmount = Number(amount) || 0;
  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };
  return (
    <div className="mx-auto mt-10  ">
      <input
        type="text"
        className="bg-slate-400 p-8"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <section className="">
        <h1 className="text-4xl font-medium text-indigo-500 bg-slate-300 rounded-md py-4 px-10 max-w-[100px] mx-auto">
          {count}
        </h1>

        <button
          className="text-4xl font-medium text-indigo-500 bg-slate-300 rounded-md py-4 px-10 max-w-[100px] mx-auto"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="text-4xl font-medium text-indigo-500 bg-slate-300 rounded-md py-4 px-10 max-w-[100px] mx-auto"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="text-4xl font-medium text-indigo-500 bg-slate-300 rounded-md py-10 px-10 max-w-[500px] mx-auto"
          onClick={() => dispatch(addByAmount(addAmount))}
        >
          Add by {amount}
        </button>
        <button
          className="text-4xl font-medium text-indigo-500 bg-slate-300 rounded-md py-10 px-10 max-w-[500px] mx-auto"
          onClick={() => resetAll()}
        >
          Reset
        </button>
      </section>
    </div>
  );
};

export default Counter;
