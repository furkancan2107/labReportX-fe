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
// save
// get report
// worker sort report
// patient sort report
// search report
// report list for worker
// report list for patient
// delete report

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

