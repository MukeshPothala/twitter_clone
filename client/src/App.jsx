import { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import { useAuthContext } from "./hooks/useAuthContext";
import Layout from "./Layout";
import Settings from "./pages/Settings";

function App() {
    const { user } = useAuthContext();
    const router = createBrowserRouter([
        {
            path: "/",
            element: user ? <Layout /> : <Navigate to="/auth" />,
            errorElement: <div>page not found</div>,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "explore",
                    element: <div>this is explore page</div>,
                },
                {
                    path: "notifications",
                    element: <div>this is messages page</div>,
                },
                {
                    path: "settings",
                    element: <Settings />,
                },
                {
                    path: "bookmarks",
                    element: <div>this is bookmarks page</div>,
                },
                {
                    path: "profile/:id",
                    element: <div>this is profile page</div>,
                },
            ],
        },
        {
            path: "/auth",
            element: !user ? <AuthPage /> : <Navigate to="/" />,
            errorElement: <div>page not found</div>,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
