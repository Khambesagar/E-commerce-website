import React from 'react'
import fashion from "../../public/top navbar images/fashion.png"
import mobile from "../../public/top navbar images/mobile.png"
import electronics from "../../public/top navbar images/electronics.png"
import cycle from "../../public/top navbar images/cycle.png"
import appliance from "../../public/top navbar images/appliance.png"
import watch from "../../public/top navbar images/watch.png"
import book from "../../public/top navbar images/book.png"
import perfume from "../../public/top navbar images/perfume.png"
import { NavLink } from 'react-router-dom'

function Show_navbar_product() {
    return (
        <>
            {/* max-w-screen-xl */}
            <div className=" max-w-screen-2xl container  me-2 md:px-20 md:py-2 overflow-x-auto px-4 mt-2  bg-white  border-gray-300 shadow-md">
                <div className="flex space-x-10 md:space-x-20 cursor-pointer text-center">
                    <div>
                        <NavLink to="/mobiles">
                            <img src={mobile} className='w-17 h-16  object-contain transition-transform transform hover:scale-110' alt=" Mobile " />
                            <span className='text-xs md:text-sm'>Mobiles</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/all_Fashion_pro">
                            <img src={fashion} className='w-17 h-16 object-contain transition-transform transform hover:scale-110' alt="fashion" />
                            <span className='text-xs md:text-sm'>fashion</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/electronics">
                            <img src={electronics} className='w-17 h-16 object-contain transition-transform transform hover:scale-110' alt=" electronics " />
                            <span className='text-xs md:text-sm'>electronics</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/cycle">
                            <img src={cycle} className='w-17 h-16 object-contain transition-transform transform hover:scale-110' alt=" cycle " />
                            <span className='text-xs md:text-sm'>cycle</span>
                        </NavLink>
                    </div>
                    <div><img src={appliance} className='w-17 h-16 object-contain transition-transform transform hover:scale-110' alt="appliance" />
                        <span className='text-xs md:text-sm'>appliance</span>
                    </div>
                    <NavLink to="/watches">
                        <div><img src={watch} className='w-17 h-16 object-contain  transition-transform transform hover:scale-110' alt="watch" />
                            <span className='text-xs md:text-sm'>watch</span></div>
                    </NavLink>
                    <div>
                        <NavLink to="/books" >
                            <img src={book} className='w-17 h-16 object-contain transition-transform transform hover:scale-110' alt="book" />
                            <span className='text-xs md:text-sm'>book</span>
                        </NavLink>
                    </div>
                    <NavLink to="/perfume">
                        <div><img src={perfume} className='w-17 h-16 object-contain transition-transform transform hover:scale-110' alt="perfume" />
                            <span className='text-xs md:text-sm'>perfume</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>

    )
}

export default Show_navbar_product