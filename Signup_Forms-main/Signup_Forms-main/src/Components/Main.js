
import React, { useState } from 'react';
import { withStyles, Paper, Button, Grid, } from '@material-ui/core';
import SignUpFan from '../../src/Containers/FanSignup';
import SignUpTalennt from '../../src/Containers/TalentSignup';
const styles = (theme) => ({
    textField: { fontSize: 13, padding: '10px 13px', border: "3px solid #64dd17", color: "#e0e0e0", borderRadius: 20, background: ' transparent', '&::placeholder': { color: '#fff', fontWeight: 500, }, "&:hover": { border: "3px solid #64dd17" } },
    paper: { background: "#424242", padding: 32, margin: 32 },
    activeButton: { backgroundColor: "#64dd17", fontSizeA: 13, color: "black", borderRadius: 50, padding: "7px 16px", "&:hover": { background: "#64dd17" } },
    inactiveButton: { padding: "7px 16px", color: "#fff", fontSizeA: 13, borderRadius: 50, },
    textFieldBorder: { borderRadius: 20, color: "#e0e0e0", "&:hover": { border: "none" } },
    ButtonGroup: { background: "#616161", padding: 3, borderRadius: 50, },
    Space: { marginTop: 16 },
    Lable: { fontSize: 13, color: "#e0e0e0", padding: "5px 0px" },
    Error: { padding: "0px 5px" },
    SubmitBtn: { backgroundColor: "#64dd17", fontSizeA: 13, color: "black", borderRadius: 50, padding: "8px 32px", "&:hover": { background: "#64dd17" } },
    CheckboxOuter: { display: "flex", alignItems: 'center', justifyContent: 'center' },
    CondationTitle: { fontSize: 13, color: "#e0e0e0" },
    Link: { color: "#64dd17", textDecoration: "none" },
    SubmitOuter: { textAlign: 'center', marginTop: 16 },
    Align: { textAlign: 'center' },
    Title: { fontSize: 26, color: "#e0e0e0", textAlign: 'center' },
    divStyle: { display: "block", justifyContent: 'center', backgroundColor: "black", alignItems: 'center', height: "100vh" },
    [theme.breakpoints.only('xs')]: {
        paper: { padding: 16, margin: 16 },
        divStyle: { height: "100%" }
    },
    [theme.breakpoints.only('sm')]: {
        paper: { padding: 16, margin: 16 },
    },
});


const SignUpBoth = (props) => {
    const { classes } = props;

    const [showFanSignup, setShowFanSignup] = useState(true);

    const handleSwitch = (value) => {
        setShowFanSignup(value);
    };

    return (

        <React.Fragment>
            <div className={classes.divStyle} >
                <Grid container direction='row' justifyContent='center'>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper className={classes.paper}>
                            <span style={{ display: "flex", justifyContent: 'center' }} >
                                <span className={classes.ButtonGroup}>
                                    <Button
                                        onClick={() => handleSwitch(true)}
                                        className={showFanSignup ? classes.activeButton : classes.inactiveButton}
                                    >
                                        FAN SIGNUP
                                    </Button>
                                    <Button
                                        onClick={() => handleSwitch(false)}
                                        className={!showFanSignup ? classes.activeButton : classes.inactiveButton}
                                    >
                                        TALENT SIGNUP
                                    </Button>
                                </span>
                            </span>
                            {showFanSignup ? (
                                <SignUpFan handleSwitch={handleSwitch} />
                            ) : (
                                <SignUpTalennt handleSwitch={handleSwitch} />
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>

    );
};

export default withStyles(styles)(SignUpBoth);
