import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Cards from '../Cards';
function Mens_Fashion() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fashionData = async () => {
            try {
                const res = await axios.get('https://e-commerce-website-1p3g.onrender.com/getproduct/get');
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

    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-3 bg-white '>
                <h1 className=' text-2xl  text-center font-semibold md:text-3xl underline text-blue-900'>Fashion </h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 '>
                    {product.map((item) => (
                        <NavLink to={`/Product_Details/${product._id}`}>
                            <Cards items={item} key={item._id} />
                        </NavLink>
                        // /Referce in MobilesDteails.jsx file (mobilesDetails/${item.id}) 
                    ))}
                </div>
            </div>
        </>
    )
}

export default Mens_Fashion;