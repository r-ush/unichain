import React, { useEffect, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import back from "assets/back.svg";
import uploadIcon from "assets/upload-icon.svg";
import ipfs from "blockchain/ipfs";
import web3 from "blockchain/web3";
import storehash from "blockchain/storehash";
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
});

const AddIDPage = () => {
    const c = useStyles();

    const [buffer, setBuffer] = useState();
    const [setHash] = useState("");
    const [setThash] = useState("");
    const [setEthaddr] = useState("");
    const history = useHistory();

    const loadWallet = async () => {
        if (window.ethereum) {
            await window.ethereum.enable();
        }
    };

    useEffect(() => {
        loadWallet();
    }, []);

    const convertToBuffer = async (reader) => {
        const tpbuffer = await Buffer.from(reader.result);
        setBuffer(tpbuffer);
    };

    const captureFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        console.log("File Read");
        reader.onloadend = () => convertToBuffer(reader);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        const ethAddress = await storehash.options.address;
        setEthaddr(ethAddress);
        await ipfs.add(buffer, (err, ipfsHash) => {
            console.log(err, ipfsHash);
            setHash(ipfsHash[0].hash);
            storehash.methods.sendHash(ipfsHash[0].hash).send(
                {
                    from: accounts[0],
                },
                (error, transactionHash) => {
                    console.log(transactionHash);
                    setThash(transactionHash);
                    history.push("/confirm");
                }
            );
        });
    };

    return (
        <div className="page">
            <div className={c.loginTop}>
                <Button
                    className={c.backBtn}
                    onClick={() => window.history.back()}
                >
                    <img src={back} alt="back" style={{ marginRight: "6px" }} />

                    <span>Go back</span>
                </Button>
                <span className={c.instrctionsLink}>
                    Instructions to upload
                </span>
            </div>
            <div className={c.content}>
                <div>
                    <div className={c.addHead}>Add Card</div>
                    <div>Upload you Identity</div>
                    {/* file upload btn */}
                    <Button
                        variant="contained"
                        color="primary"
                        className={c.uploadBtn}
                    >
                        <input
                            // ref={ref}
                            type="file"
                            accept="image/*"
                            onChange={captureFile}
                        />
                        <img src={uploadIcon} alt="" />
                    </Button>

                    <div className={c.png}>Upload as .png, .jpg or .jpeg</div>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                    className={c.submit}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default AddIDPage;
