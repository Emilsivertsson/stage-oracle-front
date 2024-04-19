

import AdminProductionDeleteUser from "../production-admin/AdminProductionDeleteUser.jsx";
import AdminProductionUpdateUser from "../production-admin/adminProductionUpdateUser.jsx";
import AdminProductionHome from "../production-admin/adminProductionHome.jsx";

export const routes = [
    { path: '/adminProductionHome', element: <AdminProductionHome />},
    { path: '/updateProductionUser', element: <AdminProductionUpdateUser />},
    { path: '/deleteProductionUser', element: <AdminProductionDeleteUser />},
];