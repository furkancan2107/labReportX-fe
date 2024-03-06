import React from 'react'
import { Card, CardHeader, TextField, Button, Avatar } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const PattientListPage = ({ patient }) => {
  const { id, name, lastName, identificationNumber } = patient;
  const navigate = useNavigate();
  const routeCreateReportClick = async () => { 
    localStorage.setItem('patientId', id);
    navigate('/create-report')
  }
  return (
    <div>
       <Card id="hospitalDiv">
        <div className='avatarDiv'>
<Avatar></Avatar>
        </div>
        
              <div className='cardDiv'><h5>{identificationNumber}</h5></div>
              <div className='cardDiv-r'><h5>{name}</h5></div>
              <div className='cardDiv-r'><h5>{lastName}</h5></div>
              <div ><Button id='buttonDiv' ></Button></div>
       <div ><Button onClick={routeCreateReportClick}  variant='contained' id='buttonDiv' >Rapor Oluştur</Button></div>
        
        
      </Card>
    </div>
  )
}

export default PattientListPage
