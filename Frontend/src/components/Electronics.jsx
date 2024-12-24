import React from 'react'
import { NavLink } from 'react-router-dom';

function Electronics() {
    // const mobilesData = Data_all_products.filter((data) => data.type === "electronics");
    // console.log(mobilesData);
    // const name = "sagar";
    // console.log(name);

    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-3 bg-white  '>
                <h1 className=' text-2xl  text-center font-semibold md:text-3xl underline text-blue-900'> Electronics </h1>
                {/* <div className='grid grid-cols-1 md:grid-cols-4 gap-10 '>
                    {mobilesData.map((item) => (
                        <Cards items={item} key={item.id} />
                    ))}
                </div> */}

                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 '>
                    {/* Watches data */}
                    <NavLink to="/watches">
                        <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
                            <div className='cursor-pointer'>
                                <figure className="p-3">
                                    <img src='https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg' alt="images"
                                        className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                                </figure>
                                <div className="text-center ">
                                    <p className='text-sm text-gray-600'>Fastrack Smart Watches</p>
                                    <p>From $ 1,300</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    {/* Mobiles data */}
                    <NavLink to="/mobiles">
                        <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
                            <div className='cursor-pointer'>
                                <figure className="p-3">
                                    <img src="https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg" alt="images"
                                        className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                                </figure>
                                <div className="text-center ">
                                    <p className='text-sm text-gray-600'>The Best deal on Mobiles</p>
                                    <p>From $ 12,300</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    {/* laptops data */}
                    <NavLink to="/laptops">
                        <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
                            <div className='cursor-pointer'>
                                <figure className="p-3">
                                    <img src="https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG" alt="images"
                                        className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                                </figure>
                                <div className="text-center ">
                                    <p className='text-sm text-gray-600'>Brands for Laptops</p>
                                    <p>From $ 25,000</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    {/* Printers daata */}
                    <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
                        <div className='cursor-pointer'>
                            <figure className="p-3">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2021/3/PA/ZQ/LT/121439134/epson-colore-printer-inkjet.jpg" alt="images"
                                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                            </figure>
                            <div className="text-center ">
                                <p className='text-sm text-gray-600'>Printers</p>
                                <p>From $ 5,300</p>
                            </div>
                        </div>
                    </div>
                    {/* refrigerator data */}
                    <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
                        <div className='cursor-pointer'>
                            <figure className="p-3">
                                <img src='https://sharptronics.in/cdn/shop/products/81FhJgKeo_2BL._SL1500.jpg?v=1615887818' alt="images"
                                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                            </figure>
                            <div className="text-center ">
                                <p className='text-sm text-gray-600'>Boss refrigerator</p>
                                <p>From $ 15,300</p>
                            </div>
                        </div>
                    </div>
                    {/* Headphones data */}
                    <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
                        <div className='cursor-pointer'>
                            <figure className="p-3">
                                <img src='https://www.boat-lifestyle.com/cdn/shop/products/e5881832-36f8-4c1c-a767-10f2c2a55a02_600x.png?v=1685708053' alt="images"
                                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                            </figure>
                            <div className="text-center ">
                                <p className='text-sm text-gray-600'>Headphones</p>
                                <p>From $ 3,000</p>
                            </div>
                        </div>
                    </div>
                    {/* moniters Data */}
                    <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
                        <div className='cursor-pointer'>
                            <figure className="p-3">
                                <img src='https://www.primeabgb.com/wp-content/uploads/2024/10/Lenovo-Legion-R25F-30-Full-HD-Gaming-Monitor-%E2%80%93-24.5-inch-IPS-Display-with-WLED-Backlit.jpg' alt="images"
                                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                            </figure>
                            <div className="text-center ">
                                <p className='text-sm text-gray-600'>Headphones</p>
                                <p>From $ 3,000</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Electronics