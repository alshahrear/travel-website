import { useLoaderData } from "react-router-dom";


import Navbar from '../Navbar/Navbar';
import Blog from "../Blog/Blog";

const Blogs = () => {
    const blogs = useLoaderData();

    return (
        <div className="w-[1160px] mx-auto">
           <div className='border-b-2 border-gray-200 pb-4'>
           <Navbar></Navbar>
           </div>
            <div>
                <div>
                    <div className="flex">
                        <Blog></Blog>
                    </div>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;