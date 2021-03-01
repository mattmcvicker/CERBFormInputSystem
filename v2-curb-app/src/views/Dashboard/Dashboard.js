import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import DoneOutline from "@material-ui/icons/DoneOutline";
import Create from "@material-ui/icons/Create";
import History from "@material-ui/icons/History";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";


import { currentProjects, submittedProjects } from "variables/general.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Current Projects:"
            headerColor="primary"
            tabs={[
              {
                tabName: "In Progress",
                tabIcon: Create,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={currentProjects}
                    isCompleted={false}
                  />
                )
              },
              {
                tabName: "Submitted",
                tabIcon: DoneOutline,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={submittedProjects}
                    isCompleted={false}
                  />
                )
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Completed Projects:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Project History",
                tabIcon: History,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={currentProjects}
                    isCompleted={true}
                  />
                )
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
