import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();


const registrationURL = import.meta.env.VITE_REGISTRATION_API_URL;

export const getOneUser = async (userId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${registrationURL}/admin/${userId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get one user failed" };
    }
}

export const getAllUsers = async () => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.get(`${registrationURL}/admin/`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Get all users failed" };
    }
}

export const updateUser = async (userId, user) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.put(`${registrationURL}/admin/${userId}`, user, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Update user failed" };
    }
}

export const deleteUser = async (userId) => {
    const jwt = cookies.get("jwt");
    try {
        const response = await axios.delete(`${registrationURL}/admin/${userId}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        console.log(response);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response?.data || error.message || "Delete user failed" };
    }
}

