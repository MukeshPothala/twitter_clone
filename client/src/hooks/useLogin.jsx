import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (data) => {
        setIsLoading(true);
        setErr(null);

        await axios
            .post("http://localhost:4000/api/auth/login", data)
            .then((response) => {
                if (!response.ok) {
                    //save the user to localstorage
                    localStorage.setItem("user", JSON.stringify(response.data));
                    //update authcontext
                    dispatch({ type: "LOGIN", payload: response.data });
                    setIsLoading(false);
                    setErr(null);
                } else {
                    setIsLoading(false);
                    setErr(response.data);
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setErr(error.response.data);
            });
    };
    return { login, isLoading, err };
};
