import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';



export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, validation, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);


    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmit}>

                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="maria@gmail.com"
                        value={values.email}
                        onChange={onChangeHandler}
                    />
                    {validation.email && <span className="validation">{validation.email}</span>}

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChangeHandler}
                    />
                     {validation.password && <span className="validation">{validation.password}</span>}
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link tp="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};