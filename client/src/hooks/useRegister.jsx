import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useRegister = () => {
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (data) => {
        setIsLoading(true);
        setErr(null);

        await axios
            .post("http://localhost:4000/api/auth/register", data)
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
    return { signup, isLoading, err };
};
