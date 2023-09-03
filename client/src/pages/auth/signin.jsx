import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24 authPage">
            <div className="absolute bottom-0 left-0 transform -translate-x-12 translate-y-80 lg:translate-x-0">
                <svg className="blur-3xl filter" width="835" height="525" viewBox="0 0 835 525"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M215.676 295.092C107.631 187.047 -91.9978 228.999 50.4835 86.5174C192.965 -55.9639 705.222 -1.77906 813.267 106.266C921.312 214.311 584.231 335.302 441.75 477.783C299.268 620.265 323.722 403.137 215.676 295.092Z"
                        fill="url(#paint0_linear_537_1369)" />
                    <defs>
                        <linearGradient id="paint0_linear_537_1369" x1="861.287" y1="154.286" x2="295.051" y2="576.839"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0%" />
                            <stop offset="100%" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute inset-0">
                <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
            </div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto gap-y-8 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24 lg:max-w-6xl">
                    <div className="overflow-hidden bg-blue-950 rounded-xl border border-indigo-400">
                        <div className="p-6 sm:py-8 sm:px-9">
                            <h2 className="text-2xl font-normal text-white sm:text-3xl lg:text-4xl">
                                Sign in to LawBot Express
                            </h2>
                            <p className="mt-4 text-lg font-normal text-gray-400">
                                Login below  to access the portal's full features. The portal allows you to explore legal features.
                            </p>

                            <form action="#" method="POST" className="mt-8 space-y-4">
                                <div>
                                    <label for="" className="sr-only">
                                        User ID
                                    </label>
                                    <div>
                                        <input type="text" name="" id="" placeholder="Organization ID"
                                            className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                    </div>
                                </div>

                                <div>
                                    <label for="" className="sr-only">
                                        Password
                                    </label>
                                    <div>
                                        <input type="password" name="" id="" placeholder="Password"
                                            className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input type="checkbox" name="terms" id="terms" className="w-5 h-5 bg-gray-700 border-gray-800 rounded focus:ring-offset-black text-cyan-500 focus:ring-cyan-500" />
                                        <label for="terms" className="block ml-3 text-sm font-normal text-gray-300">
                                            Remember me
                                        </label>
                                    </div>

                                    <div>
                                        <a href="" title=""
                                            className="text-sm font-normal text-gray-300 transition-all duration-200 hover:text-white">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <Link to="/app">
                                        <button type="button"
                                            className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-black transition-all duration-200 bg-white border border-indigo-400 rounded-md hover:opacity-80">
                                            Proceed Sign In
                                        </button>
                                    </Link>
                                </div>
                            </form>

                            <div className="relative mt-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-900"></div>
                                </div>
                                <div className="relative flex justify-center ">
                                    <span className="px-2 text-sm font-normal text-gray-500 bg-black">
                                        Or
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button type="submit" className="relative inline-flex items-center justify-center w-full px-10 py-4 text-base font-normal text-white transition-all duration-200 bg-transparent border border-indigo-400 rounded-md hover:bg-gray-900">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>

                                    </div>
                                    Create An Account
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 xl:px-12 xl:gap-6">
                        <div className="overflow-hidden bg-gray-900 rounded-full shadow-md border border-indigo-400">
                            <div className="p-4">
                                <div className="flex itme-start md:items-center">
                                    <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://img.icons8.com/?size=512&id=32629&format=png"
                                        alt="" />
                                    <blockquote className="ml-3">
                                        <p className="text-lg font-normal text-white">
                                            "Empowering Genrative AI and legal to provide quality services."
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-gray-900 rounded-full shadow-md border border-indigo-400">
                            <div className="p-4">
                                <div className="flex itme-start md:items-center">
                                    <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://img.icons8.com/?size=512&id=OLf3WK9ioebI&format=png"
                                        alt="" />
                                    <blockquote className="ml-3">
                                        <p className="text-lg font-normal text-white">
                                            "Uniting legal & AI to save legal costs."
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-gray-900 rounded-full shadow-md border border-indigo-400">
                            <div className="p-4">
                                <div className="flex itme-start md:items-center">
                                    <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://img.icons8.com/?size=512&id=32629&format=png"
                                        alt="" />
                                    <blockquote className="ml-3">
                                        <p className="text-lg font-normal text-white">
                                            "In the fight against legal problems, our mission is clear: Harnessing innovation to legal problems."
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-gray-900 rounded-full shadow-md border border-indigo-400">
                            <div className="p-4">
                                <div className="flex itme-start md:items-center">
                                    <img className="object-cover w-12 h-12 rounded-full shrink-0" src="https://img.icons8.com/?size=512&id=456Pmlq-M24T&format=png" alt="" />
                                    <blockquote className="ml-3">
                                        <p className="text-lg font-normal text-white">
                                            "From pixels to legal, our purpose is to offer world class legal convenience."
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Signin;