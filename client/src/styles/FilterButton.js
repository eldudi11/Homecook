import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "#44927F",
    border: "1px solid",
    fontSize: "12px",
    borderRadius: "0px",
  },
}));

const FilterButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      onClick={props.onClick}
      disableElevation
      disableFocusRipple
      disableRipple
    >
      {props.name}
    </Button>
  );
};

export default FilterButton;
