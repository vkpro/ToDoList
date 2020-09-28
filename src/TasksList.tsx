import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import Tasks from "./ToDoModels";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      maxWidth: 460,
      backgroundColor: theme.palette.background.paper
    },
    completedTask: {
      textDecoration: "line-through"
    }
  })
);

type TasksListProps = {
  tasks: Tasks;
  handleDeleteTask: Function;
  handleCompleteTask: Function;
};

const TasksList: React.FC<TasksListProps> = ({
  tasks,
  handleDeleteTask,
  handleCompleteTask
}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {Object.keys(tasks).length === 0
        ? "No tasks"
        : Object.keys(tasks).map((taskId: string) => {
            const task = tasks[taskId as any];
            const labelId = `checkbox-list-label-${task.name}`;

            return (
              <ListItem
                key={`${task.id}`}
                role={undefined}
                dense
                button
                onClick={() => handleCompleteTask(task)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={task.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                    color="primary"
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={task.name}
                  style={
                    task.completed
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      handleCompleteTask(task);
                      handleDeleteTask(task.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
    </List>
  );
};

export default TasksList;
