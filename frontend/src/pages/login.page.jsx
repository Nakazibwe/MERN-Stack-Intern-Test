import React, { useState, useContext } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as Yup from 'yup';
import axios from 'axios';
import { AppContext } from '../contexts/app.context';
const Login = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<VisibilityOffIcon />);
  const navigate = useNavigate();
  const { token, setToken, setMessage, message } = useContext(AppContext);

  const showPasswordHandler = () => {
    if (type === 'password') {
      setType('text');
      setIcon(<VisibilityIcon />);
    } else {
      setType('password');
      setIcon(<VisibilityOffIcon />);
    }
  };
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  });
  const onSubmit = async (values, formik) => {
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const url = 'http://localhost:4000/api/users/auth/login';
      const response = await axios.post(url, values);
      if (response.status === 200) {
        setToken(response.data.token);
        navigate('/', { replace: true });
      }
      formik.setSubmitting(false);
    } catch (error) {
      setMessage(error.response.data);
    }
  };
  return (
    <>
      <section className='container forms'>
        <div className='form login'>
          <div className='form-content'>
            <header>Login</header>
            <span className='error top-error'>{message}</span>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form
                action='http://localhost:4000/api/users/auth/login'
                method='POST'
                encytpe='application/x-www-form-urlencoded'
              >
                <div className='field input-field'>
                  <Field
                    type='text'
                    placeholder='Enter your email'
                    className='input'
                    name='email'
                  />
                </div>
                <ErrorMessage name='email'>
                  {(msg) => <span className='error'>{msg}</span>}
                </ErrorMessage>
                <div className='field input-field'>
                  <Field
                    type={type}
                    placeholder='Enter your password'
                    className='password'
                    name='password'
                  />
                  <span className='eye-icon' onClick={showPasswordHandler}>
                    {icon}
                  </span>
                </div>
                <ErrorMessage name='password'>
                  {(msg) => <span className='error'>{msg}</span>}
                </ErrorMessage>
                <div className='field button-field'>
                  <button type='submit'>Login</button>
                </div>
              </Form>
            </Formik>

            {/* <div className='form-link'>
              <span>
                Don't have an account?{' '}
                <Link to='/' className='link signup-link'>
                  Register
                </Link>
              </span>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
