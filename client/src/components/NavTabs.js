import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // icon={<PhoneMissedIcon />} iconPosition="start"
  return (
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
          disabled={true}
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
