import { lazy, Suspense } from 'react';

import RegisterPerformer from "../registration-performer/RegisterPerformer.jsx";
import LoginPerformer from "../registration-performer/LoginPerformer.jsx";
import PerformerHome from "../registration-performer/PerformerHome.jsx";
import PerformerProfile from "../registration-performer/PerformerProfile.jsx";
import PerformerProfileUpdate from "../registration-performer/UpdatePerformerProfile.jsx";
import PerformerMeasurementsUpdate from "../registration-performer/UpdatePerformerMeasurments.jsx";
import DeleteAccount from "../registration-performer/DeleteAccount.jsx";
import Logout from "../registration-performer/Logout.jsx";

const Terms = lazy(() => import('../registration-performer/Terms.jsx'));

export const routes = [
    { path: '/performerHome', element: <PerformerHome /> },
    { path: '/performerProfile', element: <PerformerProfile /> },
    { path: '/loginPerformer', element: <LoginPerformer /> },
    { path: '/registerPerformer', element: <RegisterPerformer /> },
    { path: '/profileUpdate', element: <PerformerProfileUpdate /> },
    { path: '/measurementsUpdate', element: <PerformerMeasurementsUpdate />},
    { path: '/deleteAccount', element: <DeleteAccount />},
    { path: '/terms', element: <Terms />},
    { path: '/logout', element: <Suspense fallback={<div>Loading...</div>}><Logout /></Suspense> },
];