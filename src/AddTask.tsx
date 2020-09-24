import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch"
      }
    }
  })
);

export default function BasicTextFields() {
  const classes = useStyles();

  const handleAddTask = () => {
    console.log("Added");
  };

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Add task" />
      </form>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleAddTask()}
        size={"small"}
      >
        Add task
      </Button>
    </div>
  );
}
