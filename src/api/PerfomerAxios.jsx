import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const performerURL = "http://localhost:8080";


export const registerPerformer = async (username, password) => {
    try {
        const response = await axios.post(`${performerURL}/auth/register`, {
            username: username,
            password: password
        });
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.log(error);
        return { success: false, message: error.response?.data || error.message || "Registration failed" };
    }
}

export const loginPerformer = async (username, password) => {
    try {
        const response = await axios.post(`${performerURL}/auth/login`, {
            username: username,
            password: password
        });
        cookies.set("jwt", response.data.jwt, {path: "/"});
        console.log(cookies.get("jwt"));
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Login failed" };
    }
}

export const getOnePerformer = async () => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${performerURL}/performer`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get performer failed" };
    }
}

export const updatePerformerProfile = async (performer) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${performerURL}/performer`, performer, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        return {success: true, data: response.data};
    } catch (error) {
        console.error(error);
        return {success: false, message: error.response?.data || error.message || "Update performer failed"};
    }
}

export const updatePerformerMeasurements = async (measurements) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${performerURL}/performer/measurements/`, measurements, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        return {success: true, data: response.data};
    } catch (error) {
        console.error(error);
        return {success: false, message: error.response?.data || error.message || "Update measurements failed"};
    }
}

export const logoutPerformer = async () => {
    try {
        cookies.remove("jwt");
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Logout failed" };
    }
}

export const deleteAccount = async () => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${performerURL}/performer`, {
                headers: {"Authorization": `Bearer ${jwt}`}
            }
        );
        cookies.remove("jwt");
        return {success: true, data: response.data};
    } catch (error) {
        console.error(error);
        return {success: false, message: error.response?.data || error.message || "Delete account failed"};
    }
}