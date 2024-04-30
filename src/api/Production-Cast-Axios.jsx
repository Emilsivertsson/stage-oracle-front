import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});

const productionURL = import.meta.env.VITE_PRODUCTION_API_URL;

export const getAllManifestCasts = async (manifestId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/casts/manifest/${manifestId}`, {
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

export const getOneManifestCast = async (manifestId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/casts/${manifestId}`, {
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

export const createManifestCast = async (manifestId, cast) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.post(`${productionURL}/production-api/casts/${manifestId}`, cast, {
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

export const updateManifestCast = async (manifestId, cast) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${productionURL}/production-api/casts/${manifestId}`, cast, {
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

export const deleteManifestCast = async (manifestId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/production-api/casts/${manifestId}`, {
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