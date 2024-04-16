import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});

const productionURL = "http://localhost:8081";

export const getAllCostumesGarments = async (costumeId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/garments/costume/${costumeId}`, {
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

export const getOneGarment = async (garmentId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/garments/${garmentId}`, {
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
        const response = await axios.post(`${productionURL}/garments/${costumeId}`, garment, {
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
        const response = await axios.put(`${productionURL}/garments/${garmentId}`, garment, {
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

export const deleteGarment = async (garmentId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/garments/${garmentId}`, {
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