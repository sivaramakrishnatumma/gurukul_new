import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import MuiCard from "@mui/material/Card";
import "../../styles/login.css";
import {
  Button,
  CardContent,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import TextInput from "../../components/form/TextInput";
import Alert from "@mui/material/Alert";
import { Breadcrumb } from "../../components/common/Breadcrumb";

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

const AddItems = () => {
  const [addItemData, setAddItemData] = useState({
    title: "",
    itemBarCode: "",
    itemType: "",
    grade: "",
    quantity: "",
    biblioItemId: "",
  });
  const [alertShow, setAlertShow] = useState(false); // for Alert visible or hide
  const [alertType, setAlertType] = useState(""); // error, success
  const [alertMessage, setAlertMessage] = useState(""); // Alert Message

  /**
   * Add Item Form
   *
   */

  const handleAddItemForm = (e) => {
    setAddItemData({ ...addItemData, [e.target.name]: e.target.value });
  };

  /**
   * Add Item
   */

  const addItem = () => {
    setAlertShow(true);
    setAlertType("success"); //success, error
    setAlertMessage("Created Scussfully");

    setTimeout(() => {
      setAlertShow(false);
    }, 2000);
  };

  return (
    <>
      <h1 className="mt-4">Library Management</h1>
      <Breadcrumb path={["Library Management", "Add Items"]} />
      <div>
        {alertShow && (
          <Alert severity={alertType} variant="filled">
            {alertMessage}
          </Alert>
        )}

        <Card sx={{ minWidth: true }} className="login-grid">
          <CardContent>
            <div className="card-header">
              {/* <img src={Logo} alt="Gurukul" title="Gurukul" /> */}
              <h3 className="title">Add Items</h3>
            </div>
            <div className="card-body">
              <FormGroup>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      value={addItemData.title}
                      label="Title"
                      placeholder="Enter Title"
                      name="title"
                      onChange={(e) => handleAddItemForm(e)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput
                      value={addItemData.itemBarCode}
                      label="Item Bar Code"
                      placeholder="Enter Bar Code"
                      name="itemBarCode"
                      onChange={(e) => handleAddItemForm(e)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="user-type">Item Type</InputLabel>
                      <Select
                        labelId="user-type"
                        id="user-type-select"
                        label="Select User Type"
                        value={addItemData.itemType}
                        name="itemType"
                        onChange={(e) => handleAddItemForm(e)}
                      >
                        <MenuItem value="comics">English Comics</MenuItem>
                        <MenuItem value="dvd">English DVD</MenuItem>
                        <MenuItem value="fictional">English Fictional</MenuItem>
                        <MenuItem value="story">English Story Books</MenuItem>
                        <MenuItem value="vcd">English VCD</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput
                      value={addItemData.grade}
                      label="Grade"
                      placeholder="Enter Grade"
                      name="grade"
                      onChange={(e) => handleAddItemForm(e)}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <TextInput
                        value={addItemData.quantity}
                        label="Quantity"
                        placeholder="Enter Quantity"
                        name="quantity"
                        onChange={(e) => handleAddItemForm(e)}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <TextInput
                        value={addItemData.biblioItemId}
                        label="Biblio Item Id"
                        placeholder="Enter Biblio Item Id"
                        name="biblioItemId"
                        onChange={(e) => handleAddItemForm(e)}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  className="login-btn"
                  onClick={addItem}
                >
                  ADD
                </Button>
              </FormGroup>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddItems;
