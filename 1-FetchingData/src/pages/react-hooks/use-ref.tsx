/*
1. Refs are not meant to be used inside return statements
   (Check by commenting this line ==> setCount((prevCount) => prevCount + 1);)
   The Ref value won't reflect because it will not trigger a re-render.

2. Refs do not trigger re-renders
3. The only time we use refs inside return statements is when we want to access the DOM elements directly.
   Like here I'm focusing the input on reload
*/

import { useState, useRef, useEffect } from "react";
const UseRef = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
      <input ref={inputRef} type="text" className="input mt-10" />
    </div>
  );
};

export default UseRef;
