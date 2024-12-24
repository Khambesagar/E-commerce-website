import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import update_img from '../../assets/images/update-img.png'

//Add toaster
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MdArrowBack } from 'react-icons/md';

function Update_product() {
    const [inputData, setInputData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        qty: '',
    });

    const { id } = useParams(); // To get the product ID from the URL

    // Fetch product data when the component mounts
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:4001/getproduct/${id}`);
     
                setInputData(res.data);
            } catch (error) {
                console.error('Error fetching product data', error);
                alert('Failed to fetch product data');
            }
        };

        fetchProduct();
    }, [id]); // Re-fetch data if the `id` changes

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };

    // Handle form submission to update product
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put(`http://localhost:4001/update/${id}`, inputData);
            // alert('Product updated successfully');
            toast.success('Product updated successfully', {
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

            console.log(res.data);
        } catch (error) {
            console.error('Error updating product', error);
            // alert('Failed to update product');
            toast.success('Failed to update product', {
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
        }
    };

    return (
        <>
            <div className=' flex justify-center  '>
                <div className='max-w-screen-2xl container mx-auto md:px-72  m-2'>
                    <form onSubmit={handleUpdate} className='border rounded-2xl  shadow-2xl shadow-slate-800 bg-white'>

                        <div className='flex justify-center text-center h-16'>
                            <img src={update_img} alt="image " className='md:h-24'/>
                        </div>
                        
                        <div className='grid gap-2 px-8'>

                            {/* Name Input */}
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={inputData.name}
                                onChange={handleChange}
                                className='input input-bordered h-8'
                            />

                            {/* Description Input */}
                            <label>Description:</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={inputData.description}
                                onChange={handleChange}
                                className='input input-bordered h-8'
                            />

                            {/* Price Input */}
                            <label>Price:</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={inputData.price}
                                onChange={handleChange}
                                className='input input-bordered h-8'
                            />

                            {/* Category Input */}
                            <label htmlFor="category">Category:</label>
                            <select
                                name="category"
                                id="category"
                                value={inputData.category}
                                onChange={handleChange}
                                className='input input-bordered h-8'
                            >
                                <option value="">Select Category</option>
                                <option value="mobile">Mobile</option>
                                <option value="laptop">laptop</option>
                                <option value="headphone">headphone</option>
                                <option value="watch">watch</option>
                                <option value="book">book</option>
                                <option value="perfume">perfume</option>
                                <option value="Fashion-men's">Fashion-men's</option>
                                <option value="Fashion-Women's">Fashion-Women's</option>
                                <option value="cycle">cycle</option>
                            </select>

                            {/* Image Input */}
                            <label>ImgUrl:</label>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                value={inputData.image}
                                onChange={handleChange}
                                className='input input-bordered h-8'
                            />

                            {/* Quantity Input */}
                            <label>Product Quantity:</label>
                            <input
                                type="number"
                                name="qty"
                                id="qty"
                                value={inputData.qty}
                                onChange={handleChange}
                                className='input input-bordered h-8'
                            />

                            {/* Update Button */}
                            <button type="submit" className='btn bg-green-700 px-10 hover:bg-green-600 rounded-3xl text-white tracking-[.15em] font-semibold mt-3 mb-3'>
                                Update Product
                            </button>
                        </div>
                        <Link to ="/admin_data" ><p className=' flex justify-center text-blue-800 hover:text-green-600 hover:underline hover:underline-offset- gap-1 p-2'>  <MdArrowBack className=' text-xl'/> Back to page</p></Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Update_product;
