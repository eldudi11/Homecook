import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: "transparent",
    color: "black",
    borderRadius: "0px",
    textTransform: "none",
    fontWeight: props.weight,
    textAlign: "center",
    "&:hover": {
      background: "#80000000",
    },
    "&:active": {
      background: "black",
    },
  }),
}));

const NavButton = (props) => {
  let weight = "normal";
  console.log(props);
  if (props.name === props.selected) {
    weight = "bold";
  }
  const classes = useStyles({ weight: weight });
  return (
    <Button className={classes.root} onClick={props.onClick}>
      {props.name}
    </Button>
  );
};

export default NavButton;
