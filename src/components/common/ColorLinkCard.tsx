import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

interface IProps {
  title: string;
  to: string;
  color: string;
}

const useStyles = makeStyles({
  root: {
    color: "#fff",
    backgroundColor: (props: any) => props.color,
  },
  cardFooter: {
    borderTop: "1px solid rgba(0, 0, 0, 0.125)",
  },
  cardButton: {
    justifyContent: "space-between",
    color: "#fff",
    textTransform: "none",
  },
});

/**
 * @author
 * @function @ColorLinkCard
 **/

export const ColorLinkCard: FC<IProps> = (props) => {
  const classes = useStyles(props);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.to);
  };
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography component="div" style={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>
        <Button
          size="small"
          fullWidth={true}
          endIcon={<ChevronRightIcon />}
          className={classes.cardButton}
          onClick={handleClick}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};
