import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route} from 'react-router-dom'
import LoginPage from './auth/LoginPage'
import RegisterPatientPage from './pages/RegisterPatientPage'
import AdminPage from './pages/AdminPage'
import WorkerPage from './pages/WorkerPage'
import PatientPage from './pages/PatientPage'
import { useDispatch, useSelector } from 'react-redux'
import { validate } from './redux/auth/AuthReducer'
import { useNavigate,Link } from 'react-router-dom'
import TopBar from './compenent/TopBar'
import HospitalsPage from './pages/admin/HospitalsPage'
import WorkersPage from './pages/admin/WorkersPage'
import AddWorkerPage from './pages/admin/AddWorkerPage'
import RegisterHospitalPage from './pages/admin/RegisterHospitalPage'


function App() {
  const { role } = useSelector((store) => store.auth);
  const  lRole  = localStorage.getItem('role');
  const dispatch = useDispatch();
  const navigate = useNavigate();
useEffect(() => {
  console.log("çalıştı");
  const fetchData = async () => {
    try {
      await dispatch(validate());
      switch (role) {
        case 'ROLE_ADMIN':
          navigate("/admin-page");
          break;
        case 'ROLE_PATIENT':
          navigate("/patient-page");
          break;
        case 'ROLE_WORKER':
          navigate("/worker-page");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      console.error("Validation request failed:", error); 
      document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  fetchData();
}, []);
  return (
    <>
       {
lRole!=null ? <TopBar></TopBar> : <></>
        }
      <Routes>
       
       
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path='/patient-register' element={<RegisterPatientPage />}></Route>
        <Route path='/admin-hospitals' element={<HospitalsPage />}></Route>
        <Route path='/admin-workers' element={<WorkersPage />}></Route>
        <Route path='/add-workers' element={<AddWorkerPage />}></Route>
        <Route path='/add-hospital' element={<RegisterHospitalPage/>}></Route>
        <Route path='/admin-page' element={<AdminPage />}></Route>
        <Route path='/patient-page' element={<PatientPage />}></Route>
        <Route path='/worker-page' element={<WorkerPage/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
