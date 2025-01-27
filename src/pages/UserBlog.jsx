import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { Box, Typography } from '@mui/material'

const UserBlog = () => {
    const [blogs,setBlogs]=useState([])
    const getuserblog=async()=>{
        try {
            const id=localStorage.getItem('userId')
            const {data}=await axios.get(`https://blog-r5sz.onrender.com/blog/user-blog/${id}`)
            if(data?.success){
                setBlogs(data?.userBlog.blogs)
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getuserblog()
    },[])
  return (
    <>
       {blogs && blogs.length > 0 ? (
          blogs.map(blogg=>(
            <BlogCard
            id={blogg._id}
            isUser={true}
            title={blogg.title}
            description={blogg.description}
            image={blogg.image}
            username={blogg?.user?.username}
            time={blogg.createdAt }/>))):(   <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',  
                  alignItems: 'center',     
                  height: '100vh',           
                  textAlign: 'center',  
                  color:"purple"    
                }}
              >
                <Typography variant="h2">
                You haven't created any post yet ..
                </Typography>
              </Box>  )}
     
  
    </>
  )
}

export default UserBlog
