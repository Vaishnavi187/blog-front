
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom' 
import toast from 'react-hot-toast';

const Register = () => {
  const navigate=useNavigate()
  const [inputs, setInputs] = useState({
    username: '',
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
      const { data } = await axios.post('https://blog-r5sz.onrender.com/api/user/register', {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      });

      setInputs({
        username: '',
        email: '',
        password: '',
      })
      if (data.success) {
        toast.success('User Registered Successfully..');
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error("Error in registering user..")
    }
  };

  return (
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
          <h2 style={{  color: 'Black' }}>Register</h2>
        </Typography>

        {/* Changed name to username here */}
        <TextField
          label="Username"
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
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
          Register
        </Button>

        <Button onClick={()=>navigate('/login')} sx={{borderRadius: 3,marginTop:3}} type='submit' color='primary'>Already Registered? Please Login</Button>
      </Box>
    </form>
  );
};

export default Register;