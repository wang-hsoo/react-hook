import { useEffect, useRef, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "funtion") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offine", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offine", handleChange);
    };
  }, []);

  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we just went online" : "we are Offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>Hello</h1>
      <p>{onLine ? "Online" : "Offline"}</p>
    </div>
  );
};

export default App;