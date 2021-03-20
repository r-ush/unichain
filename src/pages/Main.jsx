/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import BottomNav from "components/BottomNav";
import { Typography } from "@material-ui/core";
// import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import HistoryPage from "./HistoryPage";
// import TransactionPage from "./TransactionPage";

const Main = () => {
    const [navValue, setNavValue] = useState(0);

    useEffect(() => {
        console.log("main", navValue);
    }, [navValue]);

    return (
        <React.Fragment>
            {navValue === 0 ? (
                <HomePage />
            ) : navValue === 1 ? (
                <HistoryPage />
            ) : navValue === 2 ? (
                <Typography style={{ padding: "2rem" }} variant="h6">
                    Coming Soon...
                </Typography>
            ) : navValue === 3 ? (
                "<ProfilePage />"
            ) : null}
            <BottomNav navValue={navValue} setNavValue={setNavValue} />
        </React.Fragment>
    );
};

export default Main;
