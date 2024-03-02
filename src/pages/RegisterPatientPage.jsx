import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'

const RegisterPatientPage = () => {
  return (
    <div>
       <form className='login-form'>
        <h1>Hasta Kayıt</h1>
        <div className='inputDiv'>
<TextField  InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: { backgroundColor : 'ButtonHighlight', color: 'white' } }}  type='number' size='medium' label="Tc kimlik numarası" placeholder='Tc numarınızı girin'></TextField>
              </div>
               <div className='inputDiv'>
<TextField InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}   size='medium' label="İsim" placeholder='İsminizi girin'></TextField>
              </div>
               <div className='inputDiv'>
<TextField InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}   size='medium' label="Soyisim" placeholder='Soyisminizi girin'></TextField>
        </div>
        <div className='inputDiv'>
<TextField InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}  size='medium' label="Şifre" placeholder='Şifrenizi girin'></TextField>
        </div>
        <div className='inputDiv'>
          <Button style={{ backgroundColor: 'gray', color: 'white' }} variant='contained'>Kaydol</Button>
        </div>
        
          </form>
          <div style={{marginTop: 25}}>
        <Link className='register' to={"/"} >Hesabınız Var Mı ? Giriş Yap</Link>
     </div>
    </div>
  )
}

export default RegisterPatientPage
