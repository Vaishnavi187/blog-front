import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';



const BlogCard = ({title,description,image,username,time,id,isUser}) =>  {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
const navigate=useNavigate()
const handleEdit=()=>{
navigate(`/blog-detail/${id}`)
}
const handledelete=async()=>{
  try {
    const {data}=await axios.delete(`https://blog-r5sz.onrender.com/blog/delete/${id}`)
    if(data?.success){
      toast.success('Blog Deleted Successfully')
       navigate('/')
      // window.localStorage.reload();
    }
  } catch (error) {
    console.log(error);
 
  }
}
  return (
  
   <Box       sx={{
    display: 'flex',
    justifyContent: 'center', // Center the Card horizontally
    alignItems: 'center', // Center the Card vertically
     // Full viewport height for vertical centering
    padding: '16px',
  }}
>
     <Card sx={{
      width: isSmallScreen ? '100%' : '50%', // Full width on small screens, 50% on larger screens
      maxWidth: '400px', // Max width for large screens
      margin: '10px',
    }}>
      {isUser &&(
        <Box display={'flex'}>
          <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}>
            <EditIcon color='info'/>
          </IconButton>
          <IconButton onClick={handledelete}>
            <DeleteIcon color='warning'/>
          </IconButton>

        </Box>
      )}
      <CardHeader
      
        title={username}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
      
      />
      <CardContent>
      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Title:{title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Description: {description}
        </Typography>
      </CardContent>
     
    </Card>
   </Box>
  
  );
}
export default BlogCard;
