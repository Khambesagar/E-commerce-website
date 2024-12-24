import React from 'react'
// import { NavLink } from 'react-router-dom';
function Cards({ items }) {
    if (!items) {
        return <div>Loading...</div>; // or any fallback UI
    }
    return (
        <>
            <div >
                <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
                    <div className='cursor-pointer'>
                        <figure className="p-3">
                            <img
                                src={items.image}
                                alt="images"
                                className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                        </figure>
                        <div className="text-center ">
                            <p className='text-sm text-gray-600'>{items.name}</p>
                            <p>{items.price}</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards