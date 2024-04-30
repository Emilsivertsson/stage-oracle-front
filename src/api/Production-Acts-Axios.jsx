import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});

const productionURL = import.meta.env.VITE_PRODUCTION_API_URL;

export const getAllPerformerActs = async (performerId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/acts/performer/${performerId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );

        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get registration-performer failed" };
    }
}

export const getOneAct = async (actId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/acts/${actId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );

        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get registration-performer failed" };
    }
}

export const createAct = async (performerId, act) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.post(`${productionURL}/production-api/acts/${performerId}`, act, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );

        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Create production failed" };
    }
}

export const updateAct = async (actId, act) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${productionURL}/production-api/acts/${actId}`, act, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );

        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Update act failed" };
    }
}

export const deleteAct = async (actId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/production-api/acts/${actId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );

        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Delete act failed" };
    }
}