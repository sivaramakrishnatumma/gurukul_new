import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { DataGrid } from "@mui/x-data-grid";
import { Breadcrumb } from "../../components/common/Breadcrumb";
import {
  getItemBorroweListService,
  updateItemBorrowerService,
} from "../../services/ItemBorrowerServices";
import { checkInColumns } from "../../forms-config/check-in";
import { LayoutCard } from "../../components/common/LayoutCard";
import { Button, FormControlLabel } from "@mui/material";
import { handleValidationError } from "../../utils/utility_fns";
import { useDispatch } from "react-redux";
import {
  EVT_HIDE_LOADER,
  EVT_SHOW_ERROR,
  EVT_SHOW_LOADER,
} from "../../redux/actions/common.actions.types";

const columns = [...checkInColumns];

export default function CheckIn() {
  const [rows, setRows] = useState([]);
  const [searchKey, setSeachKey] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getList();
  }, []);

  const renderCell = (params) => {
    return (
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
      >
        <FormControlLabel
          label=""
          control={
            <Button
              onClick={() => handleCheckIn(params.row)}
              color="primary"
              variant="contained"
            >
              Check In
            </Button>
          }
        />
      </div>
    );
  };

  columns.push({
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 140,
    renderCell,
  });

  const getList = async () => {
    dispatch({ type: EVT_SHOW_LOADER });

    try {
      const response = await getItemBorroweListService();
      setRows(response);
      dispatch({ type: EVT_HIDE_LOADER });
    } catch (error) {
      const msg = handleValidationError(error.response);
      if (msg) {
        dispatch({ type: EVT_SHOW_ERROR, value: msg });
      }

      dispatch({ type: EVT_HIDE_LOADER });
    }
  };

  const handleCheckIn = (row) => {
    dispatch({ type: EVT_SHOW_LOADER });
    console.log(row);
    const data = {
      itemId: row.itemId,
      borrowerId: row.borrowerId,
      itemBorrowerStatusCode: row.itemBorrowerStatusCode,
      borrowedDate: row.borrowedDate,
      dateOfReturn: new Date().toISOString(),
      notes: row.notes,
      isactive: row.isactive,
    };
    try {
      updateItemBorrowerService(data, row.id);
      dispatch({ type: EVT_HIDE_LOADER });
    } catch (error) {
      const msg = handleValidationError(error.response);
      if (msg) {
        dispatch({ type: EVT_SHOW_ERROR, value: msg });
      }

      dispatch({ type: EVT_HIDE_LOADER });
    }
  };

  const filteredRows = () => {
    return rows.filter((row) => {
      if (searchKey === "") return rows;
      return row.itemId == searchKey || row.borrowerId == searchKey;
    });
  };

  return (
    <>
      <h1 className="mt-4">Library Management</h1>
      <Breadcrumb path={["Library Management", "Check-in Process"]} />

      <div>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
          style={{ margin: "10px auto" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Items"
            inputProps={{ "aria-label": "search google maps" }}
            value={searchKey}
            onChange={(e) => setSeachKey(e.target.value)}
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

        <LayoutCard title="Check In Items">
          <div style={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={filteredRows()}
              columns={columns}
              disableColumnMenu
            />
          </div>
        </LayoutCard>
      </div>
    </>
  );
}
