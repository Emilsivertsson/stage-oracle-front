import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});


const productionURL = "http://localhost:8081";

export const getProductionsManifests = async (ProductionId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/manifests/production/${ProductionId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get registation-performer failed" };
    }
}

export const getOneProductionManifest = async (id) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/manifests/${id}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get registation-performer failed" };
    }
}

export const createProductionManifest = async (ProductionId, Manifest) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.post(`${productionURL}/manifests/${ProductionId}`,Manifest, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Create production failed" };
    }
}

export const updateProductionManifest = async (manifestId,Manifest) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${productionURL}/manifests/${manifestId}`, Manifest, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Create production failed" };
    }
}

export const deleteProductionManifest = async (manifestId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/manifests/${manifestId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Create production failed" };
    }
}