

import CastHome from "../production-casts/CastHome.jsx";
import DeleteCast from "../production-casts/DeleteCast.jsx";
import UpdateCast from "../production-casts/UpdateCast.jsx";
import CreateCast from "../production-casts/CreateCast.jsx";

export const routes = [
    {path: '/castHome', element: <CastHome/>},
    {path: '/deleteCast', element: <DeleteCast/>},
    {path: '/updateCast', element: <UpdateCast/>},
    {path: '/createCast', element: <CreateCast/>},
];