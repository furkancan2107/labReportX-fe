import React from 'react'
import { Card, CardHeader, TextField, Button, Avatar } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reportdelete } from '../redux/report/ReportReducer'

const ReportListPage = ({ report }) => {
    const { id, dateTime, title, details, patient, worker } = report;
    const role = localStorage.getItem('role');
    const dispatch = useDispatch();
    const generateReportContent = () => {
        const reportHTML =`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Rapor</title>
            <style>
                /* CSS stilleri buraya */
                .details-div {
                    width: 100%;
                    height: 200px;
                    overflow: auto;
                }

                .details-textarea {
                    width: 100%;
                    height: 100%;
                    border: none;
                    resize: none;
                    font-family: inherit;
                    font-size: inherit;
                    padding: 0.5rem; /* İstenilen boşluk değeri */
                }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <div class="details-div">
                <textarea class="details-textarea" readonly>${details}</textarea>
            </div>
            <p>Tarih: ${dateTime}</p>
            <p>Hasta: ${patient.name} ${patient.lastName}</p>
            <p>Çalışan: ${worker.name} ${worker.lastName}</p>
        </body>
        </html>
    `;
    return reportHTML;
    };

    const downloadReport = () => {
        const reportContent = generateReportContent();
        const fileName = `report_${id}.html`;
        const fileType = 'text/html';
        const blob = new Blob([reportContent], { type: fileType });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
    };
    const deleteClick=() => {
        dispatch(reportdelete(id));
    }

    return (
        <div>
            <Card id="hospitalDiv">
                <div className='avatarDiv'>
                    <Avatar></Avatar>
                </div>
                <div className='cardDiv'><h5>{patient.name + " " + patient.lastName}</h5></div>
                <div className='cardDiv-r'><h5>{title}</h5></div>
                <div className='cardDiv-r'><h5>{dateTime}</h5></div>
                <div><Button id='buttonDiv'></Button></div>
                <div><Button variant='contained' id='buttonDiv' onClick={downloadReport}>Raporu İndir</Button></div>
                {
                    role =='ROLE_WORKER' ?
                 <div><Button variant='contained' id='buttonDiv' onClick={deleteClick}>Raporu Sil</Button></div>   
               :<></>
                } 
            </Card>
        </div>
    )
}

export default ReportListPage