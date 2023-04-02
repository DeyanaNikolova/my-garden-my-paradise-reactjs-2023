import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';

export const Register = () => {
    const { onRegisterSubmit } = useAuthContext();
    const { values, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        repass: ''
    }, onRegisterSubmit);


    return (
        <section id="register-page" className="content auth">
            <form id="register" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={values.email}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="repass"
                        value={values.repass}
                        onChange={onChangeHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />
                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};