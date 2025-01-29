import { useState, useEffect } from "react";
import apiClient from "./apiClient.js";

function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            apiClient
                .get("/auth/validate-token", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(() => {
                    setIsAuthenticated(true);
                })
                .catch((error) => {
                    if (error.response?.status === 401) {
                        localStorage.removeItem("token");
                        setIsAuthenticated(false);
                    }
                })
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);


    return { isAuthenticated, isLoading, setIsAuthenticated };
}

export default useAuth;
