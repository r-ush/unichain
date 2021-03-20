import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "pages/Main";
// import Qr from "pages/qrPage";
// import TransactionInit from "pages/TransactionInit";
// import Success from "pages/Success";
import OB1 from "pages/ob1";
import OB2 from "pages/ob2";
import OB3 from "pages/ob3";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import LoginMediator from "pages/LoginMediator";
import DesktopView from "pages/DesktopView";
import AddIDPage from "pages/AddIDPage";
import TransactionPage from "pages/TransactionPage";
import ConfirmTransaction from "pages/ConfirmTransaction";
import ProtectedRoute from "components/ProtectedRoute";
// import BlockTester from "./pages/BlockTester";
// import Onboarding from "./pages/Onboarding";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Nunito Sans",
    },
});

const App = () => {
    const history = useHistory();
    const firstTime = localStorage.getItem("firstTime");

    useEffect(() => {
        if (firstTime !== "abc") {
            history.push("/ob1");
            localStorage.setItem("firstTime", "abc");
        }
    }, [firstTime, history]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        const width = window.innerWidth;
        if (width > 500) {
            return history.push("/desktop");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact component={DesktopView} path="/desktop" />
                <Route exact component={LoginMediator} path="/login" />
                <ProtectedRoute
                    exact
                    component={Main}
                    path="/"
                    redirect="/login"
                />
                <ProtectedRoute
                    exact
                    component={AddIDPage}
                    path="/addid"
                    redirect="/login"
                />
                {/* <Route exact component={Qr} path="/qr" /> */}
                <ProtectedRoute
                    exact
                    component={TransactionPage}
                    path="/Transact"
                    redirect="/login"
                />
                <ProtectedRoute
                    exact
                    component={ConfirmTransaction}
                    path="/confirm"
                    redirect="/login"
                />
                <Route exact component={OB1} path="/ob1" />
                <Route exact component={OB2} path="/ob2" />
                <Route exact component={OB3} path="/ob3" />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
