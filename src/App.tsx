import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import TasksList from "./TasksList";
import TaskFilter from "./TaskFilter";
import AddTaskForm from "./AddTaskForm";
import Tasks from "./ToDoModels";
import { Task } from "./ToDoModels";

import "./styles.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(60)
      }
    }
  })
);

export default function App() {
  const [tasks, setTasks] = React.useState<Tasks>({
    1: { id: 1, name: "Create React App", completed: true },
    2: { id: 2, name: "Deploy App", completed: false }
  });
  const classes = useStyles();

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

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTaskForm handleAddTask={addTask} />
      <TaskFilter />
      <div className={classes.root}>
        <Paper elevation={5}>
          <TasksList
            tasks={tasks}
            handleDeleteTask={deleteTask}
            handleCompleteTask={toggleTask}
          />
        </Paper>
      </div>
    </div>
  );
}
