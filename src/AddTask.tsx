import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  })
);

const AddTask: React.FC<{ handleAddTask: any }> = ({ handleAddTask }) => {
  const classes = useStyles();
  const [taskName, setTaskName] = useState("");

  const handleTaskChange = (e: any) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleAddTask(taskName);
    setTaskName("");
  };

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Add task"
          inputProps={{ "aria-label": "description" }}
          value={taskName}
          onChange={handleTaskChange}
        />
        <Button
          style={{ marginLeft: "10px" }}
          type="submit"
          variant="contained"
          color="primary"
          size={"small"}
        >
          +
        </Button>
      </form>
    </>
  );
};

export default AddTask;
