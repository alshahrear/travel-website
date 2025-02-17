

const FormBooking = () => {
    return (
        <div className=" ml-32 ">
            <form className="card-body bg-white text-lg rounded-2xl w-[400px]">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Origin</span>
                    </label>
                    <br />
                    <input type="text" placeholder="Dhaka" className="input  bg-[#F2F2F2] font-bold text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Destination</span>
                    </label>
                    <br />
                    <input type="text" placeholder="Cox's Bazar" className="input  bg-[#F2F2F2] font-bold text-black" required />
                    <div className="flex space-x-3 mt-3">
                        <div>
                            <p>From</p>
                            <input type="text" placeholder="01/09" className="input font-extrabold input-bordered" required />
                        </div>
                        <div >
                            <p>To</p>
                            <input type="text" placeholder="12/09" className="input font-extrabold input-bordered" required />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn w-full rounded-xl bg-[#F9A51A]">Start Booking</button>
                </div>
            </form>
        </div>
    );
};

export default FormBooking;