import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});

const productionURL = import.meta.env.VITE_PRODUCTION_API_URL;

export const getAllProductions = async () => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/productions`, {
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

export const getOneProduction = async (id) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/productions/${id}`, {
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

export const createProduction = async (production) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.post(`${productionURL}/production-api/productions`, production, {
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

export const updateProduction = async (id,production) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${productionURL}/production-api/productions/${id}`, production, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );

        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Update production failed" };
    }
}

export const deleteProduction = async (id) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/production-api/productions/${id}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );

        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Delete production failed" };
    }
}



