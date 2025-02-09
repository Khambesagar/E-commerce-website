import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Cards from '../Cards';
function Womens_Fashion() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fashionData = async () => {
            try {
                const res = await axios.get('http://localhost:4001/getproduct/get');
                const fdata = res.data.filter((data) => data.category === "Fashion-Women's");
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
                        <Cards items={item} key={item._id} />
                        // /Referce in MobilesDteails.jsx file (mobilesDetails/${item.id}) 
                    ))}
                </div>
            </div> 
        </>
    )
}

export default Womens_Fashion;