import React from 'react';

const Nav = (props) => (
    <nav className="w-full bg-white">
        <div className="container mx-auto">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-8 lg:space-x-0 text-indigo-600">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <div className="-mr-2 flex items-center lg:hidden">
                                <button type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        id="main-menu" aria-haspopup="true">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div><span className="text-xl font-bold">HEALTH EXPLORER</span></div>
                </div>

                <div className="hidden lg:block lg:space-x-4">
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">PROFILE</a>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">JOBS</a>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">PROFESSIONAL NETWORK</a>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">LOUNGE</a>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">SALARY</a>
                </div>

                <div className="flex items-center lg:space-x-8">
                    <div className="hidden lg:block">
                        <a href="#"
                           className="items-center justify-center px-2 py-2 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 hover:text-indigo-900">
                            CREATE JOB
                        </a>
                    </div>
                    <div className="relative">
                        <img className=""
                             src="https://eu.ui-avatars.com/api/?rounded=true&name=John%20Doe&background=3b82f6&color=fff&size=48"
                             alt="#"/>
                        <span
                            className="absolute -top-2 -right-2 border-4 border-white bg-red-500 text-white rounded-2xl px-2 py-0">2</span>
                    </div>
                    <div className="hidden lg:block"><span className="font-medium">LOGOUT</span></div>
                </div>


                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden lg:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto"
                                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                            </div>
                            <div className="-mr-2">
                                <button type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                                <a href="#"
                                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                   role="menuitem">Product</a>

                                <a href="#"
                                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                   role="menuitem">Features</a>

                                <a href="#"
                                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                   role="menuitem">Marketplace</a>

                                <a href="#"
                                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                   role="menuitem">Company</a>
                            </div>
                            <div role="none">
                                <a href="#"
                                   className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                   role="menuitem">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Nav;
