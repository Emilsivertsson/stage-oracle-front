import axios from "axios";
import Cookies from "universal-cookie";
import {getJWT, getUsername} from "./Production-User-Axios.jsx";

const cookies = new Cookies();
cookies.set("JWT", getJWT(), {path: "/"});
cookies.set("Username", getUsername(), {path: "/"});

const productionURL = "http://localhost:8081";



export const getAllPerformersFromRegistry = async (castId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/performers/registry/${castId}`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Create production failed" };
    }
}

export const getAllCastsPerformers = async (castId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${productionURL}/performers/cast/${castId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get registration-performer failed" };
    }
}

export const createPerformer = async (castId, performerId) => {
    const jwt = cookies.get("jwt");
    const username = cookies.get("username");
    try {
        const response = await axios.post(`${productionURL}/performers/${castId}`,
            {
                performerId: performerId,
                username: username
            },
            {
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


export const deletePerformer = async (performerId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${productionURL}/performers/${performerId}`, {
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