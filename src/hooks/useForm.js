import { useState, useEffect } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues);
   const [validation, setValidation] = useState({ ...initialValues });
   // const [focused, setFocused] = useState(false);

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // if(!values.email){
        //     alert('Email is required!');
        // }else if(!new RegExp('/^[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-zA-z]*$/').test(values.email)){
        //     alert('Enter a valid email address');
        // } else if(!values.password){
        //     alert('Password is required');
        // }else if(values.password.length < 6 || values.password.length > 20){
        //     alert('Password should be 6-20 characters long');
        // }else if(values.password !== values.repass){
        //     alert('Passwords don\'t match');
        // }
        onSubmitHandler(values);

        setValues(initialValues);
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    const onValidationCheck = () => {
        let errors = validation;

        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (!new RegExp('/^[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-z]*$/').test(values.email)) {
            errors.email = 'Please enter a valid email address!';
        } else {
            errors.email = '';
        }

        if (!values.password) {
            errors.password = 'Password is required!';
        } else if (values.password.length < 6 || values.password.length > 20) {
            errors.password = 'Password should be 6-20 characters long!'
        } else {
            errors.password = '';
        }

        if(!values.repass){
            errors.repass = 'Confirm password is required!'
        }else if (values.password !== values.repass) {
            errors.repass = 'Passwords don\'t match!';
        } else {
            errors.repass = '';
        }
        setValidation(errors);
    };

    // const handleFocus = (e) => {
    //     setFocused(true);
    // };

    useEffect(() => {
        onValidationCheck();
        //  handleFocus();
    }, [values])


    return {
        values,
        validation,
        onChangeHandler,
        onSubmit,
        changeValues,
       
    };
};