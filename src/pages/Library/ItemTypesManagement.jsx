import React, {useState} from 'react'
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import MuiCard from "@mui/material/Card";
import "../../styles/login.css";
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
import TextInput from "../../components/form/TextInput";
import { Link } from "react-router-dom";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';




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






const ItemTypesManagement = () => {

  const [itemType, setItemType] = useState({firstName: '', itemTypeCode: '', description: '', rentalFee: '', processFee: '', fineFee: '' })

  const [alertShow, setAlertShow] =  useState(false) // for Alert visible or hide
  const [alertType, setAlertType] = useState('') // error, success
  const [alertMessage, setAlertMessage] = useState('') // Alert Message
   
  //  const [firstName, setFirstName] = useState('')
  //  const [itemTypeCode, setItemTypeCode] = useState('')
  //  const [description, setDescription] = useState('')
  //  const [rentalFee, setRentalFee] = useState('')
  //  const [processFee, setProcessFee] = useState('')
  //  const [fineFee, setFineFee] = useState('')

  /**
   * Item types form
   */

   const handleItemTypesForm = (e) =>{
  
    setItemType({...itemType, [e.target.name]: e.target.value})
  }

  /***
   * Add Item types
  */
   const addItemType = () =>{
    
    console.log('addItems', itemType)
    const itemData = {
      "itemTypeCode": itemType.itemTypeCode,
      "name": itemType.firstName,
      "parentItemTypeId": 0,
      "description": itemType.description,
      "searchKeywords": "string",
      "rentalFee": parseInt(itemType.rentalFee),
      "rentalCode": "rental1",
      "defaultReplaceCost": 0,
      "processFee": parseInt(itemType.processFee),
      "maximumFineFee": parseInt(itemType.fineFee),
      "notForLoan": true,
      "imageurl": "string",
      "checkinMsg": "string",
      "isSearchable": true,
      "isactive": true
    }

    

    axios({
      method: 'POST',
      url: `http://gurukulapi-dev.azurewebsites.net/api/v1/ItemType`,
      data: itemData,
      
    })
    .then((response) => {
      console.log(response);
      if(response.isSuccess)
      {
        setAlertShow(true)
        setAlertType('success') //success, error
        setAlertMessage('Iten Type Created Sucssfully') 
    
        setTimeout(()=>{
          setAlertShow(false)
        }, 2000)
      }
    }, (error) => {
      console.log(error);
      setAlertShow(true)
        setAlertType('error') //success, error
        setAlertMessage('Item Type Code Already Exists') 
    
        setTimeout(()=>{
          setAlertShow(false)
        }, 3000)
    });
  }

    return (
        <div >
           {alertShow &&
              <Alert severity={alertType} variant="filled" >
              
              {alertMessage}
              </Alert>
          }
      <Card sx={{ minWidth: true }} className="login-grid">
        <CardContent>
          <div className="card-header">
            {/* <img src={Logo} alt="Gurukul" title="Gurukul" /> */}
            <h3 className="title">Add Item Types</h3>
          </div>
          <div className="card-body">
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextInput
                   value = {itemType.firstName}
                    label="Name"
                    placeholder="Enter Name"
                    name='firstName'
                    onChange={(e)=>handleItemTypesForm(e)}
                   
                    //onChange = {(e)=>setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput
                    value={itemType.itemTypeCode}
                    label="Item Type Code"
                    placeholder="Enter Item Type Code"
                    name='itemTypeCode'
                    onChange={(e)=>handleItemTypesForm(e)}
                   // onChange = {(e)=>setItemTypeCode(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextInput
                    value={itemType.description}
                    label="Description"
                    placeholder="Enter Description"
                    name='description'
                    onChange={(e)=>handleItemTypesForm(e)}
                   // onChange = {(e)=>setDescription(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextInput
                    value={itemType.rentalFee}
                    label="Rental Fee"
                    placeholder="Enter Rental Fee"
                    name='rentalFee'
                    onChange={(e)=>handleItemTypesForm(e)}
                   // onChange = {(e)=>setRentalFee(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextInput
                      type= {itemType.processFee}
                      label="Process Fee"
                      placeholder="Enter Process Fee"
                      name='processFee'
                      onChange={(e)=>handleItemTypesForm(e)}
                     // onChange = {(e)=>setProcessFee(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextInput
                      value={itemType.fineFee}
                      label="Fine Fee"
                      placeholder="Fine Fee"
                      name='fineFee'
                      onChange={(e)=>handleItemTypesForm(e)}
                    //  onChange = {(e)=>setFineFee(e.target.value)}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Button variant="contained" className="login-btn" onClick = {addItemType}>
                ADD ITEM TYPE
              </Button>
            </FormGroup>
          </div>
        </CardContent>
        
      </Card>
      
    </div>
    )
}

export default ItemTypesManagement
