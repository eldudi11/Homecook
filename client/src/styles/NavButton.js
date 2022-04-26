import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "black",
    borderRadius: "0px",
  },
}));

const NavButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} onClick={props.onClick}>
      {props.name}
    </Button>
  );
};

export default NavButton;
