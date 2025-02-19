
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

import Navbar from "../Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import GoogleLog from "../Google/GoogleLog";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const Navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        setLoginError('');
        setLoginSuccess('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setLoginSuccess('User login successfully')
                Navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="flex justify-center items-center mt-5">
                    <form onSubmit={handleLogin}>
                        <div className="bg-white p-6  border-2 border-gray-200 rounded-lg shadow-md ">
                            <h2 className="text-2xl font-bold mb-4">Login</h2>

                            <div className="mb-3">
                                <label className="block mb-2 font-medium  text-gray-700">Username or Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="w-full rounded-sm border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"
                                    placeholder=" Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-4 ">
                                <label className="block mb-2 text-gray-700 font-medium">Password</label>
                                <div className="relative ">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                        placeholder=" Enter your password"
                                        required
                                    />
                                    <span className="absolute text-xl right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <label className="flex items-center text-gray-700">
                                    <input type="checkbox" className="mr-2 " />
                                    <span className="font-bold">Remember Me</span>
                                </label>
                                <a href="#" className="text-[#F9A51A] font-bold hover:underline">Forgot Password</a>
                            </div>
                            {
                                loginError && <p className="text-red-600">{loginError}</p>
                            }
                            {
                                loginSuccess && <p className="text-green-700">{loginSuccess}</p>
                            }
                            {/* Login Button */}
                            <button className="w-full bg-orange-500 text-gray-800 py-2 font-semibold rounded-md hover:bg-orange-600 transition"> Login</button>

                            <p className="text-center font-bold mt-4 text-gray-800">
                                Don't have an account?{" "}
                                <Link to="/register">
                                    <a className="text-orange-500 hover:underline">Create an account</a>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div>
                    <GoogleLog></GoogleLog>
                </div>
                {/* another */}
                {/* <div className="mt-2 mb-4 flex justify-center">

                    <div className="">
                        <div className="flex items-center my-4">
                            <div className="flex-1 h-[1px] bg-gray-400"></div>
                            <span className="px-3 font-medium text-gray-600">Or</span>
                            <div className="flex-1 h-[1px] bg-gray-400"></div>
                        </div>
                        <button className="btn  px-[110px] rounded-2xl bg-white text-black"><span><FcGoogle></FcGoogle></span>Continue With Google</button> <br />
                        <button className="btn  px-[100px] rounded-2xl bg-white text-black mt-2"><span><SiFacebook></SiFacebook></span> Continue With Facebook</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Login;