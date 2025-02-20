import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../src/components/cart_data/CartContext.jsx';  // Import the useCart hook
import Loading from '../components/Loading.jsx'
//Add toaster
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product_Details() {
    const { id } = useParams();  // Get the product ID from URL
    const [product, setProduct] = useState({});
    const { dispatch } = useCart();  // Get the dispatch function from CartContext

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://e-commerce-website-1p3g.onrender.com/getproduct/get');
                const productDetails = res.data.find((data) => data._id === id);
                setProduct(productDetails);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProductDetails();
    }, [id]);

    // Add product to cart
    const addToCart = () => {
        const cartProduct = {
            id: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1,  // Initial quantity
        };
        dispatch({ type: 'ADD_TO_CART', payload: cartProduct });
        toast.success('Add to Cart successfully', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-3 shadow-2xl">
            <h1 className="text-xl font-semibold p-2 text-center md:text-xl underline text-blue-900">
                {product.name}
            </h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-10 pb-20">
                {loading ? (
                    <div className='flex  justify-center items-center'>
                        <Loading /> <p>Image loading</p>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="bg-white px-3 rounded-2xl shadow-2xl object-contain w-[300px] h-[300px] transition-transform transform hover:scale-110"
                        />
                    </div>
                )}
                <div className="p-10 gap-3 mb-5 rounded-2xl shadow-2xl bg-indigo-950 text-white">
                    <p><span className="font-semibold">Model Name :- </span>{product.name}</p><hr className="mt-2" /><br />
                    <p><span className="font-semibold">Description :- </span>{product.description}</p><hr /><br />
                    <p><span className="font-semibold">Price :- </span><span className="text-yellow-400 font-semibold">{product.price}</span></p><br />

                    <div className="flex gap-3 ">
                        <button className="btn btn-active btn-success text-white" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_Details;
