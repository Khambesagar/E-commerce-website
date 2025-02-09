import React from 'react'
import { NavLink } from 'react-router-dom'

function Best_electronics_cards() {
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-2 bg-white shadow-md'>
        <div>
          <h1 className='pt-3 md:text-xl font-semibold'>Best of Electronics</h1>
        </div>
         
           <div className='grid grid-cols-1 md:grid-cols-6 gap-5'>
              {/* {Data_best_electronic_cards.map((items) => (
                <Cards items = { items } key = {items.id} />
              ))} */}
              {/* Watches data */}
              <NavLink to="/Product_Details/6755bcacb7ef532c4a2be197">
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
                    <NavLink to="/Product_Details/676030b18165d78808a4c5e1">
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
                    <NavLink to="/Product_Details/6755b088b7ef532c4a2be103">
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

export default Best_electronics_cards