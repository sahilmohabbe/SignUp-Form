import React from 'react';
import { withStyles, Typography, Button, TextField, Grid, FormControl, FormHelperText, Checkbox, Paper } from '@material-ui/core';
import Span from '@material-ui/core/Box'
import CircularLoader from '../../src/helper/loaders/CircularLoader'

const styles = (theme) => ({
    paper: { background: "#424242", padding: 16 },
    textField: { fontSize: 13,  padding: '10px 13px', border: "3px solid #64dd17", color: "#e0e0e0", borderRadius: 20, background: ' transparent', '&::placeholder': { color: '#fff', fontWeight: 500, }, "&:hover": { border: "3px solid #64dd17" } },
    activeButton: { backgroundColor: "#64dd17", fontSizeA: 13, color: "black", borderRadius: 50, padding: "7px 16px", "&:hover": { background: "#64dd17" } },
    inactiveButton: { padding: "7px 16px", color: "#fff", fontSizeA: 13, borderRadius: 50, },
    textFieldBorder: { borderRadius: 20, color: "#e0e0e0", "&:hover": { border: "none" } },
    ButtonGroup: { background: "#616161", padding: "11px 3px 15px 3px", borderRadius: 50, },
    Space: { marginTop: 16 },
    Lable: { fontSize: 13, color: "#e0e0e0", padding: "5px 0px" },
    Error: { padding: "0px 5px" },
    SubmitBtn: { backgroundColor: "#64dd17", marginBottom: 64, fontSizeA: 13, color: "black", borderRadius: 50, padding: "8px 32px", "&:hover": { background: "#64dd17" } },
    CheckboxOuter: { display: "flex", alignItems: 'center', justifyContent: 'center' },
    CondationTitle: { fontSize: 13, color: "#e0e0e0" },
    Link: { color: "#64dd17", textDecoration: "none" },
    SubmitOuter: { textAlign: 'center', marginTop: 16 },
    Align: { textAlign: 'center' },
    Title: { fontSize: 26, color: "#e0e0e0", textAlign: 'center' },

    [theme.breakpoints.only('xs')]: {
        paper: { padding: 16 },
    },
    [theme.breakpoints.only('sm')]: {
        paper: { padding: 16, },
    },
});

const SignUpFan = (props) => {
    const { classes, handleChange, errors, onSignUp, fields, signupBtnLoader, handleCheckboxChange, isTermsChecked ,inputRef, passwordInputRef } = props;

    return (
        <Grid container direction='row' justifyContent='center'>
            <Grid item xs={12} sm={10} md={6} lg={6}>
                <Paper elevation={0} className={classes.paper}>
                    <Grid container direction='row' justifyContent='center'>
                        <Grid item xs={12} sm={12} md={12} lg={12}>

                            <form className={classes.form} noValidate>
                                <Span>
                                    <Typography className={classes.Title}>Create Your Fan Account</Typography>
                                    <Span className={classes.Space} />
                                    <FormControl fullWidth>
                                        <label className={classes.Lable}>First name*</label>
                                        <TextField
                                            variant="outlined"
                                            placeholder='First name'
                                            name="first_name"
                                            value={fields['first_name'] || ''}
                                            onChange={event => {
                                                handleChange(
                                                    event.target.name,
                                                    event.target.value
                                                )
                                            }}

                                            size='small'
                                            InputProps={{ classes: { input: classes.textField, root: classes.textFieldBorder }, }}
                                            InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                        />
                                        {errors['first_name'] && <FormHelperText error>{errors['first_name']}</FormHelperText>}
                                    </FormControl>
                                    <Span className={classes.Space} />
                                    <FormControl fullWidth>
                                        <label className={classes.Lable}>Last name*</label>
                                        <TextField
                                            variant="outlined"
                                            placeholder='Last name'
                                            name="last_name"
                                            value={fields['last_name'] || ''}
                                            onChange={event => {
                                                handleChange(
                                                    event.target.name,
                                                    event.target.value
                                                )
                                            }}

                                            size='small'
                                            InputProps={{ classes: { input: classes.textField, root: classes.textFieldBorder }, }}
                                            InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                        />
                                        {errors['last_name'] && <FormHelperText error>{errors['last_name']}</FormHelperText>}
                                    </FormControl>
                                    <Span className={classes.Space} />
                                    <FormControl fullWidth>
                                        <label className={classes.Lable}>Username*</label>
                                        <TextField
                                            variant="outlined"
                                            placeholder='Username'
                                            name="username"
                                            value={fields['username'] || ''}
                                            onChange={event => {
                                                handleChange(
                                                    event.target.name,
                                                    event.target.value
                                                )
                                            }}
                                            size='small'
                                            InputProps={{ classes: { input: classes.textField, root: classes.textFieldBorder }, }}
                                            InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                        />
                                        {errors['username'] && <FormHelperText error>{errors['username']}</FormHelperText>}
                                    </FormControl>
                                    <Span className={classes.Space} />
                                    <FormControl fullWidth>
                                        <label className={classes.Lable}>Email*</label>
                                        <TextField
                                            variant="outlined"
                                            placeholder='email'
                                            inputRef={inputRef}
                                            name="email"
                                            value={fields['email'] || ''}
                                            onChange={event => {
                                                handleChange(
                                                    event.target.name,
                                                    event.target.value
                                                )
                                            }}
                                            size='small'
                                            InputProps={{ classes: { input: classes.textField, root: classes.textFieldBorder }, }}
                                            InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                        />
                                        {errors['email'] && <FormHelperText error>{errors['email']}</FormHelperText>}
                                    </FormControl>
                                    <Span className={classes.Space} />
                                    <FormControl fullWidth>
                                        <label className={classes.Lable}>Password*</label>
                                        <TextField
                                            variant="outlined"
                                            placeholder='Password'
                                            type="password"
                                            inputRef={passwordInputRef}
                                            name="password"
                                            value={fields['password'] || ''}
                                            onChange={event => {
                                                handleChange(
                                                    event.target.name,
                                                    event.target.value
                                                )
                                            }}
                                            size='small'
                                            InputProps={{ classes: { input: classes.textField, root: classes.textFieldBorder }, }}
                                            InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                        />
                                        {errors['password'] && <FormHelperText error>{errors['password']}</FormHelperText>}
                                    </FormControl>
                                    <Span className={classes.Space} />
                                    <Span className={classes.CheckboxOuter}>
                                        <Checkbox
                                            size='small'
                                            color='primary'
                                            checked={isTermsChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <Typography className={classes.CondationTitle}>I agree to the <a href='#/' className={classes.Link}>Terms and Conditions.</a></Typography>
                                    </Span>
                                    <Span className={classes.SubmitOuter}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            className={classes.SubmitBtn}
                                            onClick={(e) => onSignUp(e)}
                                            disabled={signupBtnLoader}
                                        >
                                            {signupBtnLoader && <CircularLoader />}
                                            Fan Sign Up
                                        </Button>
                                    </Span>
                                </Span>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(SignUpFan);