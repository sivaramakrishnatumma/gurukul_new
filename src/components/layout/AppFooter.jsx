import React from "react";
import { styled } from "@mui/material/styles";

const Footer = styled("footer")({
  position: "fixed",
  bottom: 0,
  padding: "1.5rem 0",
  background: "#a5380d",
  width: "100%",
  textAlign: "center",
  margin: "0px -24px",
  zIndex: 100,
  "& p": {
    fontSize: "80%",
    fontWeight: 400,
    color: "#fff",
    margin: 0,
  },
});

const AppFooter = () => {
  return (
    <Footer>
      <p>
        Copyright &copy; 2021 - Gurukul is not-for profit organization and is
        registered as 501 (c)(3) organization with IRS.{" "}
      </p>
    </Footer>
  );
};

export default AppFooter;
