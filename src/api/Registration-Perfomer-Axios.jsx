import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const registrationURL = import.meta.env.VITE_REGISTRATION_API_URL;

export const getUserName = () => {
    return cookies.get("username");

}

export const registerPerformer = async (username, password) => {
    try {
        const response = await axios.post(`${registrationURL}/registration-api/auth/register`, {
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
        const response = await axios.post(`${registrationURL}/registration-api/auth/login`, {
            username: username,
            password: password
        });
        cookies.set("jwt", response.data.jwt, {path: "/"});
        cookies.set("username", response.data.username, {path: "/"});
        console.log(cookies.get("jwt"));
        console.log(cookies.get("username"));
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response.data || error.message || "Login failed" };
    }
}

export const getOnePerformer = async () => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${registrationURL}/registration-api/performer`, {
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

export const updatePerformerProfile = async (performer) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${registrationURL}/registration-api/performer`, performer, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        return {success: true, data: response.data};
    } catch (error) {
        console.error(error);
        return {success: false, message: error.response?.data || error.message || "Update registration-performer failed"};
    }
}

export const updatePerformerMeasurements = async (measurements) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${registrationURL}/registration-api/performer/measurements/`, measurements, {
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
        const response = await axios.delete(`${registrationURL}/registration-api/performer`, {
                headers: {"Authorization": `Bearer ${jwt}`}
            }
        );
        cookies.remove("jwt");
        console.log(response);
        return {success: true, data: response.data};
    } catch (error) {
        console.error(error);
        return {success: false, message: error.response?.data || error.message || "Delete account failed"};
    }
}