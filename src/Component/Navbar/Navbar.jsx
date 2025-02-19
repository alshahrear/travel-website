import { Link, NavLink, useLocation } from "react-router-dom";
import travelLogo2 from "../../assets/logo2.png";
import travelLogo1 from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isBookingPage = location.pathname === "/booking";
    
    return (
        <div>
            <nav className="flex space-x-28 pt-5 items-center w-[1200px] mx-auto">
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
                    <ul className={`flex text-lg font-medium ${isHomePage || isBookingPage? "text-white" : "text-black ml-56"}  `}>
                        <li className="mr-10">
                            <NavLink className="hover:bg-[#c9e3ad] hover:font-semibold px-2 py-1 rounded-lg" to="/">Home</NavLink>
                        </li>
                        <li className="mr-10">
                            <NavLink className="hover:bg-[#c9e3ad] hover:font-semibold px-2 py-1 rounded-lg">News</NavLink>
                        </li>
                        <li className="mr-10">
                            <NavLink className="hover:bg-[#c9e3ad] hover:font-semibold px-2 py-1 rounded-lg">Destination</NavLink>
                        </li>
                        <li className="mr-10">
                            <NavLink className="hover:bg-[#c9e3ad] px-2 py-1 rounded-lg hover:font-semibold" to="/blog">Blog</NavLink>
                        </li>
                        <li className="mr-10">
                            <NavLink className="hover:bg-[#c9e3ad] hover:font-semibold px-2 py-1 rounded-lg">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Login Button */}
                <div>
                    <Link to="/login">
                        <button className="btn border-0 bg-[#F9A51A]">Login</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;