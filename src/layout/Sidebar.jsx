import {useState} from 'react';
import {Link} from "react-router-dom";

function Sidebar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);

    return (
        <div>
            <aside
                className={`z-20 ${sidebarOpen ? 'block' : 'hidden'} w-64 overflow-y-auto bg-white md:block flex-shrink-0`}
            >
                <div className="py-4 text-gray-500">
                    <Link className="ml-6 text-lg font-bold text-gray-800 flex items-center" to="/">
                        <img src="/logo.png" alt="Logo" className="mr-2 h-8"/>
                        CareBridge
                    </Link>
                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <span
                                className="absolute inset-y-0 left-0 w-1 bg-green-600 rounded-tr-lg rounded-br-lg"
                                aria-hidden="true"
                            ></span>
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-green-600"
                                to="/"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    ></path>
                                </svg>
                                <span className="ml-4">Dashboard</span>
                            </Link>
                        </li>
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-600"
                                to="/caregiver"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    ></path>
                                </svg>
                                <span className="ml-4">CareGiver</span>
                            </Link>
                        </li>
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-600"
                                to="/careTaker/list"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    ></path>
                                </svg>
                                <span className="ml-4">CareTaker</span>
                            </Link>
                        </li>
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-600"
                                to="/qna/list"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    ></path>
                                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                                <span className="ml-4">QNA</span>
                            </Link>
                        </li>
                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-600"
                                to="/faq"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                    ></path>
                                </svg>
                                <span className="ml-4">FAQ</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <button
                                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-green-600"
                                onClick={() => setIsPagesMenuOpen(!isPagesMenuOpen)}
                                aria-haspopup="true"
                            >
                                <span className="inline-flex items-center">
                                    <span className="ml-4">Pages</span>
                                </span>
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            {/* 페이지 메뉴 열기/닫기 */}
                            {isPagesMenuOpen && (
                                <ul
                                    className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50"
                                    aria-label="submenu"
                                >
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-green-600">
                                        <a className="w-full" href="/pages/login">Login</a>
                                    </li>
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-green-600">
                                        <a className="w-full" href="/pages/create-account">Create account</a>
                                    </li>
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-green-600">
                                        <a className="w-full" href="/pages/forgot-password">Forgot password</a>
                                    </li>
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-green-600">
                                        <a className="w-full" href="/pages/404">404</a>
                                    </li>
                                    <li className="px-2 py-1 transition-colors duration-150 hover:text-green-600">
                                        <a className="w-full" href="/pages/blank">Blank</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <div className="px-6 my-6">
                        <button
                            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
                        >
                            Create account
                            <span className="ml-2" aria-hidden="true">+</span>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;