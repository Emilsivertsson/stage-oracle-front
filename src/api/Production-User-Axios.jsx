import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const productionURL = import.meta.env.VITE_PRODUCTION_API_URL;

export const getJWT = () => {
    return cookies.get("jwt");
}

export const getUsername = () => {
    return cookies.get("username");

}

export const registerUser = async (username, password) => {
    try {
        const response = await axios.post(`${productionURL}/production-api/auth/register`, {
            username: username,
            password: password
        });

        return { success: true, data: response.data };
    } catch (error) {
        console.log(error);
        return { success: false, message: error.response?.data || error.message || "Registration failed" };
    }
}

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${productionURL}/production-api/auth/login`, {
            username: username,
            password: password
        });
        cookies.set("jwt", response.data.jwt, {path: "/"});
        cookies.set("username", response.data.username, {path: "/"});

        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response.data || error.message || "Login failed" };
    }
}