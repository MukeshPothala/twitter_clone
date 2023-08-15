import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { useAuthContext } from "../hooks/useAuthContext";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const [menuBar, setMenuBar] = useState(false);
    const showMobileView = () => {
        setMenuBar(!menuBar);
    };
    function handleLogout() {
        logout();
    }
    return (
        <div className="min-w-[70px] py-[6px] flex flex-col">
            <nav className="w-full flex items-center justify-between px-6">
                <NavLink to="/" className="flex flex-row items-center">
                    <img className="w-8 h-8 object-cover" src={Logo} />
                    <span className="text-4xl font-bold ml-2">Tweets</span>
                </NavLink>
                <div className="hidden md:flex flex-row items-center">
                    <span className="text-medium mr-1">{user.username}</span>
                    {user.profile_photo ? (
                        <img />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    )}
                </div>
                <div className="md:hidden">
                    {menuBar ? (
                        <button onClick={showMobileView}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    ) : (
                        <button onClick={showMobileView}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </nav>
            <div
                className={`${
                    menuBar === false ? `hidden` : `flex`
                } md:hidden flex-col px-2 mt-2`}
            >
                <NavLink
                    to={"/explore"}
                    className="py-2 hover:bg-slate-500 rounded-lg px-4"
                >
                    Explore
                </NavLink>
                <NavLink
                    to="/settings"
                    className="py-2  hover:bg-slate-500 rounded-lg px-4"
                >
                    Settings
                </NavLink>
                <NavLink
                    to="/bookmarks"
                    className="py-2  hover:bg-slate-500 rounded-lg px-4"
                >
                    Bookmarks
                </NavLink>
                <NavLink
                    to="/profile"
                    className="flex flex-row items-center py-2  hover:bg-slate-500 rounded-lg px-4"
                >
                    {user.profile_photo ? (
                        <img />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    )}
                    <span className="text-medium ml-1">{user.username}</span>
                </NavLink>
                <button className="py-2 px-4 text-left">Create Post</button>
                <button
                    onClick={handleLogout}
                    className="bg-blue-400 text-white font-medium rounded-full py-2 px-4"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
