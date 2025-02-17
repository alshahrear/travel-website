import { FiArrowRight } from "react-icons/fi";
import PicSlider from "../PicSlider/PicSlider";
import { Link, useLocation } from "react-router-dom";
import FormBooking from "../FromBooking/FormBooking";

const Baner = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isBookingPage = location.pathname === "/booking";

    return (
        <div className="grid grid-cols-2 gap-8 ml-[80px] mt-20">
            {/* Title Section */}
            <div className="col-span-1 pt-16 space-y-8">
                <h1 className="text-6xl text-white font-bold">COX'S BAZAR</h1>
                {
                    isHomePage? <p className="text-white">
                    Cox's Bazar is a city, fishing port, tourism centre and <br />
                    district headquarters in southeastern Bangladesh. It is <br />
                    famous mostly for its long natural sandy beach, and it ...
                </p> : <>
                <p className="text-white">Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </>
                }
                {
                    isHomePage && <Link to="/booking">
                    <button className="btn items-center border-0 bg-[#F9A51A]">
                        Booking <span className="text-lg font-bold"><FiArrowRight /></span>
                    </button>
                </Link>
                }
            </div>

           
            {isHomePage ? <PicSlider /> : isBookingPage ? <FormBooking /> : null}
        </div>
    );
};

export default Baner;
