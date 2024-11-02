/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../redux/Counter/counterSlice";
import { decrease } from "../redux/Counter/counterSlice";

const Counter = () => {
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.count.value)
   
  return (
    <div className="broder border-black">
      <h1>Current Value: {count}</h1>
    
      <div className="">
        <button onClick={()=>dispatch(increase())}>Increase</button>
        <br />
        <button onClick={()=>dispatch(decrease())}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
