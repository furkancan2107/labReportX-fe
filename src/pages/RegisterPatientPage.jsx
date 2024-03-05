import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { clearErrors, savePatient } from '../redux/patient/PatientReducer'

const RegisterPatientPage = () => {
  const role = localStorage.getItem('role');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, errors } = useSelector((store) => store.patient);
  const [body, setBody] = useState({
  identificationNumber : null,name : null,lastName : null,password : null
  });
  const inputChange = (event) => {
    dispatch(clearErrors());
    const name = event.target.name;
    const value = event.target.value;
    setBody({ ...body, [name]: value });
  }
  const registerClick = () => {
    dispatch(savePatient(body));
    
  }
  useEffect(() => {
    console.log(status)
    if (status == 200) {
      alert("Kaydınız başarılı")
      role == "ROLE_ADMİN" ? navigate("admin-page") : navigate("/");
    }
  },[status,errors,dispatch])
  
  return (
    <div>
      <div className={errors.password != null ? 'error-m' : 'e'} >{errors.password}</div> 
      <div className={errors.name != null ? 'error-m' : 'e'} >{errors.name}</div> 
      <div className={errors.identificationNumber != null ? 'error-m' : 'e'} >{errors.identificationNumber}</div> 
      <div className={errors.lastName != null ? 'error-m' : 'e'} >{errors.lastName}</div> 
      {role== "ROLE_ADMIN" ? <form className='login-form'>
        <h1>Hasta Kayıt</h1>
        <div className='inputDiv'>
<TextField name='identificationNumber' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: { backgroundColor : 'ButtonHighlight', color: 'white' } }}  type='number' size='medium' label="Tc kimlik numarası" placeholder='Tc numarınızı girin'></TextField>
              </div>
               <div className='inputDiv'>
<TextField name='name' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}   size='medium' label="İsim" placeholder='İsminizi girin'></TextField>
              </div>
               <div className='inputDiv'>
<TextField name='lastName' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}   size='medium' label="Soyisim" placeholder='Soyisminizi girin'></TextField>
        </div>
        <div  className='inputDiv'>
<TextField name='password' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}  size='medium' label="Şifre" placeholder='Şifrenizi girin'></TextField>
        </div>
        <div className='inputDiv'>
          <Button onClick={registerClick} style={{ backgroundColor: 'gray', color: 'white' }} variant='contained'>Kaydol</Button>
        </div>
         
      </form>: <><form className='login-form'>
        <h1>Hasta Kayıt</h1>
        <div className='inputDiv'>
<TextField name='identificationNumber' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: { backgroundColor : 'ButtonHighlight', color: 'white' } }}  type='number' size='medium' label="Tc kimlik numarası" placeholder='Tc numarınızı girin'></TextField>
              </div>
               <div className='inputDiv'>
<TextField name='name' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}   size='medium' label="İsim" placeholder='İsminizi girin'></TextField>
              </div>
               <div className='inputDiv'>
<TextField name='lastName' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}   size='medium' label="Soyisim" placeholder='Soyisminizi girin'></TextField>
        </div>
        <div  className='inputDiv'>
<TextField name='password' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}  size='medium' label="Şifre" placeholder='Şifrenizi girin'></TextField>
        </div>
        <div className='inputDiv'>
          <Button onClick={registerClick} style={{ backgroundColor: 'gray', color: 'white' }} variant='contained'>Kaydet</Button>
        </div>    
      </form>
      
      <div style={{marginTop: 25}}>
        <Link className='register' to={"/"} >Hesabınız Var Mı ? Giriş Yap</Link>
     </div>
        </>
      }
      
         
       
       
        
    </div>
  )
}

export default RegisterPatientPage
