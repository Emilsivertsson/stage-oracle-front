import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import AppContext from "./AppContext.jsx";

import Home from './Home.jsx'
import PageNotFound from "./PageNotFound.jsx";
import Layout from "./Layout.jsx";
import * as AwanRoutes from "./routes/AwanRoutes.jsx";
import * as PerformerRoutes from "./routes/PerformerRoutes.jsx";
import * as PerformerAdminRoutes from "./routes/PerformerAdminRoutes.jsx";
import * as ProductionProductionRoutes from "./routes/ProductionProductionRoutes.jsx";
import * as ProductionActsRoutes from "./routes/ProductionActsRoutes.jsx";
import * as ProductionCostumeRoutes from "./routes/ProductionCostumeRoutes.jsx";
import * as ProductionGarmentRoutes from "./routes/ProductionGarmentRoutes.jsx";
import * as ProductionManifestRoutes from "./routes/ProductionManifestRoutes.jsx";
import * as ProductionCastRoutes from "./routes/ProductionCastRoutes.jsx";
import * as ProductionAdminRoutes from "./routes/ProductionAdminRoutes.jsx";
import * as ProductionPerformerRoutes from "./routes/ProductionPerformerRoutes.jsx";
import * as ProductionUserRoutes from "./routes/ProductionUserRoutes.jsx";

const initialGlobalState = {
    username: "",
    userId: null,
    productionId: null,
    manifestId: null,
    castId: null,
    performerId: null,
    actId: null,
    costumeId: null,
    garmentId: null,
    loggedIn: false,
    production: false,
};

function Main() {

    const [globalState, setGlobalState] = useState(initialGlobalState);
    const updateGlobalState = (newState) => {
        setGlobalState({...globalState, ...newState});
    }

    return (
        <AppContext.Provider value={{globalState, updateGlobalState}}>
            <RouterProvider router={router} />
        </AppContext.Provider>
    );

}

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <Home />},
            ...PerformerRoutes.routes,
            ...AwanRoutes.routes,
            ...PerformerAdminRoutes.routes,
            ...ProductionActsRoutes.routes,
            ...ProductionCostumeRoutes.routes,
            ...ProductionGarmentRoutes.routes,
            ...ProductionManifestRoutes.routes,
            ...ProductionCastRoutes.routes,
            ...ProductionAdminRoutes.routes,
            ...ProductionPerformerRoutes.routes,
            ...ProductionProductionRoutes.routes,
            ...ProductionUserRoutes.routes,
            { path: '*', element: <PageNotFound />}
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
