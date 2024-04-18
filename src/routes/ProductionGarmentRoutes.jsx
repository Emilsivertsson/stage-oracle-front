import React from 'react';

import GarmentsHome from "../production-garments/GarmentsHome.jsx";
import CreateGarment from "../production-garments/CreateGarment.jsx";
import UpdateGarment from "../production-garments/UpdateGarment.jsx";
import DeleteGarment from "../production-garments/DeleteGarment.jsx";

export const routes = [
    { path: '/garmentsHome/:costumeId', element: <GarmentsHome />},
    { path: '/createGarment/:costumeId', element: <CreateGarment />},
    { path: '/updateGarment/:garmentId/:costumeId', element: <UpdateGarment />},
    { path: '/deleteGarment/:garmentId/:costumeId', element: <DeleteGarment />},
];

