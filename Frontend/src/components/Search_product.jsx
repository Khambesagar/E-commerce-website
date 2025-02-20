import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import Cards from './Cards';
import Loading from './Loading';

function Search_product() {
    const [products, setProducts] = useState([]);
    const [serchProduct, setSearchProduct] = useState([]);
    const [loading,setLoading] = useState(true);

    const { term } = useParams(); // get the search term from the URL

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://e-commerce-website-1p3g.onrender.com/getproduct/get');
                // console.log(res.data);
                setProducts(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        setSearchProduct(
            products.filter((data) =>
                data?.name?.toLowerCase().includes(term.toLowerCase()) ||
                data?.category?.toLowerCase().includes(term.toLowerCase())
            )
        );
    }, [term, products]);
    console.log(serchProduct);

    return (
        <>
        
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-2 min-h-96  bg-white shadow-xl'>
               {loading ? (
                <Loading/>
               ):(
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 p-10'>
                    {
                        serchProduct?.length > 0 ? (
                            serchProduct.map((product) => (
                                <NavLink to={`/Product_Details/${product._id}`}>
                                    <Cards items={product} key={product.id} /> 
                                </NavLink>
    
                            ))
                        ) : (
                            <div className=' flex flex-col justify-center items-center w-full md:ms-96 '>
                                <img
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-download-in-svg-png-gif-file-formats--available-product-tokostore-pack-e-commerce-shopping-illustrations-2809510.png"
                                    alt=""
                                    className='w-80 h-40  object-contain transition-transform transform hover:scale-110'
                                />
                                <p className='text-md md:text-xl  text-red-600'>Product Not found ! . . .</p>

                            </div>
                        )}
                </div>
                )}
            </div >
        </>

    )
}
export default Search_product
