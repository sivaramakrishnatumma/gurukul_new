import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PageConfig } from "../../constants/config";
import { kebabize, titlize } from "../../utils/utility_fns";
import { Breadcrumb } from "../common/Breadcrumb";
import { LayoutCard } from "../common/LayoutCard";
import { MatEdit } from "./MatEdit";

interface IProps {
  page: string;
  title: string;
}

/**
 * @author
 * @function @BaseList
 **/

export const BaseList: FC<IProps> = (props) => {
  const { page, title } = props;
  const config = PageConfig[page];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rows } = useSelector((state: any) => state[page]);

  useEffect(() => {
    dispatch(config.actions.getListAction());
  }, []);

  const handleAddClick = () => {
    navigate({
      pathname: `/app/${kebabize(page)}-update`,
    });
  };

  function renderCell(params: any) {
    return (
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
      >
        <MatEdit id={params.row.id} page={page} />
      </div>
    );
  }

  const generateColumns = (page: string) => {
    const columns: GridColDef[] = PageConfig[page].config
      .filter((item) => !item.hidden)
      .map((item) => ({
        field: item.field,
        headerName: item.title,
        width: 150,
      }));

    columns.push({
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 140,
      renderCell,
    });

    return columns;
  };

  return (
    <>
      <h1 className="mt-4">Library Management</h1>
      <Breadcrumb path={["Library Management", title]} />

      <div className="action-bar">
        <Button variant="outlined" onClick={handleAddClick}>
          Add {titlize(page)}
        </Button>
      </div>

      <LayoutCard title={title}>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rows} columns={generateColumns(page)} />
        </div>
      </LayoutCard>
    </>
  );
};
