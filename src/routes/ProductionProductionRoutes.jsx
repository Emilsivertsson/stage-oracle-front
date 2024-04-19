

import ProductionHome from "../production-production/ProductionHome.jsx";
import UpdateProduction from "../production-production/UpdateProduction.jsx";
import DeleteProduction from "../production-production/DeleteProduction.jsx";
import CreateProduction from "../production-production/CreateProduction.jsx";

export const routes = [
    { path: '/productionHome', element: <ProductionHome />},
    { path: '/updateProduction', element: <UpdateProduction />},
    { path: '/deleteProduction', element: <DeleteProduction />},
    { path: '/createProduction', element: <CreateProduction />},
];