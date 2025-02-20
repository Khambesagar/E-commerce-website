import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Cards from '../Cards';
import Loading from '../Loading';

function Perfumes() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const adminData = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://e-commerce-website-1p3g.onrender.com/getproduct/get');
                console.log(res.data);
                const watchData = res.data.filter((data) => data.category === "perfume");
                setProduct(watchData);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        adminData();
    }, [])


    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-3 bg-white   min-h-96'>
                <h1 className=' text-2xl font-semibold text-center md:text-3xl underline text-blue-900 p-2'>Perfumes</h1>
                {loading ? (
                    <Loading />
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 '>
                    {product.map((item) => (
                            <NavLink to={`/Product_Details/${item._id}`}>
                                <Cards items={item} key={item._id} />
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Perfumes