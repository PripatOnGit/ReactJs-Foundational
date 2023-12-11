import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Card from "./Components/card.jsx";
import CreateTODO from "./Components/Create-TODO.jsx";
import Todo from "./Components/Todo.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
