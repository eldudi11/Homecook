import Icon from "@mui/material/Icon";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    marginTop: "5px",
    marginLeft: "3px",
  },
}));

const IconText = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon color="primary">
        <props.iconImage />
      </Icon>
      <Typography variant="subtitle2" className={classes.name}>
        {props.name}
      </Typography>
    </div>
  );
};

export default IconText;
