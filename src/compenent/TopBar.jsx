import React, { useEffect, useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, TextField, Button, Avatar } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/auth/AuthReducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TopBar = () => {
  const  role  = localStorage.getItem('role');
  const dispatch = useDispatch();
  const logoutClick=async() => {
   await dispatch(logoutUser());
    window.location.reload();
    
  }
  useEffect(() => {
    console.log(role);
  })
  
 
  return (
   
    <div className='top-bar'>
      {role == 'ROLE_ADMIN' ?
 <AppBar >
        <Toolbar className='toolbar'>
          <Link to={"/admin-hospitals"}>Hastaneler</Link>
            <Link to={"/admin-workers"} >Laborantlar</Link>
            <Link to={"/add-hospital"} >Hastane Ekle</Link>
            <Link to={"/patient-register"}>Hasta Ekle</Link>
          <Link to={"/add-workers"}>Çalışan Ekle</Link>
          <Link onClick={logoutClick}>Çıkış Yap</Link>
        </Toolbar>
      </AppBar> :
       role=='ROLE_WORKER' ? 
       <AppBar >
        <Toolbar className='toolbar'>
          <Link >Hastalar</Link>
          <Link>Raporlar</Link>
          <Link onClick={logoutClick}>Çıkış Yap</Link>
        </Toolbar>
      </AppBar>
    : role=="ROLE_PATIENT" ?  <AppBar >
        <Toolbar className='toolbar'>
          <Link>Raporlar</Link>
              <Link></Link>
              <Link></Link>
              <Link></Link>
          <Link onClick={logoutClick}>Çıkış Yap</Link>
        </Toolbar>
      </AppBar>  
    : <></>
    }
     
    </div>
  )
}

export default TopBar
