import { useState } from "react";
import InputTaskList from "./Components/InputTaskList";
import TaskList from "./Components/TaskList";
import "./styles.css";

function App() {
  const [taskList, setTaskList] = useState(() => {
    const taskList = localStorage.getItem("taskList");
    return JSON.parse(taskList) || [];
  });
  return (
    <div className="wrapper">
      <div></div>
      <div>
        <InputTaskList taskList={taskList} setTaskList={setTaskList} />
        <TaskList taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div></div>
    </div>
  );
}

export default App;
