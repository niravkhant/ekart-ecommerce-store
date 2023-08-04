import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import AppContext from "./utils/contexs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Root() {
    return (
        <>
            <AppContext>
                <Header />
                <Outlet />
                <Footer />
            </AppContext>
        </>
    );
}
