import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import "./NavTabs.css";
import NavButton from "../styles/NavButton";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router";
import theme from "../theme";

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

export default function NavTabs() {
  const [value, setValue] = React.useState("All Recipes");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // icon={<PhoneMissedIcon />} iconPosition="start"
  return (
    <div className="header-container">
      <div className="nav-container">
        <NavButton
          name={"All Recipes"}
          selected={value}
          onClick={() => {
            navigate("/", { replace: true });
            setValue("All Recipes");
          }}
        ></NavButton>
        <NavButton
          selected={value}
          onClick={() => {
            navigate("/myingredients/", { replace: true });
            setValue("Search");
          }}
          name={"Search"}
        ></NavButton>
      </div>
      <div className="title">
        <Typography variant="h5" color="primary">
          HOMECOOK
        </Typography>
      </div>
      <div className="icon-container">
        <IconButton
          color="primary"
          onClick={() => navigate("/login/", { replace: true })}
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
      </div>
    </div>
    // <Box sx={{ width: "100%" }}>
    //   <Tabs value={value} onChange={handleChange}>
    //     <Tab
    //       label="Discover"
    //       component={Link}
    //       to={"/"}
    //       icon={<ExploreOutlinedIcon />}
    //       iconPosition="start"
    //     ></Tab>
    //     <Tab
    //       label="Login"
    //       component={Link}
    //       to={"/login"}
    //       icon={<PersonOutlineOutlinedIcon />}
    //       iconPosition="start"
    //     ></Tab>
    //     <Tab
    //       label="Search"
    //       component={Link}
    //       to={"/myingredients"}
    //       icon={<SearchOutlinedIcon />}
    //       iconPosition="start"
    //     ></Tab>
    //     {/* <Tab
    //       label="Result"
    //       component={Link}
    //       to={"/result"}
    //       icon={<FormatListBulletedOutlinedIcon />}
    //       iconPosition="start"
    //     ></Tab> */}
    //   </Tabs>
    // </Box>
  );
}
