
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';


export const Register = () => {
    const { onRegisterSubmit } = useAuthContext();
   
    const { values, validation, onChangeHandler, onSubmit } = useForm({
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
                        placeholder="maria@gmail.com"
                        value={values.email}
                        onChange={onChangeHandler}
                       // pattern="/^[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-z]*$/"
                        required={true}
                    />
                    {validation.email && <span className="validation">{validation.email}</span>}
        
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChangeHandler}
                       // pattern="^(?=.*[0-9])(?=,*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$"
                        required={true}
                    />
                    {validation.password && <span className="validation">{validation.password}</span>}

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="repass"
                        value={values.repass}
                        onChange={onChangeHandler}
                        pattern={values.password}
                        required={true}
                    />
                    {validation.repass && <span className="validation">{validation.repass}</span>}
                    
                    <input className="btn submit" type="submit" value="Register" />
                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};