import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import back from "assets/back.svg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    loginTop: {
        width: "90%",
        paddingTop: "28px",
        paddingLeft: "12px",
        display: "flex",
        alignSelf: "baseline",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backBtn: {
        fontSize: "14px",
        lineHeight: "17px",

        /* identical to box height */
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    addHead: { fontSize: "24px", marginTop: "100px", marginBottom: "69px" },
    uploadBtn: {
        background: "#212121",
        borderRadius: "6px",
        width: "291px",
        height: "69px",
        margin: "1rem 0",
    },
    submit: {
        background: "linear-gradient(179.81deg, #5934EF -23.35%, #1E0291 141%)",
        borderRadius: "6px",
        width: "136px",
        height: "48px",
        marginTop: "100px",
    },
    png: {
        fontSize: "14px",

        color: "#606060",
    },
    heading: {
        textAlign: "center",
        marginTop: "90px",
        fontSize: "20px",
        lineHeight: "27px",

        /* primary/white */
        color: "#FBFBFB",
    },
    heading2: {
        textAlign: "center",
        marginTop: "180px",
        marginBottom: "40px",
        fontSize: "16px",
        lineHeight: "22px",

        /* primary/white */
        color: "#FBFBFB",
    },
    input: {
        // backgroundColor: "red",
        padding: "0 27px",

        textAlign: "center",

        width: "200px",
        height: "60px",

        /* black shade */
        background: "#212121",
        borderRadius: "6px",
        color: "#fff",
        border: "none",
        alignSelf: "center",
    },
    bottomBtn: {
        padding: "16px",

        position: "absolute",
        width: "100%",
        left: 0,
        bottom: 0,

        /* primary/gradient */
        background: "linear-gradient(179.81deg, #5934EF -23.35%, #1E0291 141%)",
        borderRadius: "4px",
        color: "#fff",
    },
});

const TransactionPage = () => {
    const c = useStyles();

    const history = useHistory();

    return (
        <div className="page transact-page">
            <div className={c.loginTop}>
                <Button
                    className={c.backBtn}
                    onClick={() => window.history.back()}
                >
                    <img src={back} alt="back" style={{ marginRight: "6px" }} />

                    <span>Go back</span>
                </Button>
            </div>
            <div className={c.heading}>Authorize yourself</div>
            <div className={c.heading2}>Enter reciever&apos;s UniChain ID</div>
            <input type="text" className={c.input} placeholder="Enter ID" />
            <Button
                className={c.bottomBtn}
                onClick={() => history.push("/confirm")}
            >
                Next
            </Button>
        </div>
    );
};

export default TransactionPage;
