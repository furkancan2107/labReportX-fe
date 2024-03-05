import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { clearWorkerErrors, workerRegister } from '../../redux/worker/WorkerReducer'


const AddWorkerPage = () => {
  const role = localStorage.getItem('role');
  const {errors,message}=useSelector((store)=>store.worker)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [body, setBody] = useState({
  identificationNumber : null,name : null,lastName : null,password : null
  });
  const inputChange = (event) => {
    dispatch(clearWorkerErrors());
    const name = event.target.name;
    const value = event.target.value;
    setBody({ ...body, [name]: value });
  }
  const idChange = (event) => {
    dispatch(clearWorkerErrors());
    setId(event.target.value);
  }
  

  const registerClick = () => {
   
    dispatch(workerRegister({id,body}));
  }
 
  
  
  return (
    <div>
      <div className={message != null ? 'error-m' : 'e'} >{message}</div> 
      <div className={errors.password != null ? 'error-m' : 'e'} >{errors.password}</div> 
      <div className={errors.name != null ? 'error-m' : 'e'} >{errors.name}</div> 
      <div className={errors.identificationNumber != null ? 'error-m' : 'e'} >{errors.identificationNumber}</div> 
      <div className={errors.lastName != null ? 'error-m' : 'e'} >{errors.lastName}</div> 
      <form className='login-form'>

     
      
      <h1>Laborant Kayıt</h1>
      <div className='inputDiv'>
<TextField onChange={idChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: { backgroundColor : 'ButtonHighlight', color: 'white' } }}  type='number' size='medium' label="Hastane id Numarası" placeholder='Hastane numarınızı girin'></TextField>
              </div>
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
    </div>
  )
}

export default AddWorkerPage
