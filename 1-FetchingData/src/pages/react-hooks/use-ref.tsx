/*
1. Refs are not meant to be used inside return statements
   (Check by commenting this line ==> setCount((prevCount) => prevCount + 1);)
   The Ref value won't reflect because it will not trigger a re-render.

2. Refs do not trigger re-renders
*/

import { useState, useRef } from "react";
const UseRef = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);

  const handleClick = () => {
    // setCount((prevCount) => prevCount + 1);
    countRef.current = count + 1;
    console.log("State: ", count);
    console.log("Ref: ", countRef.current);
  };
  return (
    <div className="page-container">
      <h1 className="headline">{countRef.current}</h1>
      <h1 className="headline">{count}</h1>
      <button className="button" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default UseRef;
