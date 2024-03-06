import axios from 'axios';

const url='api/v1/'

/*  auth controller */
// login
export const login = (body) => {
    const res = axios.post(url+"auth/login", body);
    return res;
}
// logout
export const logout = () => {
    const res = axios.delete(url + 'auth/logout');
    return res;
}
// verify
export const verifyUser = () => {
    var res = axios.get(url + 'auth/verify')
    return res;
}
/*----------------------------------------*/


/*  hospital controller */
// save 
export const hospitalSave = (body) => {
    const res = axios.post(url + 'hospital/save',body);
    return res;
}
// list
export const hospitalList = () => {
    const res = axios.get(url + 'hospital/list');
    return res;
}
// delete
export const deleteHospital = (id) => {
    const res = axios.delete(url + 'hospital/delete/'+id);
    return res;
}
/*--------------------------------------------------------------------------------------*/


/*  worker controller */
// save
export const workerSave = (hospitalId,body) => {
    const res = axios.post(url + 'worker/save/'+hospitalId,body);
    return res;
}
// list
export const workerList = () => {
    const res = axios.get(url + 'worker/list');
    return res;
}
// delete
export const deleteWorker = (id) => {
    const res = axios.delete(url + 'worker/delete/'+id);
    return res;
}
/*--------------------------------------------------------------------------------------*/


/*  report controller */
// update report
export const updateReport = (id,body) => {
    const res = axios.put(url + 'report/update/'+id,body);
    return res;
}
// save
export const saveReport = (workerId,patientId,body) => {
    const res = axios.post(url + 'report/save/'+workerId+"/"+patientId,body);
    return res;
}
// get report
export const getReport = (id) => {
    const res = axios.get(url + 'report/'+id);
    return res;
}
// worker sort report
export const workerSortReport = (id) => {
    const res = axios.get(url + 'report/sort/worker/'+id);
    return res;
}
// patient sort report
export const patientSortReport = (id) => {
    const res = axios.get(url + 'report/sort/patient/'+id);
    return res;
}
// search report
export const searchReport = (value) => {
    const res = axios.get(url + 'report/search/'+value);
    return res;
}
// report list for worker
export const reportListForWorker = (id) => {
    const res = axios.get(url + 'report/list/worker/'+id);
    return res;
}
// report list for patient
export const reportListForPatient = (id) => {
    const res = axios.get(url + 'report/list/patient/'+id);
    return res;
}
// delete report
export const deleteReport = (id) => {
    const res = axios.delete(url + 'report/delete/'+id);
    return res;
}

/*--------------------------------------------------------------------------------------*/

/*  patient controller */
// save
export const patientRegister = (body) => {
    const res = axios.post(url + 'patient/save',body);
    return res;
}
// list
export const patientList = () => {
    const res = axios.get(url + 'patient/list');
    return res;
}
export const deletePatient = (id) => {
    const res = axios.delete(url + 'patient/delete/'+id);
    return res;
}

