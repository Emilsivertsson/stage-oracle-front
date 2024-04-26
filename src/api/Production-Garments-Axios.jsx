import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});

const productionURL = import.meta.env.VITE_PRODUCTION_API_URL;

export const getAllCostumesGarments = async (costumeId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/garments/costume/${costumeId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get costume failed" };
    }
}

export const getAllGarmentsInProduction = async (productionId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/productions/allGarmentsTodo/${productionId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data || [] };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message };
    }
}

export const getOneGarment = async (garmentId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/production-api/garments/${garmentId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get costume failed" };
    }
}

export const createGarment = async (costumeId, garment) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.post(`${productionURL}/production-api/garments/${costumeId}`, garment, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Create costume failed" };
    }
}

export const updateGarment = async (garmentId, garment) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${productionURL}/production-api/garments/${garmentId}`, garment, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Update costume failed" };
    }
}

export const toggleGarmentStatus = async (garmentId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.patch(`${productionURL}/production-api/garments/${garmentId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message };
    }
}

export const deleteGarment = async (garmentId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/production-api/garments/${garmentId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Delete garment failed" };
    }
}