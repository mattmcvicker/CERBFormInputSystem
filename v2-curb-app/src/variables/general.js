// Variables for current and completed projects.
// Need to be dynamic and from database
var currentProjects = [
  "SampleProject1",
  "SampleProject2",
  "SampleProject3",
  "SampleProject4"
];
var submittedProjects = [
  "SampleProject1",
  "SampleProject2",
  "SampleProject3",
  "SampleProject4"
];

module.exports = {
  // these 2 are used to create the projects in TasksCard - Dashboard view
  currentProjects,
  submittedProjects
};
