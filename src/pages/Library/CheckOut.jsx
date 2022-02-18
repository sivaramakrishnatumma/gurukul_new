import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import MuiCard from "@mui/material/Card";
import "../../styles/login.css";
import { Button, CardContent, FormControl, FormGroup } from "@mui/material";
import TextInput from "../../components/form/TextInput";
import { Breadcrumb } from "../../components/common/Breadcrumb";

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

const CheckOut = () => {
  const [checkOutItem, setCheckOutItem] = useState({
    itemTypeCode: "",
    quantity: "",
    sId: "",
    sName: "",
    date: "",
    dueDate: "",
  });

  /**
   * Item types form
   */

  const handleCheckOutForm = (e) => {
    setCheckOutItem({ ...checkOutItem, [e.target.name]: e.target.value });
  };

  /***
   * Add Item types
   */
  const addItemType = () => {
  };

  return (
    <>
      <h1 className="mt-4">Library Management</h1>
      <Breadcrumb path={["Library Management", "Check-out Process"]} />

      <div>
        <Card sx={{ minWidth: true }} className="login-grid">
          <CardContent>
            <div className="card-header">
              <h3 className="title">CheckOut Information</h3>
            </div>
            <div className="card-body">
              <FormGroup>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      value={checkOutItem.itemTypeCode}
                      label="Item Type Code"
                      placeholder="Enter Item Type Code"
                      name="itemTypeCode"
                      onChange={(e) => handleCheckOutForm(e)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput
                      value={checkOutItem.quantity}
                      label="Quantity"
                      placeholder="Quantity"
                      name="quantity"
                      onChange={(e) => handleCheckOutForm(e)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput
                      value={checkOutItem.sId}
                      label="Student Id"
                      placeholder="Enter Student Id"
                      name="sId"
                      onChange={(e) => handleCheckOutForm(e)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput
                      value={checkOutItem.sName}
                      label="Student Name"
                      placeholder=""
                      name="sName"
                      onChange={(e) => handleCheckOutForm(e)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <TextInput
                        type={checkOutItem.date}
                        label="Date"
                        placeholder="Enter Date"
                        name="date"
                        onChange={(e) => handleCheckOutForm(e)}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <TextInput
                        value={checkOutItem.dueDate}
                        label="Due Date"
                        placeholder="Enter Due Date"
                        name="dueDate"
                        onChange={(e) => handleCheckOutForm(e)}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  className="login-btn"
                  onClick={addItemType}
                >
                  CHECKOUT ITEM
                </Button>
              </FormGroup>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CheckOut;
