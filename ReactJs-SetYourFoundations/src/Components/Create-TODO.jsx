import React from "react";

const CreateTODO = () => {
  const tasks = ["first", "Second", "third", "fourth", "fifth"];
  var count = tasks.length;
  const disable = true;
  const res = count ? `Tasks: ${count}` : "Task:0";
  const handleClick = () => {
    tasks.push("Sixth");
    count++;
    // console.log(tasks);
    console.log("Add task", count);
  };

  return (
    <React.Fragment>
      <h1>Create your TO-DO List</h1>
      <h3>{res}</h3>
      <button onClick={handleClick}>Add Task</button>
      <ul>
        {tasks.map((t) => {
          return <li key={t}>{t}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};
export default CreateTODO;
