import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});

const productionURL = "http://localhost:8081";

export const getAllManifestCasts = async (manifestId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/casts/manifest/${manifestId}`, {
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

export const getOneManifestCast = async (manifestId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/casts/${manifestId}`, {
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

export const createManifestCast = async (manifestId, cast) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.post(`${productionURL}/casts/${manifestId}`, cast, {
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

export const updateManifestCast = async (manifestId, cast) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${productionURL}/casts/${manifestId}`, cast, {
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

export const deleteManifestCast = async (manifestId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/casts/${manifestId}`, {
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