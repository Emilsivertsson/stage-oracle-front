import React from 'react';

import CreateManifest from "../production-manifests/CreateManifest.jsx";
import UpdateManifest from "../production-manifests/UpdateManifest.jsx";
import DeleteManifest from "../production-manifests/DeleteManifest.jsx";
import ManifestHome from "../production-manifests/ManifestHome.jsx";

export const routes = [
    { path: '/createManifest/:productionId', element: <CreateManifest />},
    { path: '/updateManifest/:manifestId/:productionId', element: <UpdateManifest />},
    { path: '/deleteManifest/:manifestId/:productionId', element: <DeleteManifest />},
    { path: '/manifestHome/:productionId', element: <ManifestHome />},
];