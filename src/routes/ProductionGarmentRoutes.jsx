

import GarmentsHome from "../production-garments/GarmentsHome.jsx";
import CreateGarment from "../production-garments/CreateGarment.jsx";
import UpdateGarment from "../production-garments/UpdateGarment.jsx";
import DeleteGarment from "../production-garments/DeleteGarment.jsx";
import GarmentTODos from "../production-garments/GarmentTODos.jsx";

export const routes = [
    { path: '/garmentsHome', element: <GarmentsHome />},
    { path: '/createGarment', element: <CreateGarment />},
    { path: '/updateGarment', element: <UpdateGarment />},
    { path: '/deleteGarment', element: <DeleteGarment />},
    { path: '/garmentToDos', element: <GarmentTODos />},
];

