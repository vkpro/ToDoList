import * as React from "react";

import TasksList from "./TasksList";
import AddTask from "./AddTask";

import "./styles.css";

export default function App() {
  const [tasks, setTasks] = React.useState<Array<string>>(["Create React App"]);

  const addTask = (taskName: string) => {
    setTasks([...tasks, taskName]);
  };

  const deleteTask = (taskName: string) => {
    setTasks(tasks.filter((task) => task !== taskName));
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <AddTask handleAddTask={addTask} />
      <TasksList tasks={tasks} handleDeleteTask={deleteTask} />
    </div>
  );
}
