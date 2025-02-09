import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaCartArrowDown } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import icon from "../../src/assets/images/best_electronic_img/web-icon.png";
import { IoIosSearch } from "react-icons/io";

import { useCart } from '../../src/components/cart_data/CartContext.jsx';  // Import the useCart hook

function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const [search, setSearch] = useState("");
    const { state } = useCart();  // Get the cart state from CartContext

    //For serch bar....
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search_product/${search}`);
        setSearch("");  // Reset search after submission
    };

    // Get the total number of items in the cart
    const getTotalItems = () => {
        return state.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };

    // Check login status on page load
    useEffect(() => {
        const userLoggedIn = localStorage.getItem('login');
        setIsLoggedIn(userLoggedIn === 'true');
    }, []);

    // Handle logout action
    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('Users');
        setIsLoggedIn(false);  // Update state to reflect logout
        navigate('/login');    // Redirect to login page
    };

    // navbar links..
    const navItems = (
        <>
            <li>
                <Link to='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link to='contact'>
                    Contact
                </Link>
            </li>
            <li>
                <Link to='/admin_data'>
                    Admin
                </Link>
            </li>
        </>)


    return (
        <div className="max-w-screen-2xl  mx-auto md:px-20 px-1 bg-blue-400 border-b-2 text-white border-blue-500 shadow-md ">
            <div className="navbar gap-2 ">
                {/* logo */}
                <div className="navbar-start ">
                    <Link to="/" className="flex items-center gap-1">
                        <img src={icon} alt="logo" className="h-10 w-10 md:w-14 md:h-14 object-contain transition-transform transform hover:scale-110" />
                        <p className="text-sm md:text-xl font-bold text-white">E-Shop</p>
                    </Link>
                </div>

                <div className="navbar-end md:gap-3">
                    {/* search bar */}
                    <form onSubmit={submitHandler} className='search_bar hidden md:block'>
                        <label className=" w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  flex items-center gap-2">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="grow focus:outline-none"
                                placeholder="Search" />
                            <button className="cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70 text-blue-800 ">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </label>
                    </form>

                    {/* links contact & about */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-1">
                            {navItems}
                        </ul>
                    </div>
                    {/* search bar for mobile*/}
                    <div className="dropdown dropdown-end md:hidden px-1 mb-1">
                        <div tabIndex={0} role="button" className="font-bold text-2xl text-center"><IoIosSearch /></div>
                        <ul tabIndex={0} className="dropdown-content menu">
                            <form onSubmit={submitHandler} className='search_bar md:hidden mb-1  bg-white text-black'>
                                <label className=" w-46 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="grow focus:outline-none w-36"
                                        placeholder="Search...." />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </form>
                        </ul>
                    </div>

                    {/* Login & Admin on mobile */}
                    <div className="md:hidden">
                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" ><FaUserCircle className="text-xl" />
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black">
                                    <li> Account: </li><hr />
                                    <span className="ms-12 justify-center text-center ">
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/admin_data'>Admin</Link></li>
                                    </span>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Cart Button */}
                    <div className="px-1 md:px-2 flex justify-center items-center">
                        <div className="indicator cursor-pointer px-1">
                            <span className="indicator-item badge badge-secondary p-2  size-2 md:size-5 ">
                                {getTotalItems()}
                            </span>
                            <Link to="/cart_data">
                                <span className="text-xl md:text-3xl">
                                    <FaCartArrowDown />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Login and Admin on laptop/tablet */}
                    <div >

                        {/* Conditional Buttons (Login / Logout) */}
                        {isLoggedIn ? (
                            <div className="flex flex-row gap-2">
                                {/* Logout Button */}
                                <div className="hidden md:block">
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-600 text-white px-1 py-1 md:px-3 md:py-2 rounded-md hover:bg-red-700 duration-200 cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-row gap-2">
                                {/* Login Button */}
                                <div className="hidden md:block">
                                    <button className="bg-black text-white px-1 py-1 md:px-3 md:py-2 rounded-md hover:bg-slate-700 duration-200 cursor-pointer">
                                        <Link to="/login">Login</Link>
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Mobile menu */}
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 m-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black">
                            {navItems}
                        </ul>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default Navbar;
