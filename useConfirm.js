import { useEffect, useRef, useState } from "react";

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    }
  };

  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Delething the world");
  const cofirmDelete = useConfirm("Are you suere", deleteWorld);
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={cofirmDelete}>Delete the world </button>
    </div>
  );
};

export default App;
