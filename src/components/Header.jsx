import React, { useState } from 'react'
import {Box,AppBar,Toolbar,Button, Typography, Tabs, Tab} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { authActions } from '../redux/store'
import  toast, { Toaster } from 'react-hot-toast';

const Header = () => {
let isLogin=useSelector(state=>state.isLogin)
isLogin=isLogin || localStorage.getItem("userId")
const dispatch=useDispatch();
const navigate=useNavigate()
    const [value,setvalue]=useState()

    
    const handlelogout=async()=>{
      try {
        dispatch(authActions.logout())
        toast.success('Logout successfully')
        navigate('/login')
        localStorage.clear()
      } catch (error) {
        
      }
    }
  return (
    <>
    <AppBar position='static'  style={{ backgroundColor: 'black' }}>
        <Toolbar>
           <Typography sx={{fontSize:13}}  >
           <Button sx={{color:'white'}} LinkComponent={Link} to='/blogs'>Social</Button>
            </Typography> 
           {isLogin && (
             <Box display={'flex'} marginLeft='auto' marginRight='auto' >
     
              <Button sx={{margin:1,color:'white',fontSize:12}} LinkComponent={Link} to='/blogs'>Blogs</Button>
              <Button sx={{margin:1,color:'white',fontSize:12}} LinkComponent={Link} to='/my-blogs'>My Blogs</Button>
  
              <Button sx={{margin:1,color:'white',fontSize:12}} LinkComponent={Link} to='/create-blog'>Create Blog</Button>
  
              </Box>
           )  
           }
            <Box display={'flex'} marginLeft="auto" >

                  {
                    !isLogin && <>
              <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to='/login'>Login</Button>
              <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to='/register'>Register</Button>
                    </>
                  }
                {isLogin && (
                    <Button onClick={handlelogout} sx={{margin:1,color:'white',fontSize:13}}>Logout</Button>
                )}

            </Box>
        </Toolbar>

    </AppBar>
      
    </>
  )
}

export default Header
