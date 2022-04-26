import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#44927f",
    color: "white",
    fontWeight: "bold",
    borderRadius: "0px",
  },
}));

const ActionButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} onClick={props.onClick}>
      {props.name}
    </Button>
  );
};

export default ActionButton;
