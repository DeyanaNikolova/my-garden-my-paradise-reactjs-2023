import { useState } from 'react';

export const useForm = (initialValues, onSubmitHander) => {

    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHander(values);
    };

    return {
        values,
        onChangeHandler,
        onSubmit
    };
};