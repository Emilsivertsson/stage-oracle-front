

import AdminRegistrationHome from "../registration-admin/adminRegistrationHome.jsx";
import UpdateRegistrationUser from "../registration-admin/adminRegistrationUpdateUser.jsx";
import AdminRegistrationDeleteUser from "../registration-admin/AdminRegistrationDeleteUser.jsx";

export const routes = [
    { path: '/adminHome', element: <AdminRegistrationHome />},
    { path: '/updateUser', element: <UpdateRegistrationUser />},
    { path: '/deleteUser', element: <AdminRegistrationDeleteUser />},
];