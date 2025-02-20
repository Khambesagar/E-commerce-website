import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../src/assets/images/best_electronic_img/banner1.webp";
import banner2 from "../../src/assets/images/best_electronic_img/monitor2-removebg-preview.png";
import banner3 from "../../src/assets/images/best_electronic_img/mobile.png"
import banner4 from "../../src/assets/images/best_electronic_img/laptop1-removebg-preview.png"
import banner5 from "../../src/assets/images/best_electronic_img/perfume.png"
import watch from "../../src/assets/images/best_electronic_img/watch1-removebg-preview.png"
import { NavLink } from "react-router-dom";
function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <>
            <div className="hidden md:block shadow-md">
                <div className="slider-container w-full h-32 md:h-52 mt-2 bg-white overflow-hidden  shadow-md">
                    <Slider {...settings}>
                        {/* First slide */}
                        <NavLink to="/Product_Details/67602c218165d78808a4c57b">
                            <div>
                                <div>
                                    <div className="relative ">
                                        <img src={banner1} alt="Banner" className="w-full h-full object-contain bg-black bg-opacity-50" />
                                        <p className="hidden xl:block absolute md:top-8  md:right-72 text-center flex items-center justify-center text-red-400 text-2xl ">
                                            fastrack watches for men <br /> Up to 20% Discount <br />buy Now.....🖐
                                        </p>
                                        <img src={watch} alt="" className="absolute top-3 right-2 md:top-10 md:right-10 lg:right-40 flex items-center justify-center md:w-32 md:h-32 w-20 h-20" />
                                    </div>

                                </div>
                            </div>
                        </NavLink>

                        {/* second slide */}
                        <div className="bg-gradient-to-r from-purple-200 via-pink-400 to-black  ">
                            <div className="grid grid-flow-col">
                                <img src={banner2} className='ms-48' alt=" Mobile " />
                                <p className="text-white text-center flex items-center justify-center text-2xl">
                                    Moniter <br />
                                    Upgrade Your View with Crystal-Clear Clarity <br />
                                    Buy Now.....
                                </p>
                            </div>
                        </div>
                        {/* third slide */}
                        <NavLink to="http://localhost:5173/Product_Details/676030b18165d78808a4c5e1">
                            <div className="bg-gradient-to-b from-pink-500 to-purple-500 ">
                                <div className="grid grid-flow-col">
                                    <img src={banner3} className='ms-48' alt=" Mobile " />
                                    <p className="text-white text-center flex items-center justify-center text-2xl">
                                        Apple 15 <br />
                                        15% Discount <br />
                                        Unlock the Power of Apple. Available Now!<br />
                                        Shop Now! .....💯
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                        {/* Fourth slide */}
                        <NavLink to="Product_Details/6755b088b7ef532c4a2be103">
                            <div className="bg-gradient-to-br from-teal-400 to-indigo-500  ">
                                <div className="grid grid-flow-col">
                                    <img src={banner4} className='ms-48' alt=" Mobile " />
                                    <p className="text-white text-center flex items-center justify-center text-2xl">
                                        🖐...DELL <br />
                                        10% Discount <br />
                                        Upgrade Your Tech with Dell Laptops<br />
                                        Shop Now! .....
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                        {/* Five slide */}
                        <NavLink to="Product_Details/67602b258165d78808a4c567" >
                            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                                <div className="grid grid-flow-col">
                                    <img src={banner5} className='ms-48' alt=" Mobile " />
                                    <p className="text-white text-center flex items-center justify-center text-2xl">
                                        GodFather <br />
                                        12% Discount <br />
                                        Shop Now and Unleash the Magic<br />
                                        Shop Now! .....
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Carousel;
