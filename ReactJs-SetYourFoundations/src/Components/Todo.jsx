import React, { useState } from "react";

const Todo = () => {
  const [count, setCount] = useState(100);
  const [input, setInput] = useState("");
  const tasks = ["first", "Second", "third", "fourth", "fifth"];

  const handleClick = () => {
    setCount(count + 1);
    tasks.push("sixth");
    //console.log(tasks);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <React.Fragment>
      <h1>Create your TO-DO List</h1>
      Your next task:
      <input type="text" onChange={handleChange} />
      <h3>{count}</h3>
      <button onClick={handleClick}>Add Task</button>
      <ul>
        {tasks.map((t) => {
          return <li key={t}>{t}</li>;
        })}
        <li>{input}</li>
      </ul>
    </React.Fragment>
  );
};

export default Todo;
