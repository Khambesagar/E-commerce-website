import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Cards from '../Cards';
import Loading from '../Loading';

function Mobiles() {
    // const mobilesData = Data_all_products.filter((data) => data.category === "mobiles");
    // console.log(mobilesData);

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true); // Loading state
    useEffect(() => {
        const adminData = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const res = await axios.get('https://e-commerce-website-1p3g.onrender.com/getproduct/get');
                console.log(res.data);

                // add filter method for mobile data
                const mobilesData = res.data.filter((data) => data.category === "mobile");

                console.log(mobilesData);
                setProduct(mobilesData);
                setLoading(false); // Set loading to false after fetching

            } catch (error) {
                console.log(error);
            }
        }
        adminData();
    }, [])


    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-3 bg-white  min-h-96 '>
                <h1 className=' text-xl font-semibold text-center md:text-2xl underline text-blue-900 p-2'>Mobiles</h1>
                {loading ? (
                 <Loading/>
                ) : (

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 justify-center'>
                        {product.map((item) => (
                        <NavLink to={`/Product_Details/${item._id}`}>
                            <Cards items={item} key={item._id} />
                        </NavLink>
                            // /Referce in MobilesDteails.jsx file (mobilesDetails/${item.id})
                        ))
                    }
                    </div>
                )
                }


            </div>
        </>
    )
}

export default Mobiles