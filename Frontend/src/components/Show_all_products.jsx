import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Cards from './Cards'
import { NavLink } from 'react-router-dom';
import Loading from './Loading';

function Show_all_products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://e-commerce-website-1p3g.onrender.com/getproduct/get');
        // console.log(res.data);
        setData(res.data);
        setLoading(false)
      } catch (error) {
        console.log(error);

        // console.log('Error:' + error.response.data.message);

      }
    }
    getData();
  }, [])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-2 bg-white shadow-xl hidden md:block'>
        <div>
          <h1 className='pt-3 md:text-xl font-bold'>Best for You & More</h1>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-6 gap-5'>
            {data.map((item) => (
              <NavLink to={`/Product_Details/${item._id}`}>
                <Cards key={item._id} items={item} />
              </NavLink>
            ))}
          </div>
        )}
        <div>

        </div>
      </div >
    </>
  )
}

export default Show_all_products