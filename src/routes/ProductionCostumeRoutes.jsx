

import UpdateCostume from "../production-costumes/UpdateCostume.jsx";
import DeleteCostume from "../production-costumes/DeleteCostume.jsx";
import CreateCostume from "../production-costumes/CreateCostume.jsx";
import CostumesHome from "../production-costumes/CostumesHome.jsx";

export const routes = [
    { path: '/costumesHome', element: <CostumesHome />},
    { path: '/createCostume', element: <CreateCostume />},
    { path: '/deleteCostume', element: <DeleteCostume />},
    { path: '/updateCostume', element: <UpdateCostume />},
];