import React from 'react'
import { Card, CardHeader, TextField, Button, Avatar } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { workerDelete } from '../redux/worker/WorkerReducer';
import { useDispatch, useSelector } from 'react-redux'

const WorkerListPage = ({ worker }) => {
    const { id, name, lastName, identificationNumber, hospital } = worker;
    const dispatch = useDispatch();
    const deleteClick = () => {
       console.log("çalıştı")
       dispatch(workerDelete(id));
   }
  return (
    <div>
      <Card id="hospitalDiv">
        <div className='avatarDiv'>
<Avatar></Avatar>
        </div>  
              <div className='cardDiv'><h5>{identificationNumber}</h5></div>
              <div className='cardDiv'><h5>{name}</h5></div>
              <div className='cardDiv-r'><h5>{lastName}</h5></div>
              <div className='cardDiv-r'><h5>{hospital.id}</h5></div>
      
        <div ><Button onClick={deleteClick} variant='contained' id='buttonDiv' >Sil</Button></div>
        
      </Card>
    </div>
  )
}

export default WorkerListPage
