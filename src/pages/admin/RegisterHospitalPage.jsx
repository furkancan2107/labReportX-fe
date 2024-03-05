import React, { useEffect, useState } from 'react'
import { TextField, Button,Container,CardHeader,Avatar } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearNameError, registerHospital } from '../../redux/hospital/HospitalReducer'


const RegisterHospitalPage = () => {
  const dispatch = useDispatch();
  const {errors,status}=useSelector((store)=>store.hospital)
  const [selectedImage, setSelectedImage] = useState();
  const navigate = useNavigate();
  const [body, setBody] = useState({
    name :null,image : null
  })
  const inputChange = (event) => {
    dispatch(clearNameError())
    const name = event.target.name;
    const value = event.target.value;
    setBody({ ...body, [name]: value });
  }
   const handleChangeImage = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
      
    }
    fileReader.readAsDataURL(file);
    
  }
  const registerClick=() => {
    const bodies = {
      name: body.name,
      image : selectedImage
    }
    dispatch(registerHospital(bodies));
    
  }

  return (
    <div>
      <div className={errors.name != null ? 'error-m' : ''} >{errors.name}</div>
      <form className='login-form'>
        <h1>Hastane Ekle</h1>
        <div className='inputDiv'>
<TextField name='name' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            InputProps={{ style: { backgroundColor : 'ButtonHighlight', color: 'white' } }}   size='medium' label="Hastane ismi" placeholder='Hastane İsmini Girin...'></TextField>
        </div>
        
        
         <div className='inputDiv'>
                      <h3 style={{ paddingLeft : 95,textAlign : 'left'}}>resim</h3>
                      <input onChange={handleChangeImage} name='image' type='file'></input>
        </div>
        <div className='inputDiv'>
                     <></>
        </div>
        <div>
          {selectedImage !=null ? <CardHeader avatar={<Avatar src={selectedImage}></Avatar>}></CardHeader> : <></>}
        </div>
        <div className='inputDiv'>
          <Button onClick={registerClick} style={{ backgroundColor: 'gray', color: 'white' }} variant='contained'>Kaydet</Button>
        </div>
        
        
      </form>
       
    </div>
  )
}

export default RegisterHospitalPage
