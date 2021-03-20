import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import AuthCard from "components/AuthCard";

const useStyles = makeStyles({
    pageHeading: { fontSize: "20px", margin: "24px", marginBottom: "10px" },
    pageSubHeading: { fontSize: "14px", margin: "0 24px" },
    dayHeading: { fontSize: "14px", textAlign: "center", marginTop: "32px" },
});

const HistoryPage = () => {
    const c = useStyles();
    return (
        <div className="page">
            <div className={c.pageHeading}>Recent authentication</div>
            <div className={c.pageSubHeading}>
                Your past authentications history at one place.
            </div>
            <Typography variant="h3" className={c.dayHeading}>
                Today
            </Typography>
            <AuthCard org="CIA" purpose="surveillance" place="Virginia, US" />
            <AuthCard org="Bharti Airtel" purpose="KYC" place="Mumbai, India" />
            <Typography variant="h3" className={c.dayHeading}>
                Yesterday
            </Typography>
            <AuthCard
                org="SBI"
                purpose="Bank account"
                place="New Delhi, India"
            />
            <AuthCard
                org="HDFC Bank"
                purpose="Bank account"
                place="New Delhi, India"
            />
            <AuthCard
                org="SBI"
                purpose="Bank account"
                place="New Delhi, India"
            />
        </div>
    );
};

export default HistoryPage;
