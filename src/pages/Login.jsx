import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom' 
import {useDispatch} from 'react-redux'
import {authActions} from '../redux/store'
import  toast from 'react-hot-toast';
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const { data } = await axios.post('https://blog-r5sz.onrender.com/api/user/login', {
      
        email: inputs.email,
        password: inputs.password,
      });
      setInputs({
        email: '',
    password: '',
      })

      if (data.success) {
        localStorage.setItem('userId',data?.user._id)
        dispatch(authActions.login())
        toast.success('User Logged-in Successfully..');
      }
      navigate('/')
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  return (
    <>
       <form onSubmit={handleSubmit}>
          <Box
            sx={{
              boxShadow: 20,
              maxWidth: 500,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: 400,
              mx: 'auto',
              mt: 10,
              p: 5,
            }}
          >
            <Typography variant="">
              <h2 style={{  color: 'Black' }}>Login</h2>
            </Typography>
    
            {/* Changed name to username here */}
            <TextField
              label="Email"
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
            />
            <Button variant="contained" sx={{ mt: 1, p: 1 }} type="submit">
             Login
            </Button>
    <Button onClick={()=>navigate('/register')} sx={{borderRadius: 3,marginTop:3}} type='submit' color='primary'>Already Registered? Please Register</Button>
          </Box>
        </form>
      
    </>
  )
}

export default Login
