import React from 'react';

import UpdateCostume from "../production-costumes/UpdateCostume.jsx";
import DeleteCostume from "../production-costumes/DeleteCostume.jsx";
import CreateCostume from "../production-costumes/CreateCostume.jsx";
import CostumesHome from "../production-costumes/CostumesHome.jsx";

export const routes = [
    { path: '/costumesHome/:actId', element: <CostumesHome />},
    { path: '/createCostume/:actId/', element: <CreateCostume />},
    { path: '/deleteCostume/:costumeId/:actId', element: <DeleteCostume />},
    { path: '/updateCostume/:costumeId/:actId', element: <UpdateCostume />},
];