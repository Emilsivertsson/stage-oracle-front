import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import RegisterPerformer from "./performer/RegisterPerformer.jsx";

import LoginPerformer from "./performer/LoginPerformer.jsx";
import RegisterProduction from "./RegisterProduction.jsx";
import LoginProduction from "./LoginProduction.jsx";
import PerformerHome from "./performer/PerformerHome.jsx";
import PerformerProfile from "./performer/PerformerProfile.jsx";
import PerformerProfileUpdate from "./performer/UpdatePerformerProfile.jsx";
import PerformerMeasurementsUpdate from "./performer/UpdatePerformerMeasurments.jsx";
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "./PageNotFound.jsx";
import LogOut from "./performer/Logout.jsx";

import Layout from "./Layout.jsx";
import DeleteAccount from "./performer/DeleteAccount.jsx";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <Home />, index: true },
            { path: '/performerHome', element: <PerformerHome /> },
            { path: '/performerProfile', element: <PerformerProfile /> },
            { path: '/loginPerformer', element: <LoginPerformer /> },
            { path: '/registerPerformer', element: <RegisterPerformer /> },
            { path: '/loginProduction', element: <LoginProduction /> },
            { path: '/registerProduction', element: <RegisterProduction /> },
            { path: '/profileUpdate', element: <PerformerProfileUpdate /> },
            { path: '/measurementsUpdate', element: <PerformerMeasurementsUpdate />},
            { path: '/deleteAccount', element: <DeleteAccount />},
            { path: '/logout', element: <LogOut />},
            { path: '*', element: <PageNotFound />}
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
