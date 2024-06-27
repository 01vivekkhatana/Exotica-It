import React, { useContext, useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Switch from "@mui/material/Switch";
import { makeStyles } from "@mui/styles";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "fixed",
    top: 0,
    backgroundColor: "aliceblue",
    height: "65px",
    width: "1048px",
    zIndex: 1000,
    transition: "all 0.3s ease",
  },
  sticky: {
    boxShadow: "0 4px 2px -2px gray",
  },
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    height: "70px",
  },
  search: {
    display: "flex",
    alignItems: "center",
    "& input": {
      border: "none",
      outline: "none",
      padding: "0.5rem",
      width: "533px",
      marginLeft: "111px",
    },
  },
  items: {
    display: "flex",
    alignItems: "center",
    marginLeft: "43px",
  },
  item: {
    marginLeft: "1rem",
  },
  profileImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
}));

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const classes = useStyles();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${classes.navbar} ${sticky ? classes.sticky : ""}`}>
      <div className={classes.navbarContainer}>
        <div className={classes.search}>
          <input type="text" placeholder="search" />
          <SearchOutlinedIcon />
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <Switch
              style={{ color: "#210876" }}
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className={classes.item}>
            <ListOutlinedIcon />
          </div>
          <div className={classes.item}>
            <img
              src="/assets/person.jpg"
              alt="Profile"
              className={classes.profileImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
