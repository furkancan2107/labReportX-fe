import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {Card,CardHeader, TextField, Button, Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { reportlistforpatient, reportlistforworker } from '../../redux/report/ReportReducer'
import ReportListPage from '../../compenent/ReportListPage'
const ReportsForPatientsPage = () => {
  const { reports } = useSelector((store) => store.report)
  const dispatch = useDispatch();
  const patientId = localStorage.getItem('userId');
  useEffect(() => {
    dispatch(reportlistforpatient(patientId))
  },[reports])
  return (
    <div>
      {reports.map((report, index) => {
        return <ReportListPage key={index} report={report}/>
      })}
    </div>
  )
}

export default ReportsForPatientsPage
