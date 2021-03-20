/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import HistoryIcon from "@material-ui/icons/History";
import FolderRoundedIcon from "@material-ui/icons/FolderRounded";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        height: "56px",
        left: 0,
        bottom: 0,

        background: "#1B1B1B",
        boxShadow: "0px -2px 10px rgba(15, 15, 15, 0.6)",

        // borderRadius: "3px",
    },
    menuItem: {
        color: "#8d8d8d",
    },
});

export default function BottomNav({ setNavValue, navValue }) {
    const classes = useStyles();

    // console.log("bottomnav", navValue);

    return (
        <BottomNavigation
            value={navValue}
            onChange={(event, newValue) => {
                setNavValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                className={classes.menuItem}
                label="Home"
                icon={<HomeRoundedIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="History"
                icon={<HistoryIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="Identities"
                icon={<FolderRoundedIcon />}
            />
            <BottomNavigationAction
                className={classes.menuItem}
                label="Profile"
                icon={<PersonRoundedIcon />}
            />
        </BottomNavigation>
    );
}
