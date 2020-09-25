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
  tasks: string[];
  handleDeleteTask: Function;
};

const TasksList: React.FC<TasksListProps> = ({ tasks, handleDeleteTask }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState<Array<string>>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value as string);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {tasks.map((value, index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={`${index}-${value}`}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                color="primary"
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={value}
              style={
                checked.indexOf(value) !== -1
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTask(value)}
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
