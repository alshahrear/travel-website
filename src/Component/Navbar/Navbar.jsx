import { Link, NavLink, useLocation } from "react-router-dom";
import travelLogo2 from "../../assets/logo2.png";
import travelLogo1 from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isBookingPage = location.pathname === "/booking";
    const isBlogPage = location.pathname === "/blog";


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className=" w-[1200px] mx-auto">
            <nav className="flex space-x-14 pt-5 items-center">
                {/* Logo Section */}
                <div>
                    <img className="w-24" src={isHomePage || isBookingPage ? travelLogo2 : travelLogo1} alt="Logo" />
                </div>

                {/* Search Input Section */}
                <div>
                    {
                        isHomePage || isBookingPage ? <label className="input-bordered text-white flex items-center gap-2 flex-row-reverse relative">
                            <input
                                type="text"
                                className="w-64 rounded-lg py-2 pl-10"
                                placeholder="Search Your Destination..."
                            />
                            <IoSearchOutline className="absolute left-2 text-xl text-white" />
                        </label> : ''
                    }
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className={`flex text-lg font-medium ${isHomePage || isBookingPage ? "text-white" : "text-black ml-42"}`}>
                        <li className="mr-10">
                            <NavLink
                                className={({ isActive }) => `hover:bg-[#c9e3ad] hover:font-semibold px-2 py-1 rounded-lg ${isActive ? "bg-yellow-400" : ""}`}
                                to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="mr-8">
                            <NavLink
                                className={({ isActive }) => `hover:bg-[#c9e3ad] hover:font-semibold px-2 py-1 rounded-lg ${isActive ? "bg-yellow-400" : ""}`}
                                to="/news">
                                News
                            </NavLink>
                        </li>
                        <li className="mr-8">
                            <NavLink
                                className={({ isActive }) => `hover:bg-[#c9e3ad] hover:font-semibold px-2 py-1 rounded-lg ${isActive ? "bg-yellow-400" : ""}`}
                                to="/destination">
                                Destination
                            </NavLink>
                        </li>
                        <li className="mr-8">
                            <NavLink
                                className={({ isActive }) => `hover:bg-[#c9e3ad] px-2 py-1 rounded-lg hover:font-semibold ${isActive ? "bg-yellow-400" : ""}`}
                                to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => `hover:bg-[#c9e3ad] hover:font-semibold px-2 py-1 rounded-lg ${isActive ? "bg-yellow-400" : ""}`}
                                to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </div>

                {/* Login Button */}
                <div className="flex items-center">
                    <div className="mr-3">
                        <Link>
                            {
                                isBlogPage && <>
                                    {
                                        user && <p className="text-lg font-medium">{user.displayName}</p>
                                    }
                                </>
                            }

                        </Link>
                    </div>
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn border-0  bg-[#F9A51A]">Sign Out</button> :
                            <Link to="/login">
                                <button className="btn border-0 bg-[#F9A51A]">Login</button>
                            </Link>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Navbar;