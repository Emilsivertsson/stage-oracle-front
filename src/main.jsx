import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './Home.jsx'
import RegisterPerformer from "./registation-performer/RegisterPerformer.jsx";
import LoginPerformer from "./registation-performer/LoginPerformer.jsx";
import RegisterProduction from "./production-user/RegisterProductionUser.jsx";
import LoginProduction from "./production-user/LoginProductionUser.jsx";
import PerformerHome from "./registation-performer/PerformerHome.jsx";
import PerformerProfile from "./registation-performer/PerformerProfile.jsx";
import PerformerProfileUpdate from "./registation-performer/UpdatePerformerProfile.jsx";
import PerformerMeasurementsUpdate from "./registation-performer/UpdatePerformerMeasurments.jsx";
import PageNotFound from "./PageNotFound.jsx";
import LogOut from "./registation-performer/Logout.jsx";
import ProductionHome from "./production-production/ProductionHome.jsx";
import CreateProduction from "./production-production/CreateProduction.jsx";
import UpdateProduction from "./production-production/UpdateProduction.jsx";
import DeleteProduction from "./production-production/DeleteProduction.jsx";
import Layout from "./Layout.jsx";
import DeleteAccount from "./registation-performer/DeleteAccount.jsx";
import Terms from "./registation-performer/Terms.jsx";
import CreateManifest from "./production-manifests/CreateManifest.jsx";
import UpdateManifest from "./production-manifests/UpdateManifest.jsx";
import DeleteManifest from "./production-manifests/DeleteManifest.jsx";
import ManifestHome from "./production-manifests/ManifestHome.jsx";
import CastHome from "./production-casts/CastHome.jsx";
import DeleteCast from "./production-casts/DeleteCast.jsx";
import UpdateCast from "./production-casts/UpdateCast.jsx";
import CreateCast from "./production-casts/CreateCast.jsx";
import CreatePerformer from "./production-performers/CreatePerformer.jsx";
import PerformersHome from "./production-performers/PerformersHome.jsx";
import DeletePerformer from "./production-performers/DeletePerformer.jsx";
import ActsHome from "./production-acts/ActsHome.jsx";
import DeleteAct from "./production-acts/DeleteAct.jsx";
import UpdateAct from "./production-acts/UpdateAct.jsx";
import CreateAct from "./production-acts/CreateAct.jsx";
import UpdateCostume from "./production-costumes/UpdateCostume.jsx";
import DeleteCostume from "./production-costumes/DeleteCostume.jsx";
import CreateCostume from "./production-costumes/CreateCostume.jsx";
import CostumesHome from "./production-costumes/CostumesHome.jsx";
import GarmentsHome from "./production-garments/GarmentsHome.jsx";
import CreateGarment from "./production-garments/CreateGarment.jsx";
import UpdateGarment from "./production-garments/UpdateGarment.jsx";
import DeleteGarment from "./production-garments/DeleteGarment.jsx";
import AdminRegistrationHome from "./registration-admin/adminRegistrationHome.jsx";
import UpdateUser from "./registration-admin/adminRegistrationUpdateUser.jsx";
import AdminRegistrationDeleteUser from "./registration-admin/AdminRegistrationDeleteUser.jsx";
import AdminProductionHome from "./production-admin/adminProductionHome.jsx";
import UpdateProductionUser from "./production-admin/adminProductionUpdateUser.jsx";
import DeleteProductionUser from "./production-admin/AdminProductionDeleteUser.jsx";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <Home />, index: true },
            { path: '/performerHome', element: <PerformerHome /> },
            { path: '/performerProfile', element: <PerformerProfile /> },
            { path: '/loginPerformer', element: <LoginPerformer /> },
            { path: '/registerPerformer', element: <RegisterPerformer /> },
            { path: '/loginProduction', element: <LoginProduction /> },
            { path: '/registerProduction', element: <RegisterProduction /> },
            { path: '/profileUpdate', element: <PerformerProfileUpdate /> },
            { path: '/measurementsUpdate', element: <PerformerMeasurementsUpdate />},
            { path: '/deleteAccount', element: <DeleteAccount />},
            { path: '/logout', element: <LogOut />},
            { path: '/Terms', element: <Terms />},
            { path: '/productionHome', element: <ProductionHome />},
            { path: '/updateProduction/:productionId', element: <UpdateProduction />},
            { path: '/deleteProduction/:productionId', element: <DeleteProduction />},
            { path: '/createProduction', element: <CreateProduction />},
            { path: '/createManifest/:productionId', element: <CreateManifest />},
            { path: '/updateManifest/:manifestId/:productionId', element: <UpdateManifest />},
            { path: '/deleteManifest/:manifestId/:productionId', element: <DeleteManifest />},
            { path: '/manifestHome/:productionId', element: <ManifestHome />},
            { path: '/castHome/:manifestId', element: <CastHome />},
            { path: '/deleteCast/:castId/:manifestId', element: <DeleteCast />},
            { path: '/updateCast/:castId/:manifestId', element: <UpdateCast />},
            { path: '/createCast/:manifestId', element: <CreateCast />},
            { path: '/createPerformer/:castId', element: <CreatePerformer />},
            { path: '/performersHome/:castId', element: <PerformersHome />},
            { path: '/deletePerformer/:performerId/:castId', element: <DeletePerformer />},
            { path: '/actsHome/:performerId', element: <ActsHome />},
            { path: '/deleteAct/:actId/:performerId', element: <DeleteAct />},
            { path: '/updateAct/:actId/:performerId', element: <UpdateAct />},
            { path: '/createAct/:performerId', element: <CreateAct />},
            { path: '/costumesHome/:actId', element: <CostumesHome />},
            { path: '/createCostume/:actId/', element: <CreateCostume />},
            { path: '/deleteCostume/:costumeId/:actId', element: <DeleteCostume />},
            { path: '/updateCostume/:costumeId/:actId', element: <UpdateCostume />},
            { path: '/garmentsHome/:costumeId', element: <GarmentsHome />},
            { path: '/createGarment/:costumeId', element: <CreateGarment />},
            { path: '/updateGarment/:garmentId/:costumeId', element: <UpdateGarment />},
            { path: '/deleteGarment/:garmentId/:costumeId', element: <DeleteGarment />},
            { path: '/adminHome', element: <AdminRegistrationHome />},
            { path: '/updateUser/:userId', element: <UpdateUser />},
            { path: '/deleteUser/:userId', element: <AdminRegistrationDeleteUser />},
            { path: '/adminProductionHome', element: <AdminProductionHome />},
            { path: '/updateProductionUser/:userId', element: <UpdateProductionUser />},
            { path: '/deleteProductionUser/:userId', element: <DeleteProductionUser />},
            { path: '*', element: <PageNotFound />}
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
