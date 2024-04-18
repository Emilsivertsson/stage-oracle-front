
import ActsHome from "../production-acts/ActsHome.jsx";
import DeleteAct from "../production-acts/DeleteAct.jsx";
import UpdateAct from "../production-acts/UpdateAct.jsx";
import CreateAct from "../production-acts/CreateAct.jsx";

export const routes = [
    { path: '/actsHome/:performerId', element: <ActsHome />},
    { path: '/deleteAct/:actId/:performerId', element: <DeleteAct />},
    { path: '/updateAct/:actId/:performerId', element: <UpdateAct />},
    { path: '/createAct/:performerId', element: <CreateAct />},
];