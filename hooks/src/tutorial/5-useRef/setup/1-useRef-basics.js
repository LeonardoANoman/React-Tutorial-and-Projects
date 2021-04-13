import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}></input>
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </div>
  );
};

export default UseRefBasics;
