import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {Card,CardHeader, TextField, Button, Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getHospitalList } from '../../redux/hospital/HospitalReducer';
import HospitalListPage from '../../compenent/HospitalListPage';

const HospitalsPage = () => {
  const { hospitals } = useSelector((store) => store.hospital);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHospitalList());
  },[hospitals])
  return (
    <div >
      <Card id="hospitalDiv">
        <div className='avatarDiv'>
<Avatar></Avatar>
        </div>  
        <div className='cardDiv'><h5>Hastane Numarası</h5></div>
        <div className='cardDiv-r'><h5>Hastane Adı</h5></div>
       <div ><Button id='buttonDiv' ></Button></div>
        <div ><Button id='buttonDiv' ></Button></div>
        
      </Card>
      {hospitals.map((hospital, index) => {
      return <HospitalListPage key={index} hospital={hospital}/>
     })}
    </div>
  )
}

export default HospitalsPage
