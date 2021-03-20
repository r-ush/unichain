import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

import desktoplogo from "../assets/desktoplogo.png";

const useStyles = makeStyles({
    root: {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        // paddingTop: "50px",
        background: "linear-gradient(179.81deg, #5934EF -23.35%, #1E0291 141%)",
    },
});

const DesktopView = () => {
    const c = useStyles();

    return (
        <div className={c.root}>
            <img style={{ marginTop: "120px" }} src={desktoplogo} alt="" />
            <Typography style={{ marginTop: "100px" }} variant="h6">
                To go ahead
                <br />
                - Open the website in mobile view of the browser
                <br />- install MetaMask wallet
                <br />- Make sure you have Ethers in Ropsten network in your
                Metamask wallet.
                <br />
                <br />
                Otherwise click HOME to check out the details about UniChain
                :&apos; )
            </Typography>
            <Button
                variant="contained"
                style={{
                    marginTop: "50px",
                }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.unichain.tk/"
            >
                HOME
            </Button>
        </div>
    );
};

export default DesktopView;
