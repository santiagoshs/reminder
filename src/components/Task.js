import { useState } from "react";

const Task = () => {
  const [darkmode, setDarkmode] = useState(false);

  const handleClick1 = () => {
    setDarkmode(!darkmode);
  };

  return (
    <>
      <button onClick={handleClick1}>
        {darkmode ? "Darkmode" : "Light Mode"}
      </button>
    </>
  );
};

export default Task;
