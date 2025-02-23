import Baner from "../BanerPart/Baner";
import Navbar from "../Navbar/Navbar";
import rectangle1 from "../../assets/Rectangle 1.png";

const Home = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${rectangle1})`, backgroundRepeat: "no-repeat" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10">
                <Navbar />
                <div>
                <Baner />
                </div>
            </div>
        </div>
    );
};

export default Home;
