import * as React from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";

export default function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log("Clicked")}
      >
        Material Button
      </Button>
    </div>
  );
}
