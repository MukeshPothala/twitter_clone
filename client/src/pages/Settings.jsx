import "@tailwindcss/forms";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

export default function Settings() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    function onFormSubmit(data) {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="space-y-12 mx-2">
                <div className="border-b border-gray-400 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-white">
                        Profile
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be
                        careful what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                        workcation.com/
                                    </span>
                                    <input
                                        type="text"
                                        id="username"
                                        autoComplete="username"
                                        {...register("username")}
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="janesmith"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="about"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                About
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-[0.5px] border-slate-700 p-2 text-gray-400 bg-transparent ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                    {...register("about")}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about yourself.
                            </p>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="photo"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon
                                    className="h-12 w-12 text-gray-300"
                                    aria-hidden="true"
                                />
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    Change
                                </button>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-700 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                    />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-400 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-white">
                        Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Use a permanent address where you can receive mail.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    disabled
                                    className=" block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="phoneNumber"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    autoComplete="phoneNumber"
                                    {...register("phoneNumber")}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-white">
                        Web Links
                    </h2>
                    <p className="my-1 text-sm leading-6 text-gray-400">
                        You can paste url for the profile of git, insta,
                        linkedIn
                    </p>

                    <div className="sm:col-span-2 mb-2">
                        <label
                            htmlFor="instagramLink"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Instagram
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="instagram"
                                autoComplete="instagram"
                                {...register("instagramLink")}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2 mb-2">
                        <label
                            htmlFor="linkedInLink"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            LinkedIN
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="linkedInLink"
                                id="linkedInLink"
                                autoComplete="linkedInLink"
                                {...register("linkedInLink")}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2 mb-2">
                        <label
                            htmlFor="gitLink"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Git
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="gitLink"
                                id="gitLink"
                                autoComplete="gitLink"
                                {...register("gitLink")}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}
