import React from 'react';

import CastHome from "../production-casts/CastHome.jsx";
import DeleteCast from "../production-casts/DeleteCast.jsx";
import UpdateCast from "../production-casts/UpdateCast.jsx";
import CreateCast from "../production-casts/CreateCast.jsx";

export const routes = [
    {path: '/castHome/:manifestId', element: <CastHome/>},
    {path: '/deleteCast/:castId/:manifestId', element: <DeleteCast/>},
    {path: '/updateCast/:castId/:manifestId', element: <UpdateCast/>},
    {path: '/createCast/:manifestId', element: <CreateCast/>},
];