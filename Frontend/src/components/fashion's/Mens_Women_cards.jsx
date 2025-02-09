import React, { useEffect, useState } from 'react'
import Cards from '../Cards'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

function Mens_Women_cards() {
    // Fetch data only mens only
    const [product, setProduct] = useState([]);
    const [wproduct, setWproduct] = useState([]);

    useEffect(() => {
        const fashionData = async () => {
            try {
                const res = await axios.get('http://localhost:4001/getproduct/get');
                const fdata = res.data.filter((data) => data.category === "Fashion-men's");
                console.log(fdata);
                setProduct(fdata);

            } catch (error) {
                console.log(error);
                // res.status(500).json(error.message);
            }
        }
        fashionData();
    }, []);

    // Fetch data for Women's fashion
    

    useEffect(() => {
        const fashionDataW = async () => {
            try {
                const res = await axios.get('http://localhost:4001/getproduct/get');
                const fdata = res.data.filter((data) => data.category === "Fashion-Women's");
                console.log(fdata);
                setWproduct(fdata);

            } catch (error) {
                console.log(error);
                // res.status(500).json(error.message);
            }
        }
        fashionDataW();
    }, []);
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  bg-white shadow-md'>
                    <div>
                        <h1 className='pt-3 md:text-xl font-semibold'>Men's Fashions </h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        {/* Only three product show */}
                        {product.slice(0, 3).map((item) => (
                            <NavLink to={`/Product_Details/${item._id}`}>
                                <Cards items={item} key={item._id} />
                            </NavLink>
                        ))}

                    </div>
                </div>
                {/* Womens data */}
                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white shadow-md'>
                    <div>
                        <h1 className='pt-3 md:text-xl font-semibold'>Women's Fashions </h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        {wproduct.slice(0, 3).map((item) => (
                            <NavLink to={`/Product_Details/${item._id}`}>
                                <Cards items={item} key={item._id} />
                            </NavLink>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Mens_Women_cards