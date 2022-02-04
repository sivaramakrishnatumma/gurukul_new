import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import axios from 'axios';
import Logo from "../../assets/images/logo.jpg";
import {
    Button,
    CardActions,
    CardContent,
    FormControl,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";


const Card = styled(MuiCard)(({ theme }) => ({
    marginTop: "3rem",
    "& .MuiCardContent-root": {
      padding: 0,
    },
    "& .MuiCardActions-root": {
      textAlign: "center",
      padding: "0.75rem 1.25rem",
     // backgroundColor: "rgba(0, 0, 0, 0.03)",
      borderTop: "1px solid rgba(0, 0, 0, 0.125)",
    },
  }));

const CheckOutSummary = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 280 },
        { field: 'checkoutDate', headerName: 'CheckOut Date', width: 160 },
        { field: 'dueDate', headerName: 'Due Date', width: 130 },
        { field: 'barrower', headerName: 'Barrower', width: 130 },
        { field: 'isbn', headerName: 'ISBN', width: 130 },
        
    ];

    const rows = [
        { id: 1, title: 'General Awareness', checkoutDate: 'Comedy', dueDate: 35,barrower: 'XYZZ', isbn: 'A' },
        { id: 2, title: 'Suchitra Varnamaala', checkoutDate: 'Poetry', dueDate: 5,barrower: 'XYZZ', isbn: 'B' },
        { id: 3, title: 'Work Book', checkoutDate: 'Horror', dueDate: 3,barrower: 'ABC', isbn: 'D' },
        { id: 4, title: 'Snow Fall', checkoutDate: 'Comedy', dueDate: 85,barrower: 'XYZZ', isbn: 'A' },
        { id: 5, title: 'Numeric Skills', checkoutDate: 'Poetry', dueDate: 100,barrower: 'ABC', isbn: 'C' },
        { id: 6, title: 'Snow Fall', checkoutDate: 'Poetry', dueDate: 6,barrower: 'XYZZ', isbn: 'G' },
        { id: 7, title: 'Chitra Varnamaala', checkoutDate: 'Comedy', dueDate: 81,barrower: 'ABC', isbn: 'A' },
        { id: 8, title: 'Chitra Maala', checkoutDate: 'Comedy', dueDate: 63,barrower: 'HJKL', isbn: 'A' },
        { id: 9, title: 'General Science', checkoutDate: 'Horror', dueDate: 45,barrower: 'XYZZ', isbn: 'A' },
        { id: 10, title: 'Social', checkoutDate: 'Poetry', dueDate: 9,barrower: 'HJKL', isbn: 'C' },

       
      ];

       useEffect(() => {
            // Update the document title using the browser API

            axios({
                method: 'get',
                url: `https://gurukulapi-dev.azurewebsites.net/api/v1/ItemType`,
              
              })
              .then((response) => {
                console.log(response.data.result);
              }, (error) => {
                console.log(error);
              });
            
           
          })

    return (
       

        <div>
            <Card sx={{ minWidth: true }} className="login-grid">
                <CardContent>
                    <div className="card-header">
                        {/* <img src={Logo} alt="Gurukul" title="Gurukul" /> */}
                        <h3 className="title">Checked Out Items</h3>
                    </div>
                    <div className="card-body" style={{ height: 400, width: '100%', marginTop: 10 }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}

                        />
                    </div>
                </CardContent>

            </Card>
            
        </div>
    )
}

export default CheckOutSummary
