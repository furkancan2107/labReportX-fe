import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {Card,CardHeader, TextField, Button, Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getWorkerList } from '../../redux/worker/WorkerReducer'
import WorkerListPage from '../../compenent/WorkerListPage'

const WorkersPage = () => {
  const dispatch = useDispatch();
  const { workers } = useSelector((store) => store.worker);
  useEffect(() => {
    dispatch(getWorkerList());
  },[workers])
  return (
    <div>
      <Card id="hospitalDiv">
        <div className='avatarDiv'>
<Avatar></Avatar>
        </div>  
        <div className='cardDiv'><h5>Tc no</h5></div>
        <div className='cardDiv'><h5>İsim</h5></div>
        <div className='cardDiv-r'><h5>Soyisim</h5></div>
        <div className='cardDiv-r'><h5>Hastane id</h5></div>
       <div ><Button id='buttonDiv' ></Button></div>
        <div ><Button id='buttonDiv' ></Button></div>
        
      </Card>
      {
        workers.map((worker, index) => {
          return <WorkerListPage key={index} worker={worker}/>
        })
       }
    </div>
  )
}

export default WorkersPage
