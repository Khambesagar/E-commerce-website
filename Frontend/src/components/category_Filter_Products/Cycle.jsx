import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Cards from '../Cards';

function Cycle() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const adminData = async () => {
            try {
                const res = await axios.get('http://localhost:4001/getproduct/get');
                console.log(res.data);
                const cycleData = res.data.filter((data) => data.category === "cycle");

                console.log(cycleData );
                setProduct(cycleData );

            } catch (error) {
                console.log(error);
            }
        }
        adminData();
    }, [])


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-3 bg-white  h-[100vh]'>
                <h1 className=' text-2xl font-semibold text-center md:text-3xl underline text-blue-900 p-2'>Top Cycle's</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 '>
                    {product.map((item) => (
                        <NavLink to={`/Product_Details/${item._id}`}>
                            <Cards items={item} key={item._id} />
                        </NavLink>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Cycle;