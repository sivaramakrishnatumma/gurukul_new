import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import { CardActions, CardContent } from "@mui/material";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import AppFooter from "../components/layout/AppFooter";
import { SignInButton } from "../components/form/SignInButton";
import Logo from "../assets/images/logo.jpg";
import { loginRequest } from "../authConfig";
import { setAuthInfo } from "../redux/actions/common.actions";
import "../styles/login.css";

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

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();

  useEffect(() => {
    if (isAuthenticated) {
      try {
        instance
          .acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          })
          .then((response) => {
            console.log(response);
            dispatch(setAuthInfo());
            navigate("/app/dashboard");
          });
      } catch (error) {
        console.log(error);
      }
    }
  });

  const gotoRegistration = () => {
    navigate("/register");
  };

  const login = () => {
    navigate("/app/dashboard");
  };

  return (
    <div className="container">
      <Card sx={{ minWidth: 275 }} className="login-grid">
        <CardContent>
          <div className="card-header">
            <img src={Logo} alt="Gurukul" title="Gurukul" />
            <h3 className="title">Login</h3>
          </div>
          <div className="card-body" style={{ textAlign: "center" }}>
            <SignInButton />
            {/* <FormGroup>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                  <TextInput
                    id="email"
                    label="Email"
                    placeholder="Enter email address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    type="password"
                    id="password"
                    label="Password"
                    placeholder="Password"
                  />
                </Grid>
                <Grid item xs={7}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember Password"
                  />
                </Grid>
                <Grid item xs={5}>
                  <Grid container justifyContent="end" alignItems="center">
                    <Link to="/">Forgot password?</Link>
                  </Grid>
                </Grid>
              </Grid>

              <Button variant="contained" className="login-btn" onClick={login}>
                Login
              </Button>
            </FormGroup> */}
          </div>
        </CardContent>
        {/* <CardActions>
          <div className="small">
            <Link to="/register">Need an account? Sign up!</Link>
          </div>
        </CardActions> */}
      </Card>
      <AppFooter />
    </div>
  );
};

export default Login;
