import { useEffect, useRef, useState } from "react";

const useFullscreen = (onFulls) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (onFulls && typeof onFulls === "function") {
        onFulls(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (onFulls && typeof onFulls === "function") {
      onFulls(false);
    }
  };

  return { element, triggerFull };
};

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "we full" : "not full");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);

  return (
    <div>
      <div>
        <img ref={element} src="https://i.ibb.co/R6RwNxx/grape.jpg" />
        <button onClick={exitFull}>exit</button>
      </div>
      <button onClick={triggerFull}>MakeFullScreen</button>
    </div>
  );
};

export default App;