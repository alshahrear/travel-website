import { FcGoogle } from "react-icons/fc";

import Navbar from "../Navbar/Navbar";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
   const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get("email");
        const password = form.get("password");
        const confirmPassword = form.get("confirmPassword");

        console.log(name, email, password, confirmPassword);

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
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
                            <input
                                type="password"
                                name="password"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

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

            <div className="mt-2 mb-4 flex justify-center">
                <div>
                    <div className="flex items-center my-4">
                        <div className="flex-1 h-[1px] bg-gray-400"></div>
                        <span className="px-3 font-medium text-gray-600">Or</span>
                        <div className="flex-1 h-[1px] bg-gray-400"></div>
                    </div>
                    <button className="btn px-[110px] rounded-2xl bg-white text-black">
                        <FcGoogle /> Continue With Google
                    </button>{" "}
                    <br />
                    <button className="btn px-[100px] rounded-2xl bg-white text-black mt-2">
                        <SiFacebook /> Continue With Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
