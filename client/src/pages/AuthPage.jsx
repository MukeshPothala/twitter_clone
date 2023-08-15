import React, { useState } from "react";
import Logo2 from "../assets/logo2.jpeg";
import Logo from "../assets/logo.png";
import AuthModel from "../components/AuthModel";

const AuthPage = () => {
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="md:flex h-screen bg-black text-white">
            <div className="md:block hidden flex-1 h-full">
                <img className="h-full object-fit" src={Logo2} alt="" />
            </div>
            <div className="md:flex-1 h-full p-4 flex flex-col items-center justify-center">
                <img
                    className="block w-10 h-10 object-fill md:hidden"
                    src={Logo}
                    alt=""
                />
                <div className="my-6">
                    <span className="font-bold md:text-7xl text-4xl">
                        Happening now
                    </span>
                </div>
                <div className="mb-4">
                    <span className="font-semibold text-4xl">Join today.</span>
                </div>

                <div className="flex flex-col w-[300px] items-center gap-2">
                    <AuthModel type={"signup"} setError={setError} />
                    <div className="flex flex-row items-center justify-center">
                        <hr className="bg-white w-20" />
                        <span className="mx-[4px]">or</span>
                        <hr className="bg-white w-20" />
                    </div>
                    <AuthModel type={"login"} setError={setError} />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
