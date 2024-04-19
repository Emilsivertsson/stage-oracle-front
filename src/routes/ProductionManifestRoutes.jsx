

import CreateManifest from "../production-manifests/CreateManifest.jsx";
import UpdateManifest from "../production-manifests/UpdateManifest.jsx";
import DeleteManifest from "../production-manifests/DeleteManifest.jsx";
import ManifestHome from "../production-manifests/ManifestHome.jsx";

export const routes = [
    { path: '/createManifest', element: <CreateManifest />},
    { path: '/updateManifest', element: <UpdateManifest />},
    { path: '/deleteManifest', element: <DeleteManifest />},
    { path: '/manifestHome', element: <ManifestHome />},
];