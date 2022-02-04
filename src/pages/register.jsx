import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import AppFooter from "../components/layout/AppFooter";
import MuiCard from "@mui/material/Card";
import "../styles/login.css";
import Logo from "../assets/images/logo.jpg";
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
import TextInput from "../components/form/TextInput";
import { Link } from "react-router-dom";

const Card = styled(MuiCard)(({ theme }) => ({
  marginTop: "3rem",
  "& .MuiCardContent-root": {
    padding: 0,
  },
  "& .MuiCardActions-root": {
    textAlign: "center",
    padding: "0.75rem 1.25rem",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderTop: "1px solid rgba(0, 0, 0, 0.125)",
  },
}));

const Register = () => {
  return (
    <div className="container">
      <Card sx={{ minWidth: 275 }} className="login-grid">
        <CardContent>
          <div className="card-header">
            <img src={Logo} alt="Gurukul" title="Gurukul" />
            <h3 className="title">Create Account</h3>
          </div>
          <div className="card-body">
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextInput
                    id="firstName"
                    label="First Name"
                    placeholder="Enter first name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput
                    id="lastName"
                    label="Last Name"
                    placeholder="Enter last name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="user-type">Select User Type</InputLabel>
                    <Select
                      labelId="user-type"
                      id="user-type-select"
                      label="Select User Type"
                    >
                      <MenuItem value="vounteer">Volunteer</MenuItem>
                      <MenuItem value="teacher">Teacher</MenuItem>
                      <MenuItem value="student">Student</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput
                    id="email"
                    label="Email"
                    placeholder="Enter email address"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextInput
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="Enter Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextInput
                      id="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Button variant="contained" className="login-btn">
                CREATE ACCOUNT
              </Button>
            </FormGroup>
          </div>
        </CardContent>
        <CardActions>
          <div className="small">
            <Link to="/login" underline="hover">
              Have an account? Go to login
            </Link>
          </div>
        </CardActions>
      </Card>
      <AppFooter />
    </div>
  );
};

export default Register;
