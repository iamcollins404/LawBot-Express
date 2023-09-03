import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLogo from '../../assets/images/logos/cancer360logo.png'

const MainLayout = (props) => {
    const location = useLocation()
    const { window, children } = props;

    const setTextColor = (path) => {
        if (location.pathname === path) {
            return "textColors"
        }
    }

    const setSvgColor = (path) => {
        if (location.pathname === path) {
            return "textColors"
        }
    }

    const setBorderColor = (path) => {
        if (location.pathname === path) {
            return "border-r-4 border-indigo-300"
        }
    }

    const navItems = [
        {
            "navTitle": "Dashboard",
            "linkTo": "/app",
            "svgPath": <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        },
        {
            "navTitle": "Explain Docs",
            "linkTo": "/app/explaindoc",
            "svgPath": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>

        },
        {
            "navTitle": "Translate Docs",
            "linkTo": "/app/translatedoc",
            "svgPath": <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        },
        {
            "navTitle": "Generate Docs",
            "linkTo": "/app/generatedoc",
            "svgPath": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        },
        {
            "navTitle": "Settings",
            "linkTo": "/app/settings",
            "svgPath": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

        }
    ]

    return (
        <div>
            <div className="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0 sidebarArea">
                <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-gray-900 ">
                    <div className="flex items-center flex-shrink-0 px-4">
                        <Link to="/app">
                            <img className="w-auto h-8 MainLogo" src="https://seeklogo.com/images/L/law-maruf-logo-98877EFA06-seeklogo.com.png" alt="" />
                        </Link>
                    </div>

                    <div className="flex flex-col flex-1 mt-36">
                        <div className="space-y-4">
                            {navItems.map((item, index) => (
                                <Link to={item.linkTo}>
                                    <nav className={`flex-1 space-y-2 ${setBorderColor(`${item.linkTo}`)}`}>
                                        <div className='mb-10 divNav'>
                                            <p className={`text-indigo-100 navIcons mb-1 ${setSvgColor(`${item.linkTo}`)}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    {item.svgPath}
                                                </svg>
                                            </p>

                                            <p className={`text-indigo-100 navIcons ${setTextColor(`${item.linkTo}`)}`}>
                                                {item.navTitle}
                                            </p>
                                        </div>
                                    </nav>
                                </Link>
                            ))}
                        </div>

                        <div className="pb-10 mt-auto">
                            <Link to="/app/signout">
                                <nav className={`flex-1 space-y-2 ${setBorderColor(`/app/signout`)}`}>
                                    <div className='mb-10'>
                                        <p className={`text-indigo-100 navIcons mb-1 ${setSvgColor(`/app/signout`)}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                            </svg>

                                        </p>

                                        <p className={`text-indigo-100 navIcons  ${setTextColor(`/app/signout`)}`}>
                                            Signout
                                        </p>
                                    </div>
                                </nav>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col flex-1 overflow-x-hidden xl:pl-28">
                <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
                    <div className="flex flex-1 px-4 sm:px-6 md:px-8">
                        <div className="flex items-center justify-between flex-1">
                            <div className="flex items-center -m-2 xl:hidden">
                                <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex-1 hidden max-w-xs ml-8 mr-auto xl:ml-0 lg:block">
                                <div className="relative">
                                    <Link to="/app">
                                        <span class="inline-flex items-center">
                                            <button type="button" class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                </svg>
                                            </button>

                                            <h3 class="primaryLogo">
                                                LawBot Express
                                            </h3>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center ml-auto space-x-6">
                                <div className="relative">
                                    <Link to="/app/scanresults">
                                        <button type="button" className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 
                                            1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                            </svg>
                                        </button>
                                    </Link>

                                    <Link to="/app/settings">
                                        <button type="button" className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 
                                            0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 
                                            1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </button>
                                    </Link>

                                </div>

                                <button type="button" className="flex items-center max-w-xs rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                    <img className="object-cover bg-gray-300 rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <main>
                    <div className="py-6">
                        <div className="px-4 mx-auto sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default MainLayout;