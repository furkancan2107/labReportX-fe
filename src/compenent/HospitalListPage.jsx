import React from 'react'
import { Card, CardHeader, TextField, Button, Avatar } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { hospitalDelete } from '../redux/hospital/HospitalReducer'
const HospitalListPage = ({ hospital }) => {
    const { id, name, image } = hospital;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const deleteClick=() => {
        dispatch(hospitalDelete(id));
    }
  return (
      <div>
           <Card id="hospitalDiv">
        <div className='avatarDiv'>
<Avatar src={image}></Avatar>
        </div>  
              <div className='cardDiv'><h5>{id}</h5></div>
              <div className='cardDiv'><h5>{name}</h5></div>
              <div ><Button  id='buttonDiv' ></Button></div>
        <div ><Button onClick={deleteClick}  id='buttonDiv' variant='contained'>Sil</Button></div>
        
        
      </Card>
      
    </div>
  )
}

export default HospitalListPage

