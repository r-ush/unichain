import React from "react";
import passport from "assets/passport-img.svg";

const IdentityCard = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",

                // background: "rgba(18, 18, 18, 0.72)",
                borderRadius: "4px",
                border: "1px solid ",
                borderColor:
                    "linear-gradient(134.46deg, #1F86FF -10.15%, rgba(68, 9, 234, 0.62) 21.29%, rgba(20, 20, 20, 0.0499961) 48.16%, rgba(100, 100, 100, 0) 51.11%, rgba(15, 125, 254, 0.51) 68.15%, rgba(97, 22, 255, 0.89) 80.48%)",
            }}
            className="border-color"
        >
            <img src={passport} alt="" />
            <div
                style={{
                    margin: "4px 0px",
                    fontWeight: "600",
                    fontSize: "600",
                }}
            >
                Aadhaar Card
            </div>
        </div>
    );
};

export default IdentityCard;
