import React from "react";
import IdentityCard from "components/IdentityCard";
import lock from "assets/lock.svg";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    row: {
        display: "flex",
        justifyContent: "space-between",
    },
    top: {
        margin: "42px 27px",
    },
    pageHead: { fontSize: "24px" },
    addBtn: {
        position: "absolute",
        bottom: "100px",
        right: "10px",
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "50%",
        width: "61px",
        height: "61px",
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
    },
});

const IdentitiesPage = () => {
    const c = useStyles();

    return (
        <div className="page">
            <div className={c.top}>
                <div className={c.row}>
                    <div className={c.pageHead}>Identities</div>
                    <img src={lock} alt="" />
                </div>
                <div>Secure and private documents</div>
            </div>
            <div>
                <IdentityCard />
            </div>
            <Button
                // eslint-disable-next-line no-return-assign
                onClick={() => (window.location.href = "/addID")}
                variant="contained"
                color="primary"
                className={c.addBtn}
            >
                +
            </Button>
        </div>
    );
};

export default IdentitiesPage;
