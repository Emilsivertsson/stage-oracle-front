import React from 'react';

import AdminRegistrationHome from "../registration-admin/adminRegistrationHome.jsx";
import UpdateUser from "../registration-admin/adminRegistrationUpdateUser.jsx";
import AdminRegistrationDeleteUser from "../registration-admin/AdminRegistrationDeleteUser.jsx";

export const routes = [
    { path: '/adminHome', element: <AdminRegistrationHome />},
    { path: '/updateUser/:userId', element: <UpdateUser />},
    { path: '/deleteUser/:userId', element: <AdminRegistrationDeleteUser />},
];