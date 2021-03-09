import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Modal from "@material-ui/core/Modal"
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';

// core components
import styles from "../../styles/tasksStyle";
import PQPR from "../Forms/pqpr" //Planning quarterly reports form component
import CQPR from "../Forms/cqpr"

const useStyles = makeStyles(styles);
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ModalStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "80%",
    height: "80%",
    backgroundColor: "#eeeeee",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll"
  },
}));

export default function Tasks(props) {
  const classes = useStyles();
  const ModalClasses = ModalStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [checked, setChecked] = React.useState([...props.checkedIndexes]);
  const [open, setOpen] = React.useState(false);
  const [reportType, setReportType] = React.useState();
  const [submittedProjects, setSubmittedProjects] = React.useState(props.submittedProjects);
  console.log(props.tasks)
  const handleOpen = (value) => {
    console.log(value)
    setReportType(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const renderForm = () => {
    if (reportType == 0) {
      return(<PQPR></PQPR>)
    } else {
      return(<CQPR></CQPR>)
    }
  }

  const body = () => {
    return (
      <div style={modalStyle} className={ModalClasses.paper}>
        {renderForm()}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
          <Button onClick={() => {
            alert("Form Submitted!");
            handleClose();
          }
          } style={{ width: "75%" }} size='large' variant="contained">Submit for Approval</Button>
        </div>
      </div>
    )
  };
  const { tasksIndexes, tasks, rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive
  });

  return (
    <div>
      <Table className={classes.table}>
        <TableBody>
          {tasksIndexes.map(value => (
            <TableRow key={value} className={classes.tableRow}>
              <TableCell className={tableCellClasses}>

              </TableCell>
              <TableCell className={tableCellClasses}>{tasks[value]}</TableCell>
              <TableCell className={classes.tableActions}>
                <Tooltip
                  id="tooltip-top"
                  title="Edit/View Entry"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    onClick={() => {handleOpen(value)}}
                    aria-label="Edit"
                    className={classes.tableActionButton}
                  >
                    {props.isCompleted
                      ? <VisibilityIcon
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      />
                      : <Edit
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      />
                    }

                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {body()}
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

Tasks.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array
};
