import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Createblog = () => {
    const id=localStorage.getItem('userId')
   const [inputs,setInputs]=useState({
    title:"",
    description:"",
    image:""
   })
const navigate=useNavigate()
   const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const { data } = await axios.post('https://blog-r5sz.onrender.com/blog/create', {
        title: inputs.title,
        description: inputs.description,
       image: inputs.image,
       user:id
      });
      setInputs({
        title:"",
        description:"",
        image:""
      })

      if (data.success) {
        toast.success('Blog Created  Successfully..');
        navigate('/my-blogs')
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error("Error in creating blog")
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
      <Box
        sx={{
          boxShadow: 20,
          maxWidth: 600,
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
          <h1 style={{ color: 'Black' }}>Create A blog</h1>
        </Typography>

       
        <TextField
          label="Title"
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          type="text"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Image URL"
        
          name="image"
          value={inputs.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          
        />
     <Button type='submit' color='primary' variant='contained'>SUBMIT</Button>
        </Box>

      </form>
    </>
  )
}

export default Createblog
