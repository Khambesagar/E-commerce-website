import React, { useEffect, useState } from 'react';
import add_img from '../../assets/images/best_electronic_img/add_product_img.webp';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { MdArrowBack } from "react-icons/md";

//Add toaster
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add_products() {
    const [addData, setAddData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        qty: ''
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4001/addproduct/add', formData);
            console.log(response.data);
            // alert('Product added Successfully..')
            toast.success('Product added Successfully..', {
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

            // Optionally update the state with the new data after the product is added
            setAddData(prevData => [...prevData, response.data]);

            // Clear the form after successful submission
            setFormData({
                name: '',
                description: '',
                price: '',
                category: '',
                image: '',
                qty: ''
            });

            // Hide the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);


        } catch (error) {
            console.log('Error adding product:', error);
            toast.success('Error adding product:', error, {
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

    useEffect(() => {
        const recieveData = async () => {
            try {
                const res = await axios.post('http://localhost:4001/addproduct/add');
                console.log(res.data);
                setAddData(res.data);

            } catch (error) {
                console.log({ message: error });
            }
        };
        recieveData();
    }, []);

    return (
        <>
            <div>
                <div className='max-w-screen-2xl container md:px-44 mt-2 '>
                    <div className='grid md:grid-cols-[2fr_3fr] gap-14  p-9 mt-2 border bg-white rounded-3xl shadow-2xl'>

                        {/* image */}
                        <div className='bg-gradient-to-b from-orange-600 to-orange-300 rounded-3xl p-8 hidden md:block w-96'>
                            <div className='flex flex-col gap-3 '>
                                <h1 className='text-white text-2xl font-semibold text-center '>Add New Product ...! </h1>
                                <p className='text-slate-100'>
                                    Ready to sell? Add your product to the cart and attract more buyers . . . . .
                                </p>
                            </div>
                            <div className='mt-28'>
                                <img src={add_img} alt="" className='w-90 h-60 ' />
                            </div>
                        </div>

                        {/* Form */}
                        <div className='grid grid-cols-1 mt-2 md:w-96'>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className='input input-bordered h-8 focus:ring-2 focus:ring-orange-500 focus:outline-none '
                                />

                                <label>Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    className='input input-bordered h-8 focus:ring-2 focus:ring-orange-500 focus:outline-none '
                                />

                                <label>Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    required
                                    className='input input-bordered h-8 focus:ring-2 focus:ring-orange-500 focus:outline-none '
                                />

                                <label>Category:</label>
                                <select
                                    name="category"
                                    id="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className='input input-bordered h-8 focus:ring-2 focus:ring-orange-500 focus:outline-none '
                                    required
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

                                <label>ImgUrl:</label>
                                <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    required
                                    className='input input-bordered h-8 focus:ring-2 focus:ring-orange-500 focus:outline-none '
                                />

                                <label>Product Quantity:</label>
                                <input
                                    type="number"
                                    name="qty"
                                    id="qty"
                                    value={formData.qty}
                                    onChange={handleInputChange}
                                    required
                                    className='input input-bordered h-8 focus:ring-2 focus:ring-orange-500 focus:outline-none '
                                />

                                {/* Button */}
                                <button
                                    type="submit"
                                    className='btn bg-orange-600 px-10 hover:bg-amber-600 rounded-3xl text-white tracking-[.15em] font font-semibold mt-3'
                                >
                                    Add Product
                                </button>
                                <Link to="/admin_data" ><p className=' flex justify-center text-blue-800 hover:text-green-600 hover:underline hover:underline-offset- gap-1 pt-2'>  <MdArrowBack className=' text-xl' /> Back to page</p></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add_products;
