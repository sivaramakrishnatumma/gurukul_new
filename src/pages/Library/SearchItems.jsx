import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import { CardContent } from "@mui/material";
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

export default function SearchItems() {
  return (
    <>
      <h1 className="mt-4">Library Management</h1>
      <Breadcrumb path={["Library Management", "Search Items"]} />

      <div>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
          style={{ margin: "0 auto" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Items"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>

        <Card sx={{ minWidth: true }} className="login-grid">
          <CardContent>
            <div className="card-header">
              <h3 className="title">Search Result</h3>
            </div>
            <div className="card-body">hi</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
