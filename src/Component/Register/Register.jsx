import { FcGoogle } from "react-icons/fc";

import Navbar from "../Navbar/Navbar";
import { SiFacebook } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLog from "../Google/GoogleLog";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const Navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get("email");
        const password = form.get("password");
        const confirmPassword = form.get("confirmPassword");

        console.log(name, email, password, confirmPassword);
        setRegisterError('');
        setSuccess('');

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User create it successfully')
                Navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center mt-5">
                <form onSubmit={handleRegister}>
                    <div className="bg-white px-16 py-5 border-2 border-gray-200 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Create an account</h2>

                        <div className="mb-3">
                            <label className="block mb-2 font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full rounded-sm border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Password</label>
                            <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder="Enter your password"
                                required
                            />
                            <span className="absolute text-xl right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Confirm Password</label>
                            <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder="Confirm your password"
                                required
                            />
                            <span className="absolute text-xl right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            </div>
                        </div>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-700">{success}</p>
                        }
                        <button className="w-full bg-orange-500 text-gray-800 py-2 font-semibold rounded-md hover:bg-orange-600 transition">
                            Create an account
                        </button>

                        <p className="text-center font-bold mt-4 text-gray-800">
                            Already have an account?{" "}
                            <Link to="/login" className="text-orange-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            <div>
                <GoogleLog></GoogleLog>
            </div>
        </div>
    );
};

export default Register;
