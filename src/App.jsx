import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'
import UserBlog from './pages/UserBlog'
import Createblog from './pages/Createblog'
import Blogdetail from './pages/Blogdetail'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Header/>
      <Toaster/>
    <Routes>
  
    
      <Route path='/' element={<Blog/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/my-blogs' element={<UserBlog/>}/>
      <Route path='/blog-detail/:id' element={<Blogdetail/>}/>
      <Route path='/create-blog' element={<Createblog/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
    </Routes>
      
    </>
  )
}

export default App
