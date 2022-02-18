import React, { FC } from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

interface IProps {
  title: string,
  children?: any
}

/**
 * @author
 * @function @LayoutCard
 **/

export const LayoutCard: FC<IProps> = (props: IProps) => {
  return (
    <Card>
      <CardHeader sx={{ bgcolor: "rgb(202 80 31)", padding: "5px", color: "#fff" }}
        avatar={
          <Avatar  sx={{ bgcolor: "transparent" }} aria-label="recipe">
            <ListAltIcon />
          </Avatar>
        }
        
        title={props.title}
      />
      <CardContent>
          {props.children}
      </CardContent>
    </Card>
  );
};
