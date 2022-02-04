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

const BiblioItem = () => {
  // const [title, setTitle] = useState('')
  // const [itemTypeCode, setItemTypeCode] = useState('')
  // const [isbn, setIsbn] = useState('')
  // const [publisherYear, setPublisherYear] = useState('')
  // const [publisherCode, setPublisherCode] = useState('')
  // const [note, setNote] = useState('')

  const [biblioItems, setBiblioItems] = useState({title: '', itemTypeCode: '', isbn: '', publisherYear: '', publisherCode: '', note: ''})

  /**
   * handleBiblioForm
   */

  const handleBiblioForm = (e) =>{
  
    setBiblioItems({...biblioItems, [e.target.name]: e.target.value})
  }


  /***
   * Add Biblio Item
   */

  const addBiblioItem = () =>{
    // console.log('title', title)
    // console.log('itemTypeCode', itemTypeCode)
    // console.log('isbn', isbn)
    // console.log('yesr', publisherYear)
    // console.log('code', publisherCode)
    // console.log('none', note)
    console.log('login', biblioItems)
  }

    return (
        <div >
      <Card sx={{ minWidth: true }} className="login-grid">
        <CardContent>
          <div className="card-header">
            {/* <img src={Logo} alt="Gurukul" title="Gurukul" /> */}
            <h3 className="title">Biblio Item</h3>
          </div>
          <div className="card-body">
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextInput
                    value = {biblioItems.title}
                    label="Title"
                    name = 'title'
                    placeholder="Enter Title"
                  //  onChange = {(e)=>setTitle(e.target.value)}
                  onChange={(e)=>handleBiblioForm(e)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput
                    value={biblioItems.itemTypeCode}
                    label="Item Type Code"
                    name = 'itemTypeCode'
                    placeholder="Enter Item Type Code"
                   // onChange = {(e)=>setItemTypeCode(e.target.value)}
                   onChange={(e)=>handleBiblioForm(e)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextInput
                    value={biblioItems.isbn}
                    label="ISBN No"
                    name='isbn'
                    placeholder="Enter ISBN No"
                  //  onChange = {(e)=>setIsbn(e.target.value)}
                  onChange={(e)=>handleBiblioForm(e)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextInput
                    value={biblioItems.publisherYear}
                    label="Publication Year"
                    name='publisherYear'
                    placeholder="Publication Year"
                   // onChange = {(e)=>setPublisherYear(e.target.value)}
                   onChange={(e)=>handleBiblioForm(e)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextInput
                      value={biblioItems.publisherCode}
                      label="Publisher Code"
                      placeholder="Enter Publisher Code"
                      name='publisherCode'
                     // onChange = {(e)=>setPublisherCode(e.target.value)}
                     onChange={(e)=>handleBiblioForm(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextInput
                     value={biblioItems.note}
                      label="Note"
                      placeholder="Note"
                      name='note'
                     // onChange = {(e)=>setNote(e.target.value)}
                     onChange={(e)=>handleBiblioForm(e)}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Button variant="contained" className="login-btn" onClick={addBiblioItem}>
                ADD Biblio Item
              </Button>
            </FormGroup>
          </div>
        </CardContent>
        
      </Card>
      
    </div>
    )
}

export default BiblioItem
