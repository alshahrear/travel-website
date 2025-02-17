import { NavLink } from "react-router-dom";
import travelLogo2 from "../../assets/logo2.png";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <nav className="flex space-x-28 pt-5 items-center w-[1200px] mx-auto">
                {/* Logo Section */}
                <div>
                    <img className="w-24 text-white" src={travelLogo2} alt="" />
                </div>

                {/* Search Input Section */}
                <div>
                    <label className=" input-bordered text-white flex items-center  gap-2 flex-row-reverse relative">
                        <input 
                            type="text" 
                            className="w-64 rounded-lg py-2 pl-10" 
                            placeholder="Search Your Destination..." 
                        />
                        <IoSearchOutline className="absolute left-2 text-xl text-white" />
                    </label>
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className="flex text-lg text-white font-medium">
                        <li className="mr-10">
                            <NavLink>News</NavLink>
                        </li>
                        <li className="mr-10">
                            <NavLink>Destination</NavLink>
                        </li>
                        <li className="mr-10">
                            <NavLink>Blog</NavLink>
                        </li>
                        <li className="mr-10">
                            <NavLink>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Login Button */}
                <div>
                    <button className="btn border-0 bg-[#F9A51A]">Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
