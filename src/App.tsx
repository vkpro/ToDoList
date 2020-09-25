import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import TasksList from "./TasksList";
import AddTask from "./AddTask";

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
  const [tasks, setTasks] = React.useState<Array<string>>(["Create React App"]);
  const classes = useStyles();

  const addTask = (taskName: string) => {
    if (taskName) {
      setTasks([...tasks, taskName]);
    }
  };

  const deleteTask = (taskName: string) => {
    setTasks(tasks.filter((task) => task !== taskName));
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTask handleAddTask={addTask} />
      <div className={classes.root}>
        <Paper elevation={5}>
          <TasksList tasks={tasks} handleDeleteTask={deleteTask} />
        </Paper>
      </div>
    </div>
  );
}
