import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {}

/**
 * @author
 * @function @SignOutbutton
 **/

export const SignOutbutton: FC<IProps> = (props) => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogout = () => {
    instance.logout();
    navigate("/");
  };
  return (
    <Button onClick={handleLogout} color="primary" variant="contained">
      Logout
    </Button>
  );
};
