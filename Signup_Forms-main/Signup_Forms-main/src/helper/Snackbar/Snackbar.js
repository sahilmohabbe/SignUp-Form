import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    error: {
        backgroundColor: '#da4f49',
        color: '#fff',
        fontSize: 14,
        fontWeight: 500,
        borderLeft: '4px solid #fff',
    },
    success: {
        backgroundColor: '#388e3c',
        color: '#fff',
        fontSize: 14,
    },
});
// const AlertPopup = React.forwardRef(function Alert(props, ref){
//     return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
// });

const SnackbarComponent = (props) => {
    const { classes, open, message, variant, closeSnackBar } = props;
    const [Open, setOpen] = useState(open ? open : false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        closeSnackBar();
    };

    return (
        <div className={classes.root}>
            <Snackbar
                open={Open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                ContentProps={{
                    classes: {
                        root: classNames(classes[variant])
                    },
                    'aria-describedby': 'message-id'
                }}
                message={<span id='message-id'>{message}</span>}
                action={[
                    <IconButton
                        key='close'
                        aria-label='Close'
                        color='inherit'
                        style={{ padding: "0px" }}
                        className={classes.close}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            >
            </Snackbar>
        </div>
    )
};

SnackbarComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SnackbarComponent);