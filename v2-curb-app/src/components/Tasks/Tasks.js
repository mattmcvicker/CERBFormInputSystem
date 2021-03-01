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
// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";
import PQPR from "../Forms/pqpr" //Planning quarterly reports form component
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
    width: "60%",
    height: "60%",
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

  const handleOpen = () => {
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


  const body = (
    <div style={modalStyle} className={ModalClasses.paper}>
      <PQPR></PQPR>
    </div>
  );
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
                    onClick={handleOpen}
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
            {body}
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
