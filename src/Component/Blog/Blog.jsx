import { FaRegStar } from "react-icons/fa";


const Blog = ({blog}) => {

    const {img, title, facility, details, rating, review, stay, booking_price} = blog;

    return (
        <div className="flex mb-8">
            <img className="w-[250px] h-[210px]" src={img} alt="" />
            <div className="ml-5 space-y-2 -mt-2">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="whitespace-pre text-lg">{details}</p>
                <p className="text-lg">{facility}</p>
                <p className="text-lg">Cancellation fexibility availiable</p>

                <div className="flex items-center">
                <p className="flex items-center text-lg font-bold"> <span className="items-center mr-2"><FaRegStar></FaRegStar></span> {rating} </p>
                <p className="ml-2 font-medium">({review})</p>
                <p className="ml-5 font-medium">{stay}</p>
                <p className="ml-5 font-bold text-lg">${booking_price}</p>
                </div>
                <button className="btn text-lg font-bold bg-cyan-200 w-full">Confirm Booking</button>
            </div>
        </div>
    );
};

export default Blog;