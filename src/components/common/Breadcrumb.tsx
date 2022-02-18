import React, { FC } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0.75rem 1rem",
    marginBottom: "1rem",
    listStyle: "none",
    backgroundColor: "#e9ecef",
    borderRadius: "0.25rem",
    color: "#7e7e7e"

  }
})

interface IProps {
  path: string[];
}

/**
 * @author
 * @function @Breadcrumb
 **/

export const Breadcrumb: FC<IProps> = ({ path }) => {
  const classes = useStyles();
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
        {path.map((item, index) => (
          <Typography
            key={item}
            variant="body1"
            style={index === path.length - 1 ? { color: "#ca501f" } : {}}
          >
            {item}
          </Typography>
        ))}
      </Breadcrumbs>
    </div>
  );
};
