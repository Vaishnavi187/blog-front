import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Box, Button, TextField, Typography } from '@mui/material';
import toast from 'react-hot-toast';
const Blogdetail = () => {
    const [Blog,setBlog]=useState({})
    const [inputs,setInputs]=useState({
   
     })
    const {id}=useParams()
    const navigate=useNavigate()
    const blogdetail=async()=>{
        try {
          const {data}=await axios.get(`https://blog-r5sz.onrender.com/blog/get/${id}`)  
          if(data?.success){
            setBlog(data?.singleblog)
            setInputs({
              title:data.singleblog.title,
              description:data?.singleblog?.description ,
              image:data?.singleblog?.image
            })
          }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load blog details');
        }
    }
    useEffect(()=>{
        blogdetail()
    },[id])
    // console.log(Blog);
 
     const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
  
      try {
        const { data } = await axios.put(`http://localhost:8000/blog/update/${id}`, {
          title: inputs.title,
          description: inputs.description,
         image: inputs.image,
         user:id
        });
  
        if (data.success) {
          toast.success('Blog Updated  Successfully..');
          navigate('/my-blogs')
        }
      } catch (error) {
        // console.log(error.response?.data || error.message);
        console.log(error);
        toast.error('Failed to update blog');
        
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
          <h1 style={{ color: 'Black' }}>Update A blog</h1>
        </Typography>

        <TextField
         
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
         
        />
        <TextField
         
          type="text"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
       
        />
        <TextField
         
        
          name="image"
          value={inputs.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          
          
        />
     <Button type='submit' color='warning' variant='contained'>UPDATE</Button>
        </Box>

      </form>
      
    </>
  )
}

export default Blogdetail
