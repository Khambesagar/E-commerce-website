import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loader_img from "../../src/assets/images/best_electronic_img/loader-img.png";

const Loader = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); // or wherever your home route is
        }, 4000);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-96 bg-white mt-2">
            <div className="relative flex items-center justify-center">
                <img src={loader_img} alt="Loader" className="w-96 h-80" />
                <div className="absolute">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
                <p className="absolute text-xl font-semibold mt-28 ms-10 text-red-500">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;
