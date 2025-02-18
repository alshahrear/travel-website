import rec26 from "../../assets/Rectangle 26.png";

const Blog = ({blog}) => {
    return (
        <div className="flex">
            <img className="w-[200px]" src={rec26} alt="" />
            <div>
                <h3>Light bright airy stylish apt & safe 
                peaceful stay</h3>
                <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                <p>Wif Air conditioning Kitchen</p>
                <p>Cancellation fexibility availiable</p>
                <div>
                <p> 4.9 (20)</p>
                <p> night</p>
                <p>$700</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;