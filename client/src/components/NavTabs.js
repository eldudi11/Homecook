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
import { useNavigate } from "react-router";

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
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // icon={<PhoneMissedIcon />} iconPosition="start"
  return (
    // <div className="header-container">
    //   <div className="nav-container">
    //     <NavButton
    //       name={"All Recipes"}
    //       onClick={() => navigate("/", { replace: true })}
    //     ></NavButton>
    //     <NavButton
    //       onClick={() => navigate("/myingredients/", { replace: true })}
    //       name={"Search"}
    //     ></NavButton>
    //   </div>
    //   <div className="title">HOMECOOK</div>
    //   <div>icon</div>
    // </div>
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          label="Discover"
          component={Link}
          to={"/"}
          icon={<ExploreOutlinedIcon />}
          iconPosition="start"
        ></Tab>
        <Tab
          label="Login"
          component={Link}
          to={"/login"}
          icon={<PersonOutlineOutlinedIcon />}
          iconPosition="start"
        ></Tab>
        <Tab
          label="Search"
          component={Link}
          to={"/myingredients"}
          icon={<SearchOutlinedIcon />}
          iconPosition="start"
        ></Tab>
        {/* <Tab
          label="Result"
          component={Link}
          to={"/result"}
          icon={<FormatListBulletedOutlinedIcon />}
          iconPosition="start"
        ></Tab> */}
      </Tabs>
    </Box>
  );
}
