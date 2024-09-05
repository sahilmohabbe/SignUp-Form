
import TelentSignupComponent from '../Components/TelentSignup'
import React, { useState, useRef } from 'react';
import { Regex_Validator } from '../../src/helper/constants';
import { Talent_SigninAPI } from '../../src/helper/services/API/Users';
import Snackbar from '../../src/helper/Snackbar/Snackbar';

const TelentSignup = (props) => {
  const [state, setState] = useState({ fields: {}, errors: {} });
  const inputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [signupBtnLoader, setSignupBtnLoader] = useState(false);
  const [snackbarState, setSnackbarState] = useState({
    messageInfo: {
      open: false,
      message: null,
      variant: 'success',
    },
  });
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  const validatePassword = (value) => {
    let errorMsg = '';

    if (value.length < 8) {
      errorMsg = 'Your password must be at least 8 characters';
    }
    if (value.search(/[a-z]/i) < 0) {
      errorMsg = 'Your password must contain at least one letter.';
    }
    if (value.search(/[0-9]/) < 0) {
      errorMsg = 'Your password must contain at least one digit.';
    }

    return errorMsg;
  };

  const handleChange = (field, value) => {
    let isError = '';
    let fields = state.fields;
    let errors = state.errors;

    if (field === 'first_name' || field === 'last_name') {
      if (!Regex_Validator.String.test(value) && value !== '') {
        value = state.fields[field] ? state.fields[field] : '';
        isError = `Invalid ${field === 'first_name' ? 'first' : 'last'
          } name`;
      }
    }

    if (field === 'password') {
      isError = validatePassword(value);
    }

    if (field === 'email') {
      if (!Regex_Validator.Email.test(value) && value !== '') {
        isError = 'Invalid email address';
      }
    }

    if (field === 'username') {
      if (!Regex_Validator.Username.test(value) && value !== '') {
        isError = 'Invalid username';
      }
    }

    fields[field] = value;
    errors[field] = isError ? isError : '';
    setState({
      ...state,
      fields,
      errors,
    });
  };

  const handleValidation = () => {
    let fields = state.fields;
    let errors = {};
    let formIsValid = true;

    let errordata = [
      'first_name',
      'last_name',
      'username',
      'email',
      'password',
    ];

    errordata.forEach((val) => {
      if (!fields[val] || !fields[val].trim()) {
        formIsValid = false;
        errors[val] = 'This field is required';
      }
    });

    if ((Object.keys(fields).length === 0)) {
      inputRef.current.focus();
    } else if (errors["email"] !== "") {
      inputRef.current.focus();
    }
    else {
      passwordInputRef.current.focus();
    }
    if (!Object.values(errors).every(val => val === "" || val === null)) {
      formIsValid = false;
    }

    setState({
      ...state,
      errors: errors,
    });

    return formIsValid;
  };

  const onCloseSnackBar = () => {
    setSnackbarState({
      messageInfo: {
        open: false,
        message: null,
        variant: 'success',
      },
    });
  };

  const onSignUp = async (e) => {
    e.preventDefault();

    // Check if the "Terms and Conditions" checkbox is checked
    if (!isTermsChecked) {
      setSnackbarState({
        messageInfo: {
          open: true,
          message: 'Please check Terms and Conditions.',
          variant: 'error',
        },
      });
      return;
    }

    if (handleValidation()) {
      setSignupBtnLoader(true);
      let params = state.fields;

      try {
        const response = await Talent_SigninAPI(params);

        if (Array.isArray(response)) {

          setSnackbarState({
            messageInfo: {
              open: true,
              message: response.join("\n"), // Join multiple error messages with line breaks
              variant: 'error',
            },
          });
        } else if (response === "User successfully added") {
          // Handle success
          setSnackbarState({
            messageInfo: {
              open: true,
              message: 'User successfully added',
              variant: 'success',
            },
          });
          setState({
            fields: {
              first_name: '',
              last_name: '',
              username: '',
              email: '',
              password: '',
            },
            errors: {},
          });
        } else {
          // Handle other errors
          setSnackbarState({
            messageInfo: {
              open: true,
              message: response,
              variant: 'error',
            },
          });
        }
      } catch (error) {
        // Handle network or other errors
        setSnackbarState({
          messageInfo: {
            open: true,
            message: 'An error occurred: ' + error.message,
            variant: 'error',
          },
        });
      } finally {
        setSignupBtnLoader(false);
      }
    } else {
      setSnackbarState({
        messageInfo: {
          open: true,
          message: 'Please correct errors and try again.',
          variant: 'error',
        },
      });
      setSignupBtnLoader(false);
    }
  };

  return (
    <React.Fragment>
      <TelentSignupComponent
        handleChange={handleChange}
        errors={state.errors}
        onSignUp={onSignUp}
        fields={state.fields}
        signupBtnLoader={signupBtnLoader}
        handleCheckboxChange={handleCheckboxChange}
        isTermsChecked={isTermsChecked}
        inputRef={inputRef}
        passwordInputRef={passwordInputRef}
        {...props}
      />
      {snackbarState.messageInfo.open && (
        <Snackbar
          message={snackbarState.messageInfo.message}
          open={snackbarState.messageInfo.open}
          closeSnackBar={onCloseSnackBar}
          variant={snackbarState.messageInfo.variant}
          autoHideDuration={5000}
        />
      )}
    </React.Fragment>
  )
}

export default TelentSignup