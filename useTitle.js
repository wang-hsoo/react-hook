import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdate = useTitle("Loading...");
  setTimeout(() => titleUpdate("Home"), 5000);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;