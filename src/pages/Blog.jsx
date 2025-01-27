import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import toast from 'react-hot-toast'


const Blog = () => {
  const [blog,setblog]=useState([])
  const getallblog=async()=>{
    try {
      const {data}=await axios.get('https://blog-r5sz.onrender.com/blog/all')
      if(data?.success){
        setblog(data?.blogs)
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in getting all blog")
      
    }
  }
  useEffect(()=>{
    getallblog();
  },[])
  return (
    <> 
    {blog && blog.map(blogg=>(
      <BlogCard

      id={blogg?._id}
      isUser={localStorage.getItem('userId')===blogg?.user?._id}
      title={blogg?.title}
      description={blogg?.description}
      image={blogg?.image}
      username={blogg?.user?.username}
      time={blogg?.createdAt}
      />
    ))}
   
    </>
  )
}

export default Blog
