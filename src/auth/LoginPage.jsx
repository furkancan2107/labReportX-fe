import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { clearMessage, signIn } from '../redux/auth/AuthReducer'

export default function () {
  const [body, setBody] = useState({ identificationNumber: null, password: null })
  
  const dispatch = useDispatch();
  const { role,message } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const inputChange = (event) => {
    dispatch(clearMessage());
    const name = event.target.name;
    const value = event.target.value;
    setBody({ ...body, [name]: value })
    
  }
   const loginButton = async() => {
     await dispatch(signIn(body));
      
  }
  useEffect(() => {
    console.log(role);
    switch (role) {
        case 'ROLE_ADMIN': navigate("/admin-page"); break
        case 'ROLE_PATIENT': navigate("/patient-page"); break
        case 'ROLE_WORKER': navigate("/worker-page"); break
        default: navigate("/"); 
    }
   
  },[role])
  return (
    <div>
      <div className={message!=null ? 'error-m' : 'e'} >{message}</div>
      <form className='login-form'>
        <h1>Giriş Yap</h1>
        <div className='inputDiv'>
<TextField name='identificationNumber' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: { backgroundColor : 'ButtonHighlight', color: 'white' } }}  type='number' size='medium' label="Tc kimlik numarası" placeholder='Tc numarınızı girin'></TextField>
        </div>
        <div onChange={inputChange} className='inputDiv'>
<TextField name='password' InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}   size='medium' label="Şifre" placeholder='Şifrenizi girin'></TextField>
        </div>
        <div className='inputDiv'>
          <Button onClick={loginButton} style={{ backgroundColor: 'gray', color: 'white' }} variant='contained'>Giriş Yap</Button>
        </div>
        
      </form>
       <div style={{marginTop: 25}}>
        <Link className='register' to={"/patient-register"} >Hasta kaydı için tikla</Link>
     </div>
    </div>
  )
}
