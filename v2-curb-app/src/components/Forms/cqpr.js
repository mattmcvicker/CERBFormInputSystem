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


export default function CQPR(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        yes: false,
        no: false
    });

    const getDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <h1>Planning Quarterly Progress Report</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField disabled id="outlined-basic" label="CERB Contractor Name" variant="outlined" value="Mark Jones" />
                <TextField disabled id="outlined-basic" label="Contractor Number" variant="outlined" value="314159" />
                <TextField disabled id="outlined-basic" label="Contract Contact" variant="outlined" value="(206)331-1234" />
                <TextField disabled id="outlined-basic" label="Report Submittal Date" variant="outlined" value={getDate()} />
                <TextField disabled id="outlined-basic" label="Project Title" variant="outlined" value="SampleProject" />
                <TextField disabled id="outlined-basic" label="Contract End Date" variant="outlined" value="12/30/2021" />
                <TextField id="outlined-basic" label="Planning Project Estimated Completion Date" variant="filled" />
                <h3>Quarter that is being reported:</h3>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="0" />}
                        label="Jan 1 - Mar 31"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="1" />}
                        label="Apr 1 - Jun 30"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="2" />}
                        label="Jul 1 - Sep 30"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="3" />}
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
                <h3>5. Provide notice of ground breakings, ribbon cutting ceremonies, etc.</h3>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                />
                <h3>6. Please estimate how much of your CERB award you plan to request during the upcoming quarters:</h3>
                <h3 style={{ fontStyle: "italic" }}>If the section below is not filled out (or updated), the quarterly report will be considered incomplete and returned for completion.</h3>
                <h5>Current Year (2021) - Do not include match dollars, only CERB funding</h5>
                <TextField id="outlined-basic" label="Q1 Jan 1-Mar 31" variant="outlined" />
                <TextField id="outlined-basic" label="Q2 April 1-June 30" variant="outlined" />
                <TextField id="outlined-basic" label="Q3 July 1-Sept 30" variant="outlined" />
                <TextField id="outlined-basic" label="Q4 Oct 1-Dec 31" variant="outlined" />
                <h5>Next Year (2022) - Do not include match dollars, only CERB funding</h5>
                <TextField id="outlined-basic" label="Q1 Jan 1-Mar 31" variant="outlined" />
                <TextField id="outlined-basic" label="Q2 April 1-June 30" variant="outlined" />
                <TextField id="outlined-basic" label="Q3 July 1-Sept 30" variant="outlined" />
                <TextField id="outlined-basic" label="Q4 Oct 1-Dec 31" variant="outlined" />
                <br></br>
            </form>
        </div>
    );
}

