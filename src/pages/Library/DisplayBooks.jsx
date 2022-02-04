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

const DisplayBooks = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'bookTitle', headerName: 'Title', width: 280 },
        { field: 'bookType', headerName: 'Book Type', width: 160 },
        { field: 'quantity', headerName: 'Quantity Avilabale', width: 130 },
        { field: 'author', headerName: 'Author', width: 130 },
        { field: 'grade', headerName: 'Grade', width: 130 },
        { field: 'edit', headerName: '', width: 130 },
    ];

    const rows = [
        { id: 1, bookTitle: 'General Awareness', bookType: 'Comedy', quantity: 35,author: 'XYZZ', grade: 'A', edit: 'hi' },
        { id: 2, bookTitle: 'Suchitra Varnamaala', bookType: 'Poetry', quantity: 5,author: 'XYZZ', grade: 'B' },
        { id: 3, bookTitle: 'Work Book', bookType: 'Horror', quantity: 3,author: 'ABC', grade: 'D' },
        { id: 4, bookTitle: 'Snow Fall', bookType: 'Comedy', quantity: 85,author: 'XYZZ', grade: 'A' },
        { id: 5, bookTitle: 'Numeric Skills', bookType: 'Poetry', quantity: 100,author: 'ABC', grade: 'C' },
        { id: 6, bookTitle: 'Snow Fall', bookType: 'Poetry', quantity: 6,author: 'XYZZ', grade: 'G' },
        { id: 7, bookTitle: 'Chitra Varnamaala', bookType: 'Comedy', quantity: 81,author: 'ABC', grade: 'A' },
        { id: 8, bookTitle: 'Chitra Maala', bookType: 'Comedy', quantity: 63,author: 'HJKL', grade: 'A' },
        { id: 9, bookTitle: 'General Science', bookType: 'Horror', quantity: 45,author: 'XYZZ', grade: 'A' },
        { id: 10, bookTitle: 'Social', bookType: 'Poetry', quantity: 9,author: 'HJKL', grade: 'C' },

       
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
                        <h3 className="title">List Items</h3>
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

export default DisplayBooks
