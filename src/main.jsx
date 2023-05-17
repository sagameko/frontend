import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Profile } from "./routes/Profile";
import { Apply } from "./routes/Apply";
import { Jobs } from "./routes/Jobs";
import { JobsDetails } from "./routes/JobsDetails";
import { StaffClass } from "./routes/StaffClass";
import { ApplicantDetails } from "./routes/ApplicantDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/apply",
        element: <Apply />,
    },
    {
        path: "/jobs",
        element: <Jobs />,
    },
    {
        path: "/jobs/:id",
        element: <JobsDetails />,
    },
    {
        path: "/class",
        element: <StaffClass />,
    },
    {
        path: "/class/:id",
        element: <ApplicantDetails />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
