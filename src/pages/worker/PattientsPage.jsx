import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {Card,CardHeader, TextField, Button, Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientList } from '../../redux/patient/PatientReducer'
import PattientListPage from '../../compenent/PattientListPage'

const PattientsPage = () => {
  const { patients } = useSelector((store) => store.patient);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPatientList());
  }, []);

 

  return (
    <div>
      {patients.map((patient, index) => {
        return <PattientListPage key={index} patient={patient}></PattientListPage>
      })}
    </div>
  );
}
export default PattientsPage;