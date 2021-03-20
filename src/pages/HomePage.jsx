/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import profileImg from "../assets/profile-img.png";
// import recycle from "../assets/recycle.svg";
import info from "../assets/information.svg";
// import coin from "../assets/coin.svg";
// import qrIcon from "../assets/qrIcon.png";
// import InfoModal from "components/InfoModal";

import passportImg from "../assets/passport-img.svg";
import authCardArrow from "../assets/arrow-left.svg";
import lib from "../assets/lib.svg";

const useStyles = makeStyles({
    homeTop: {
        display: "flex",
        justifyContent: "space-between",
        padding: "1.5rem 1rem",
        marginBottom: "1.5rem",
        // borderBottom: "1px solid #2B2B2B",

        background:
            "linear-gradient(280.73deg, #23A5EE -5.2%, #7673FF 106.92%)",
    },
    topLeft: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontFamily: "Noto Serif",
        fontSize: "32px",
        lineHeight: "140%",

        /* identical to box height, or 45px */
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",
    },
    homeTopDate: {
        fontSize: "16px",
        lineHeight: "140%",

        /* identical to box height, or 45px */
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",

        // marginLeft: "0.5rem",
    },
    purpletext: { color: "#B251FF" },
    homeTopIcon: { margin: "0.75rem" },
    currentValue: {
        padding: "12px",
        border: "0.5px solid #3EFFA2",
        borderRadius: "6px",
        alignSelf: "center",
    },
    row: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
    },
    rowSpaceBW: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        // margin: "0 1rem",
    },
    rowNoSpace: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    homeHeading: {
        fontFamily: "Noto Serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "24px",
        letterSpacing: "0.01em",

        color: "#FFFFFF",
    },
    identityRow: {
        display: "flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        margin: "20px 0",
        overflow: "scroll",
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    idenitityCard: {
        margin: "0px 12px",
        background: "linear-gradient(179.81deg, #5934EF -23.35%, #1E0291 141%)",
        height: "55px",
        width: "55px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
    },
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
    helpCard: {
        background: "#212121",
        borderRadius: "4px",
        margin: "1rem",
        marginTop: "0",
        padding: "10px",
    },
    libHeading: {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "700",
        marginTop: "6px",
    },
    libSubHeading: {
        color: "rgba(255, 255, 255, 0.75)",
        fontSize: "12px",
        marginTop: "6px",
    },
    payBtn: {
        alignSelf: "center",
        width: "300px",
        height: "50px",
        background: "#4464FF",
        boxShadow: "0px 4px 50px 2px rgba(68, 100, 255, 0.4)",
        borderRadius: "10px",
        margin: "42px 0 27px 0",
        fontSize: "24px",
    },
    qrBtn: {
        height: "72px",
        width: "72px",
        borderRadius: "50%",
        filter: "drop-shadow(0px 5.40984px 36.0656px rgba(62, 255, 162, 0.25))",
        background: "#3EFFA2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "8px",
        bottom: "70px",
    },
});

const Main = () => {
    const c = useStyles();

    // const history = useHistory();

    const [showInfoModal, setInfoModal] = useState(false);

    const toggleInfoModal = () => {
        setInfoModal(!showInfoModal);
    };

    // const onPayClick = () => {
    //     history.push("/qr");
    // };

    return (
        <div className="page">
            <div className={c.homeTop}>
                <div className={c.topLeft}>
                    <div>
                        <div className={c.name}>Hello X Æ A-Xii,</div>
                        <div className={c.homeTopDate}>20th March, 2021</div>
                    </div>
                </div>
                <div>
                    <img
                        onClick={() => {
                            toggleInfoModal();
                        }}
                        className={c.homeTopIcon}
                        src={info}
                        alt=""
                    />
                    {/* <img className={c.homeTopIcon} src={recycle} alt="" /> */}
                </div>
            </div>

            {/* <Button
                onClick={onPayClick}
                className={c.payBtn}
                variant="contained"
                color="primary"
            >
                <b>Pay</b>
            </Button> */}
            {/* <hr style={{ width: "326px", border: "1px solid #2B2B2B" }} /> */}

            <div>
                <div className={c.rowSpaceBW}>
                    <div
                        className={c.homeHeading}
                        style={{ paddingLeft: "1rem" }}
                    >
                        Identities added
                    </div>
                    <div
                        style={{ paddingRight: "1rem" }}
                        className={c.purpletext}
                    >
                        View More
                    </div>
                </div>
                <div className={c.identityRow}>
                    <div className={c.idenitityCard}>
                        <img src={passportImg} alt="" />
                    </div>
                    <div className={c.idenitityCard}>
                        <img src={passportImg} alt="" />
                    </div>
                    <div className={c.idenitityCard}>
                        <img src={passportImg} alt="" />
                    </div>
                    <div className={c.idenitityCard}>
                        <img src={passportImg} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className={c.rowSpaceBW}>
                    <div
                        className={c.homeHeading}
                        style={{ paddingLeft: "1rem" }}
                    >
                        Recent authentication
                    </div>
                    <div
                        style={{ paddingRight: "1rem" }}
                        className={c.purpletext}
                    >
                        View More
                    </div>
                </div>
                <div className={c.authCard}>
                    <div>
                        <div className={c.authCardHeading}>CIA</div>{" "}
                        <div className={c.authCardSubHeading}>
                            Purpose: Surveillance
                        </div>
                        <div className={c.authCardSubHeading}>Virginia, US</div>
                    </div>
                    <button type="button" className={c.authCardArrowBtn}>
                        <img src={authCardArrow} alt="" />
                    </button>
                </div>
                <div className={c.authCard}>
                    <div>
                        <div className={c.authCardHeading}>SBI</div>{" "}
                        <div className={c.authCardSubHeading}>
                            Purpose: Bank account
                        </div>
                        <div className={c.authCardSubHeading}>
                            New Delhi, India
                        </div>
                    </div>
                    <button type="button" className={c.authCardArrowBtn}>
                        <img src={authCardArrow} alt="" />
                    </button>
                </div>
            </div>

            <div className={c.helpCard}>
                <img src={lib} alt="" />
                <div className={c.libHeading}>Self-help library</div>
                <div className={c.libSubHeading}>
                    Form instructions and general policy all at one place
                </div>
            </div>

            {/* {showInfoModal ? (
                <InfoModal toggleInfoModal={toggleInfoModal} />
            ) : null}
            <div onClick={onPayClick} className={c.qrBtn}>
                <img src={qrIcon} alt="" />
            </div> */}
        </div>
    );
};

export default Main;
