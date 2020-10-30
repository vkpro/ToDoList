import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface TaskFilterProps {
  filterTask: (todoFilter: string) => void;
  children?: React.ReactNode;
}

// const aux = (props: AuxProps) => props.children;

const TaskFilter: React.FC<TaskFilterProps> = (props) => {
  const [value, setValue] = React.useState<number>(0);
  const filterTask = props.filterTask;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        filterTask("ALL");
        break;
      case 1:
        filterTask("ACTIVE");
        break;
      case 2:
        filterTask("DONE");
        break;
    }
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const { children } = props;
  return (
    <>
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

      <TabPanel value={value} index={0}>
        {children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {children}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {children}
      </TabPanel>
    </>
  );
};

export default TaskFilter;
