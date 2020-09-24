import * as React from "react";

import TasksList from "./TasksList";
import AddTask from "./AddTask";

import "./styles.css";

export default function App() {
  const [tasks, setTasks] = React.useState<Array<string>>([
    "Task 11",
    "Task 2",
    "Task 3"
  ]);

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTask />
      <TasksList tasks={tasks} />
    </div>
  );
}
