import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home/Home";
import "./App.scss";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,

            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/categories/:id",
                    element: <Category />,
                },
                {
                    path: "/product/:id",
                    element: <SingleProduct />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
