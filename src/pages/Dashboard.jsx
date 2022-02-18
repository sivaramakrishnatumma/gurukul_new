import { Grid } from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo.jpg";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { ColorLinkCard } from "../components/common/ColorLinkCard";

const Dashboard = () => {
  return (
    <>
      <h1 className="mt-4">Dashboard</h1>
      <Breadcrumb path={["Dashboard"]} />
      <div>
        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={12} sm={6} md={3}>
            <ColorLinkCard title="Books" to="app/list-items" color="#007bff" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ColorLinkCard
              title="Total Checkedout"
              to="app/list-items"
              color="#ffc107"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ColorLinkCard
              title="Check Out"
              to="app/list-items"
              color="#28a745"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ColorLinkCard
              title="Check In"
              to="app/list-items"
              color="#dc3545"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
