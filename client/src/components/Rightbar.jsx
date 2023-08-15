import React from "react";

const Rightbar = () => {
    return (
        <>
            <div className="md:flex hidden w-1/4 flex-col h-full pl-2 no-scrollbar overflow-y-auto">
                <ul
                    role="list"
                    class="divide-y divide-gray-700 border border-gray-700 px-2 mb-2 rounded-sm"
                >
                    <li class="flex justify-between gap-x-6 py-5">
                        <div class="flex min-w-0 gap-x-4">
                            <img
                                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm font-semibold leading-6 text-white">
                                    Leslie Alexander
                                </p>
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                    leslie.alexander@example.com
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-5">
                        <div class="flex min-w-0 gap-x-4">
                            <img
                                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm font-semibold leading-6 text-white">
                                    Michael Foster
                                </p>
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                    michael.foster@example.com
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-5">
                        <div class="flex min-w-0 gap-x-4">
                            <img
                                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm font-semibold leading-6 text-white">
                                    Dries Vincent
                                </p>
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                    dries.vincent@example.com
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="max-w-sm rounded overflow-hidden border border-gray-700">
                    <div class="px-6 py-2">
                        <div class="font-bold text-xl mb-2">Trendings</div>
                    </div>
                    <div class="px-6 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #photography
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #travel
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #winter
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #Web Development
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #No jobs at vnr
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #Salaar
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #Project K
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #Andhra pradesh
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #telangana
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rightbar;
