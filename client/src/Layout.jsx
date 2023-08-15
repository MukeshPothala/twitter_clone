import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

const Layout = () => {
    return (
        <div className="bg-black text-white h-screen flex flex-col">
            <Navbar />
            <main className="flex flex-row items-center md:px-6 pt-2 h-[calc(100vh-70px)] ">
                <Sidebar />
                <div className="md:w-1/2 w-full md:border-l-[0.5px] md:border-r-[0.5px] border-slate-500 h-full px-2 overflow-y-scroll no-scrollbar">
                    <Outlet />
                </div>
                <Rightbar />
            </main>
        </div>
    );
};

export default Layout;
