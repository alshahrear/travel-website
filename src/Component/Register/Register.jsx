import { FcGoogle } from "react-icons/fc";

import Navbar from "../Navbar/Navbar";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="flex justify-center items-center mt-5">
                    <div className="bg-white px-16 py-5  border-2 border-gray-200 rounded-lg shadow-md ">
                        <h2 className="text-2xl font-bold mb-4">Create an account</h2>

                        <div className="mb-3">
                            <label className="block  mb-2 font-medium  text-gray-700">First Name</label>
                            <input
                                type="text"
                                className="w-full rounded-sm border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"
                                placeholder=" Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Last Name</label>
                            <input
                                type="password"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder=" Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Username or Email</label>
                            <input
                                type="password"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder=" Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder=" Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder=" Enter your password"
                                required
                            />
                        </div>


                        {/* Login Button */}
                        <button className="w-full bg-orange-500 text-gray-800 py-2 font-semibold rounded-md hover:bg-orange-600 transition">
                           Create an account
                        </button>

                        <p className="text-center font-bold mt-4 text-gray-800">
                        Already have an account?{" "}
                            <Link to="/login">
                                <a className="text-orange-500 hover:underline">Login</a>
                            </Link>
                        </p>
                    </div>
                </div>

                {/* another */}
                <div className="mt-2 mb-4 flex justify-center">

                    <div className="">
                        <div className="flex items-center my-4">
                            <div className="flex-1 h-[1px] bg-gray-400"></div>
                            <span className="px-3 font-medium text-gray-600">Or</span>
                            <div className="flex-1 h-[1px] bg-gray-400"></div>
                        </div>
                        <button className="btn  px-[110px] rounded-2xl bg-white text-black"><span><FcGoogle></FcGoogle></span>Continue With Google</button> <br />
                        <button className="btn  px-[100px] rounded-2xl bg-white text-black mt-2"><span><SiFacebook></SiFacebook></span> Continue With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;