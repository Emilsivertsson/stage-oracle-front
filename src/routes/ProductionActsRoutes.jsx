
import ActsHome from "../production-acts/ActsHome.jsx";
import DeleteAct from "../production-acts/DeleteAct.jsx";
import UpdateAct from "../production-acts/UpdateAct.jsx";
import CreateAct from "../production-acts/CreateAct.jsx";

export const routes = [
    { path: '/actsHome', element: <ActsHome />},
    { path: '/deleteAct', element: <DeleteAct />},
    { path: '/updateAct', element: <UpdateAct />},
    { path: '/createAct', element: <CreateAct />},
];