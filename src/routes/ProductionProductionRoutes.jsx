import React from 'react';

import ProductionHome from "../production-production/ProductionHome.jsx";
import UpdateProduction from "../production-production/UpdateProduction.jsx";
import DeleteProduction from "../production-production/DeleteProduction.jsx";
import CreateProduction from "../production-production/CreateProduction.jsx";

export const routes = [
    { path: '/productionHome', element: <ProductionHome />},
    { path: '/updateProduction/:productionId', element: <UpdateProduction />},
    { path: '/deleteProduction/:productionId', element: <DeleteProduction />},
    { path: '/createProduction', element: <CreateProduction />},
];