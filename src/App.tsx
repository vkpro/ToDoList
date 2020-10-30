import * as React from "react";

// import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import TasksList from "./TasksList";
import TaskFilter from "./TaskFilter";
import AddTaskForm from "./AddTaskForm";
import Tasks from "./ToDoModels";
import { Task } from "./ToDoModels";

import "./styles.css";

export default function App() {
  const [tasks, setTasks] = React.useState<Tasks>({
    1: { id: 1, name: "Create React App", completed: true },
    2: { id: 2, name: "Deploy App", completed: false }
  });
  const [taskList, setTaskList] = React.useState(["1", "2"]);

  const filterTask = (todoFilter: string) => {
    switch (todoFilter) {
      case "ALL":
        setTaskList(Object.keys(tasks).filter((key: any) => tasks[key]));
        break;
      case "ACTIVE":
        setTaskList(
          Object.keys(tasks).filter((key: any) => !tasks[key].completed)
        );
        break;
      case "DONE":
        setTaskList(
          Object.keys(tasks).filter((key: any) => tasks[key].completed)
        );
        break;
    }
  };

  const addTask = (TaskName: string) => {
    if (TaskName) {
      const TaskId: number = Date.now();
      setTasks({
        ...tasks,
        [TaskId]: {
          id: TaskId,
          name: TaskName,
          completed: false
        }
      });
      setTaskList([...taskList, "" + TaskId]);
    }
  };

  const deleteTask = (taskId: number) => {
    const { [taskId]: tmp, ...rest } = tasks;
    setTasks(rest);
  };

  const toggleTask = (task: Task) => {
    setTasks({
      ...tasks,
      [task.id]: {
        id: task.id,
        name: task.name,
        completed: !task.completed
      }
    });
  };

  const filteredTasks = Object.keys(tasks)
    .filter((key) => taskList.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: tasks[key as any]
      };
    }, {});

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTaskForm handleAddTask={addTask} />
      <TaskFilter filterTask={filterTask} />
      <TasksList
        tasks={filteredTasks}
        handleDeleteTask={deleteTask}
        handleCompleteTask={toggleTask}
      />
    </div>
  );
}
