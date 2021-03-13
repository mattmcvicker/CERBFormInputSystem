import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import DoneOutline from "@material-ui/icons/DoneOutline";
import Create from "@material-ui/icons/Create";
import History from "@material-ui/icons/History";
// core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Tasks from "../components/Tasks/Tasks";
import CustomTabs from "../components/CustomTabs/CustomTabs";


import { currentProjects, submittedProjects } from "../variables/general";

import styles from "../styles/dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [submittedReports, setSubmittedReports] = React.useState(submittedProjects);
  const submittedReportsFun = () => {
    if (submittedReports.length == 0) {
      return (
        <div>
          <h3>No submitted reports have been approved.</h3>
          <Tasks
            checkedIndexes={[]}
            tasksIndexes={[]}
            tasks={submittedProjects}
            isCompleted={false}
          />
        </div>
      );
    }
    return (
      <Tasks
        checkedIndexes={[0]}
        tasksIndexes={[0, 1]}
        tasks={submittedProjects}
        isCompleted={false}
      />);
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
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
                    tasksIndexes={[0, 1]}
                    tasks={currentProjects}
                    isCompleted={false}
                  />
                )
              },
              {
                tabName: "Approved",
                tabIcon: DoneOutline,
                tabContent: submittedReportsFun()
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Completed Projects:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Project History",
                tabIcon: History,
                tabContent: (<h3>You have no completed projects.</h3>)
                // (
                //   <Tasks
                //     checkedIndexes={[0, 3]}
                //     tasksIndexes={[0, 1, 2, 3]}
                //     tasks={currentProjects}
                //     isCompleted={true}
                //   />
                // )
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
