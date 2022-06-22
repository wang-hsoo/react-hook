import { useEffect, useRef, useState } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can i steal");

  return (
    <div>
      <h1>hell0</h1>
      <button onClick={triggerNotif}>oo</button>
    </div>
  );
};

export default App;