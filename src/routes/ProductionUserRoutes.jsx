import React from 'react';

import LoginProductionUser from "../production-user/LoginProductionUser.jsx";
import RegisterProductionUser from "../production-user/RegisterProductionUser.jsx";

export const routes = [
    { path: '/loginProductionUser', element: <LoginProductionUser />},
    { path: '/registerProductionUser', element: <RegisterProductionUser />},
];