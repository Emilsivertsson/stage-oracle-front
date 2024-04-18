import React from 'react';

import AdminProductionDeleteUser from "../production-admin/AdminProductionDeleteUser.jsx";
import AdminProductionUpdateUser from "../production-admin/adminProductionUpdateUser.jsx";
import AdminProductionHome from "../production-admin/adminProductionHome.jsx";

export const routes = [
    { path: '/adminProductionHome', element: <AdminProductionHome />},
    { path: '/updateUser/:userId', element: <AdminProductionUpdateUser />},
    { path: '/deleteUser/:userId', element: <AdminProductionDeleteUser />},
];