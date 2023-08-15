import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export function authReducer(state, action) {
    if (action.type === "LOGIN") {
        return { user: action.payload };
    } else if (action.type === "LOGOUT") {
        return { user: null };
    }
    return state;
}

export function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({ type: "LOGIN", payload: user });
        }
    }, []);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}
