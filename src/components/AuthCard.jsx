/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core";
import authCardArrow from "../assets/arrow-left.svg";

const useStyles = makeStyles({
    authCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem",
        padding: "20px",
        background: "linear-gradient(179.81deg, #5934EF -23.35%, #1E0291 141%)",
        borderRadius: "4px",
    },
    authCardHeading: { fontSize: "20px" },
    authCardSubHeading: {
        fontSize: "16px",
    },
    authCardArrowBtn: {
        background: "#FFFFFF",
        borderRadius: "42.1053px",
        display: "flex",
        alignItems: "center",
        padding: "13.4737px",
    },
});

const AuthCard = ({ org, purpose, place }) => {
    const c = useStyles();

    return (
        <div className={c.authCard}>
            <div>
                <div className={c.authCardHeading}>{org}</div>
                <div className={c.authCardSubHeading}>Purpose: {purpose}</div>
                <div className={c.authCardSubHeading}>{place}</div>
            </div>
            <button type="button" className={c.authCardArrowBtn}>
                <img src={authCardArrow} alt="" />
            </button>
        </div>
    );
};

export default AuthCard;
