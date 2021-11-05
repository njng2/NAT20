import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import container from '../components/container'
import { login } from '../actions/auth';
import background from '../media/images/dope333.webp';


const Login = ({ login, isAuthenticated }) => {
   /**  Information required to Login
    * @formData : State, object holding form email and password
    * @setFormData : State modifier function 
    */
   const [formData, setFormData] = useState({
       email: '',
       password: ''
   });

 

   //Setting email and password of formData
   const { email, password } = formData;

   //onChange function needed to change state from user input
   const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

   const onSubmit = e => {
       e.preventDefault();
       login(email, password)
   }


   //if user is authenticate, redirect them to the home page
    if(isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <>
          
        
            <div style={{ 
            backgroundImage: `url(${background})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '98.72vw',
            height: '100vh',
            marginTop: '-50px'       
            }}>

                <div className="container mt-5">
                    <h1>Sign In</h1>
                    <p>Sign into your account</p>

                    {/* Call onSubmit function to login on submit of form*/}
                    <form onSubmit={e => onSubmit(e)}>
                        {/* Email Form */}
                        <div className='form-group'>
                            <input
                            className='form-control'
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                            />
                            <label></label>
                        </div>
                        {/* Password Form */}
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required
                            />
                            <label></label>
                        </div>
                        <button className='btn btn-primary' type='submit'>Login</button>
                    </form>
                    <p className='mt-3'>
                        Don't have an account? <Link to='/signup'>Sign Up Here.</Link>
                    </p>
                    <p className='mt-3'>
                        Forgot your password? <Link to='/reset-password'>Reset Password Here.</Link>
                    </p>
                </div>
            </div> 
        </>
    )//background
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login } )(Login);
