import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});

const productionURL = import.meta.env.VITE_PRODUCTION_API_URL;

export const getAllActsCostumes = async (actId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/costumes/act/${actId}`, {
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

export const getOneCostume = async (costumeId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/costumes/${costumeId}`, {
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

export const createCostume = async (actId, costume) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.post(`${productionURL}/costumes/${actId}`, costume, {
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

export const updateCostume = async (costumeId, costume) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${productionURL}/costumes/${costumeId}`, costume, {
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

export const deleteCostume = async (costumeId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/costumes/${costumeId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Delete costume failed" };
    }
}