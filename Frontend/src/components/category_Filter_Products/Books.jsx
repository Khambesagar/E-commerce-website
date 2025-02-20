import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Cards from '../Cards';
import Loading from '../Loading';

function Books() {
    const [product, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const adminData = async () => {
            try {
                setloading(true);
                const res = await axios.get('https://e-commerce-website-1p3g.onrender.com/getproduct/get');
                console.log(res.data);
                const cycleData = res.data.filter((data) => data.category === "book");

                console.log(cycleData);
                setProduct(cycleData);
                setloading(false);
            } catch (error) {
                console.log(error);
            }
        }
        adminData();
    }, [])


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-3 bg-white   min-h-96'>
                <h1 className=' text-2xl font-semibold text-center md:text-3xl underline text-blue-900 p-2'>Top Book's</h1>
                {loading ? (
                    <Loading/>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 '>
                        {product.map((item) => (
                            <NavLink to={`/Product_Details/${item._id}`}>
                                <Cards items={item} key={item._id} />
                            </NavLink>
                        ))}
                    </div>
                )}
            </div >
        </>
    )
}

export default Books;