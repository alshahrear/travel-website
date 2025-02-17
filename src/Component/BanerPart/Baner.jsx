import { FiArrowRight } from "react-icons/fi";


import coxs from "../../assets/Rectangle 1.png";
import sreemangal from "../../assets/Sreemongol.png";
import sundarban from "../../assets/sundorbon.png";
import sajek from "../../assets/Sajek.png";
import saintMartin from "../../assets/saintMarint.png";

const Baner = () => {
    return (
        <div className="grid grid-cols-2 gap-8 ml-[80px] mt-20">
            {/* Title div (2 columns) */}
            <div className="col-span-1 pt-16 space-y-8">
                <h1 className="text-6xl text-white font-bold">COX'S BAZAR</h1>
                <p className="text-white">
                    Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...
                </p>
                <button className="btn items-center border-0 bg-[#F9A51A]">Booking <span className="text-lg font-bold"><FiArrowRight></FiArrowRight></span></button>
            </div>

            {/* Pic div (1 column) */}
            <div className="col-span-1">
                <div className="relative flex items-center justify-center w-full dark:text-gray-900">
                    {/* Previous Slide Button */}
                    <button
                        aria-label="Slide back"
                        type="button"
                        className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none dark:bg-gray-50"
                    >
                        <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>

                    {/* Image Slider */}
                    <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="dark:bg-gray-500 w-[300px] h-[400px] rounded-2xl" src={coxs} alt="Cox's Bazar" />
                        </div>
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="dark:bg-gray-500 w-[300px] h-[400px] rounded-2xl" src={sreemangal} alt="Sreemangal" />
                        </div>
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="dark:bg-gray-500 w-[300px] h-[400px] rounded-2xl" src={sundarban} alt="Sundarban" />
                        </div>
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="dark:bg-gray-500 w-[300px] h-[400px] rounded-2xl" src={saintMartin} alt="Saint Martin" />
                        </div>
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="dark:bg-gray-500 w-[300px] h-[400px] rounded-2xl" src={sajek} alt="Sajek" />
                        </div>
                    </div>

                    {/* Next Slide Button */}
                    <button
                        aria-label="Slide forward"
                        id="next"
                        className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none dark:bg-gray-50"
                    >
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Baner;
