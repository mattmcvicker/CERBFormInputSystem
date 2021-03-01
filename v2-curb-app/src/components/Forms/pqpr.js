import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
        },
    },
}));


export default function PQPR(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        yes: false,
        no: false
    });
    const handleChange = (event) => {
        console.log(event.target.name)
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div>
            <h1>Planning Quarterly Progress Report</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="CERB Contractor Name" variant="outlined" />
                <TextField id="outlined-basic" label="Contractor Number" variant="outlined" />
                <TextField id="outlined-basic" label="Contract Contract" variant="outlined" />
                <TextField id="outlined-basic" label="Report Submittal Date" variant="outlined" />
                <TextField id="outlined-basic" label="Project Title" variant="outlined" />
                <TextField id="outlined-basic" label="Contract End Date" variant="outlined" />
                <TextField id="outlined-basic" label="Planning Project Estimated Completion Date" variant="outlined" />
                <h3>Quarter that is being reported:</h3>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checked1" />}
                        label="Jan 1 - Mar 31"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checked2" />}
                        label="Apr 1 - Jun 30"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checked3" />}
                        label="Jul 1 - Sep 30"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checked4" />}
                        label="Oct 1 - Dec 31"
                    />
                </FormGroup>
                <h3>1. Review the contract scope of work and describe the progress made to date. Include a percentage of completion for each item in the scope of work.</h3>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                />
                <h3>2. Describe any significant problem(s) or unforeseen costs that have or will affect the project’s timeline or successful completion of the project, (i.e. any delays or changes to the project as described in the contract scope of work).</h3>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                />
                <h3>3. Are any contract amendments needed? If yes, please explain below.</h3>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="yes" />}
                        label="Yes"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="no" />}
                        label="No"
                    />
                </FormGroup>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                />
                <h3>4. Please provide copies of any press releases or news articles related to the project that were released or published during this reporting period.</h3>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                />
            </form>
        </div>
    );
}

