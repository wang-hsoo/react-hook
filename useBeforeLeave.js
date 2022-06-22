import { useEffect, useRef, useState } from "react";

const useBeforeLeave = (onbefore) => {
  if (typeof onbefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onbefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const beforeLife = () => {
    console.log("pis dont leave");
  };

  useBeforeLeave(beforeLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
