// Variables for current and completed projects.
// Need to be dynamic and from database
var currentProjects = [
  "SamplePlanningQuarterlyReport",
  "SampleConstructionQuarterlyReport"
];
var submittedProjects = [];

module.exports = {
  // these 2 are used to create the projects in TasksCard - Dashboard view
  currentProjects,
  submittedProjects
};
