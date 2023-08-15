import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";

export default function AuthModel({ type, setError }) {
    let [isOpen, setIsOpen] = useState(false);
    let { login, isLoadingL, err } = useLogin();
    let { signup, isLoadingR, error } = useRegister();
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function onSubmitLogin(data) {
        login(data);
        if (err) {
            setError(err);
        } else {
            closeModal();
        }
    }

    function onSumbitRegister(data) {
        signup(data);
        closeModal();
        if (error) setError(error);
    }

    return (
        <>
            <div className=" flex items-center justify-center w-full">
                <button
                    type="button"
                    onClick={openModal}
                    className={`w-full ${
                        type === "login"
                            ? "bg-transpent border-[0.5px] border-white text-blue-500/80"
                            : "bg-blue-500/80 text-white"
                    } px-4 py-2 text-sm rounded-full font-semibold  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    {type === "login" ? "Sign in" : "Create account"}
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all border"
                                    style={{
                                        borderColor: "rgb(83, 100, 113)",
                                    }}
                                >
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex flex-row justify-between items-center"
                                    >
                                        <div></div>
                                        <div>
                                            <img
                                                className="w-8 h-8 object-contain ml-9"
                                                src={Logo}
                                                alt=""
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-6 h-6"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        {err && (
                                            <div
                                                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-2"
                                                role="alert"
                                            >
                                                <strong className="font-bold">
                                                    Error!{" "}
                                                </strong>
                                                <span className="block sm:inline">
                                                    {err}
                                                </span>
                                            </div>
                                        )}

                                        {type === "login" ? (
                                            <form
                                                className="text-sm text-gray-500 flex flex-col gap-2"
                                                onSubmit={handleSubmit(
                                                    onSubmitLogin
                                                )}
                                            >
                                                <input
                                                    className="px-4 py-3 rounded-md bg-transparent border"
                                                    style={{
                                                        borderColor:
                                                            "rgb(83, 100, 113)",
                                                    }}
                                                    type="text"
                                                    placeholder="Enter your username"
                                                    {...register("username", {
                                                        required: true,
                                                    })}
                                                />
                                                <input
                                                    className="px-4 py-3 rounded-md bg-transparent border"
                                                    style={{
                                                        borderColor:
                                                            "rgb(83, 100, 113)",
                                                    }}
                                                    type="password"
                                                    placeholder="Password"
                                                    {...register("password", {
                                                        required: true,
                                                    })}
                                                />
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 rounded-full bg-blue-400 font-medium w-full text-white"
                                                >
                                                    Login
                                                </button>
                                            </form>
                                        ) : (
                                            <form
                                                className="text-sm text-gray-500 flex flex-col gap-2"
                                                onSubmit={handleSubmit(
                                                    onSumbitRegister
                                                )}
                                            >
                                                <input
                                                    className="px-4 py-3 rounded-md bg-transparent border"
                                                    style={{
                                                        borderColor:
                                                            "rgb(83, 100, 113)",
                                                    }}
                                                    type="text"
                                                    placeholder="Enter your username"
                                                    {...register("username", {
                                                        required: true,
                                                    })}
                                                />
                                                <input
                                                    className="px-4 py-3 rounded-md bg-transparent border"
                                                    style={{
                                                        borderColor:
                                                            "rgb(83, 100, 113)",
                                                    }}
                                                    type=" email"
                                                    placeholder="Enter your email"
                                                    {...register("email", {
                                                        required: true,
                                                    })}
                                                />
                                                <input
                                                    className="px-4 py-3 rounded-md bg-transparent border"
                                                    style={{
                                                        borderColor:
                                                            "rgb(83, 100, 113)",
                                                    }}
                                                    type="password"
                                                    placeholder="Password"
                                                    {...register("password", {
                                                        required: true,
                                                    })}
                                                />
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 rounded-full bg-blue-400 font-medium w-full text-white"
                                                >
                                                    Register
                                                </button>
                                            </form>
                                        )}
                                    </div>

                                    <div className="mt-4"></div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
