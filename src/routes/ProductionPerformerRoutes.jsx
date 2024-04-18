import React from 'react';

import CreatePerformer from "../production-performers/CreatePerformer.jsx";
import PerformersHome from "../production-performers/PerformersHome.jsx";
import DeletePerformer from "../production-performers/DeletePerformer.jsx";

export const routes = [
    { path: '/createPerformer/:castId', element: <CreatePerformer />},
    { path: '/performersHome/:castId', element: <PerformersHome />},
    { path: '/deletePerformer/:performerId/:castId', element: <DeletePerformer />},
];