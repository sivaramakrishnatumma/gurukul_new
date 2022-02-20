import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { Button } from "@mui/material";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  return (
    <div>
      <Button onClick={handleLogin} color="primary" variant="contained">
        Login
      </Button>
    </div>
  );
};
