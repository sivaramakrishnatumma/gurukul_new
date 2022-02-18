import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import MuiCard from "@mui/material/Card";
import "../../styles/login.css";
import { Button, CardContent, FormControl, FormGroup } from "@mui/material";
import TextInput from "../../components/form/TextInput";

const Card = styled(MuiCard)(({ theme }) => ({
  marginTop: "3rem",
  "& .MuiCardContent-root": {
    padding: 0,
  },
  "& .MuiCardActions-root": {
    textAlign: "center",
    padding: "0.75rem 1.25rem",
    borderTop: "1px solid rgba(0, 0, 0, 0.125)",
  },
}));

const BiblioItem = () => {
  const [biblioItems, setBiblioItems] = useState({
    title: "",
    itemTypeCode: "",
    isbn: "",
    publisherYear: "",
    publisherCode: "",
    note: "",
  });

  /**
   * handleBiblioForm
   */

  const handleBiblioForm = (e) => {
    setBiblioItems({ ...biblioItems, [e.target.name]: e.target.value });
  };

  /***
   * Add Biblio Item
   */

  const addBiblioItem = () => {
  };

  return (
    <div>
      <Card sx={{ minWidth: true }} className="login-grid">
        <CardContent>
          <div className="card-header">
            <h3 className="title">Biblio Item</h3>
          </div>
          <div className="card-body">
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextInput
                    value={biblioItems.title}
                    label="Title"
                    name="title"
                    placeholder="Enter Title"
                    onChange={(e) => handleBiblioForm(e)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput
                    value={biblioItems.itemTypeCode}
                    label="Item Type Code"
                    name="itemTypeCode"
                    placeholder="Enter Item Type Code"
                    onChange={(e) => handleBiblioForm(e)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextInput
                    value={biblioItems.isbn}
                    label="ISBN No"
                    name="isbn"
                    placeholder="Enter ISBN No"
                    onChange={(e) => handleBiblioForm(e)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextInput
                    value={biblioItems.publisherYear}
                    label="Publication Year"
                    name="publisherYear"
                    placeholder="Publication Year"
                    onChange={(e) => handleBiblioForm(e)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextInput
                      value={biblioItems.publisherCode}
                      label="Publisher Code"
                      placeholder="Enter Publisher Code"
                      name="publisherCode"
                      onChange={(e) => handleBiblioForm(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextInput
                      value={biblioItems.note}
                      label="Note"
                      placeholder="Note"
                      name="note"
                      onChange={(e) => handleBiblioForm(e)}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                className="login-btn"
                onClick={addBiblioItem}
              >
                ADD Biblio Item
              </Button>
            </FormGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BiblioItem;
