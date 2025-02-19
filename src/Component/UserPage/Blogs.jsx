import { useLoaderData } from "react-router-dom";
import moment from 'moment';

import Navbar from '../Navbar/Navbar';
import Blog from "../Blog/Blog";
import map from "../../assets/map.png";


const Blogs = () => {
    const blogs = useLoaderData();

    

    return (
        <div className="w-[1160px] mx-auto">
            <div className='border-b-2 border-gray-200 pb-4'>
                <Navbar></Navbar>
            </div>
            <div>
                <div className="flex mt-4 justify-between "> 
                    {/* hotel div */}
                    <div className="gap-5 flex-1">
                        <p className="text-lg ">{moment().format("DD, MMMM, YYYY")}</p>
                        <p className="text-2xl font-bold mb-5">Stay in Cox's Bazar</p>
                        {
                            blogs.map(blog => <Blog key={blog} blog={blog}></Blog>)
                        }
                    </div>
                    {/* map div */}
                    <div className="">
                        <img src={map} alt="" />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;