import { Button, Container, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearReportError, reportCreate } from '../../redux/report/ReportReducer';

const CreateReport = () => {
  const patientId = localStorage.getItem('patientId');
  const workerId = localStorage.getItem('userId');
  const {errors}=useSelector((store)=>store.report)
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    name: null,
    details: null
  })
  const inputChange = (event) => {
    dispatch(clearReportError());
    const { name, value } = event.target;
    setBody({ ...body, [name]: value });
  }
  const  genareteReportClick=() => {
    dispatch(reportCreate({workerId,patientId,body}))
  }
  
  return (
    <div>
      <div className={errors.title != null ? 'error-m' : 'e'} >{errors.title}</div> 
      <div className={errors.details != null ? 'error-m' : 'e'} >{errors.details}</div>
      <form className='login-form'>
        <h1>Rapor Ekle</h1>
        
               <div className='inputDiv'>
<TextField  name='title' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
             InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}   size='medium' label="Başlık" placeholder='Başlık Giriniz'></TextField>
        </div>
        <div  className='inputDiv'>
<TextField name='details' onChange={inputChange} InputLabelProps={{ style: { backgroundColor : 'ButtonFace', color: 'white' } }}
            multiline
        rows={20} sx={{width : 250}} InputProps={{ style: {backgroundColor : 'ButtonHighlight',  color: 'white' } }}  size='medium' label="Açıklama" placeholder='Açıklama Giriniz'></TextField>
        </div>
        <div className='inputDiv'>
          <Button onClick={genareteReportClick}  style={{ backgroundColor: 'gray', color: 'white' }} variant='contained'>Oluştur</Button>
        </div>
         
      </form>
    </div>
  )
}

export default CreateReport
