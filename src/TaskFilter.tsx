import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function TaskFilter() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="TaskFilter"
      centered={true}
    >
      <Tab label="All" />
      <Tab label="Active" />
      <Tab label="Done" />
    </Tabs>
  );
}
