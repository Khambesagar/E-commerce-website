import React from 'react'
import { NavLink } from 'react-router-dom'
function Fashion_cards() {

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-3 bg-white shadow-md '>
        <div>
          <h1 className='pt-3 md:text-xl font-semibold'>Fashion's Top Deals</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-6 gap-5'>

          <NavLink to="Product_Details/6760225f8165d78808a4c4b3">
            <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
              <div className='cursor-pointer'>
                <figure className="p-3">
                  <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/z/r/xxl-tsrt-catalog-03-kajaru-original-imagprym5gyz3jxh.jpeg?q=70' alt="images"
                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                </figure>
                <div className="text-center ">
                  <p className='text-sm text-gray-600'>Men's t-shirts</p>
                  <p>From $ 450</p>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="Product_Details/676027918165d78808a4c548">
            <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
              <div className='cursor-pointer'>
                <figure className="p-3">
                  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/w/s/j/5xl-black-lace-dhanshree-tex-original-imah3zrjvbnn9gzu.jpeg?q=70" alt="images"
                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                </figure>
                <div className="text-center ">
                  <p className='text-sm text-gray-600'>Brands for dress</p>
                  <p>From $ 1300</p>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Product_Details/67601ffb8165d78808a4c487">
            <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
              <div className='cursor-pointer'>
                <figure className="p-3">
                  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/p/a/a/free-braso1-0-croza-unstitched-original-imagsghnrzbgvhkb.jpeg?q=70
                   " alt="images"
                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                </figure>
                <div className="text-center ">
                  <p className='text-sm text-gray-600'>The Best deal on sarees</p>
                  <p>From $ 5,000</p>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="Product_Details/6760219e8165d78808a4c497">
            <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
              <div className='cursor-pointer'>
                <figure className="p-3">
                  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/a/m/e/s-grey-106-yellow-freluro-original-imah554mrfhjfy2f.jpeg?q=70
                  " alt="images"
                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                </figure>
                <div className="text-center ">
                  <p className='text-sm text-gray-600'>Kurta's</p>
                  <p>From $ 5,300</p>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Product_Details/676021d48165d78808a4c49f">
            <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
              <div className='cursor-pointer'>
                <figure className="p-3">
                  <img src=' https://res.cloudinary.com/dzdgpwtox/image/upload/w_900,c_scale/l_final_designs:seller_design_475013:f_20230502131058.png,w_300,h_300,c_fit,x_0,y_0/hoodies/black_front.jpg
                      ' alt="images"
                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                </figure>
                <div className="text-center ">
                  <p className='text-sm text-gray-600'>Huddy's</p>
                  <p>From $ 4,000</p>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="Product_Details/6760220d8165d78808a4c4a7">
            <div className="mb-5 mt-5 card bg-base-100 w-auto shadow-xl border-gray-300 border-[1px] rounded-md">
              <div className='cursor-pointer'>
                <figure className="p-3">
                  <img src=' https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-shirt/a/y/e/m-sp-newveb-kuki-original-imahynz8zyjhz6ve.jpeg?q=70
                  ' alt="images"
                    className="rounded-xl w-auto h-36  object-contain transition-transform transform hover:scale-110" />
                </figure>
                <div className="text-center ">
                  <p className='text-sm text-gray-600'>Headphones</p>
                  <p>From $ 500</p>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div></>
  )
}

export default Fashion_cards