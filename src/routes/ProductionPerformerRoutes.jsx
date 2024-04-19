

import CreatePerformer from "../production-performers/CreatePerformer.jsx";
import PerformersHome from "../production-performers/PerformersHome.jsx";
import DeletePerformer from "../production-performers/DeletePerformer.jsx";

export const routes = [
    { path: '/createPerformer', element: <CreatePerformer />},
    { path: '/performersHome', element: <PerformersHome />},
    { path: '/deletePerformer', element: <DeletePerformer />},
];