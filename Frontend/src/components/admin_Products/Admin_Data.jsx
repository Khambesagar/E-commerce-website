import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import Icons
import { MdDeleteForever } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";

//Add toaster
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin_Data() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const adminData = async () => {
            try {
                const res = await axios.get('http://localhost:4001/getproduct/get');
                console.log(res.data);
                setProduct(res.data);

            } catch (error) {
                console.log(error);
            }
        }
        adminData();
    }, [])

    //Handle Delete product

    const { id } = useParams();
    const handleDelete = async (id) => {

        const confirmation = window.confirm('Are you sure you want to delete this product?');

        if (confirmation) {
            try {
                const res = await axios.delete(`http://localhost:4001/delete/${id}`);

                console.log(res.data);  // Log the response
                // alert('Product deleted successfully') 
                // Update the product state by filtering out the deleted product
                setProduct(prevProducts => prevProducts.filter(product => product._id !== id));

                toast.success('Product deleted successfully', {
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

            } catch (error) {
                console.error('Error deleting product:', error);  // Log full error details
                // alert('Failed to delete product');
                toast.success('Failed to delete product', {
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
        }

    }
    return (
        <>
            <div className='max-w-screen-2xl container md:px-20 mt-2 p-2 bg-white shadow-md '>

                <div className='flex justify-between'>
                    <Link to="/" className='my-auto flex text-blue-700  hover:text-green-800 '><MdArrowBack className='text-2xl' /><h1 className=' cursor-pointer '> Got to Home</h1></Link>
                    <Link to='/add_products'> <button className=' btn btn-active btn-secondary flex justify-self-end '>Add Product</button></Link>
                </div>

                <div >
                    {product.map((items) => (
                        <div className=' grid md:grid-cols-[1fr_2fr_1fr] gap-1 h-auto align-center shadow-md shadow-[#3a3168] p-3 mt-3 mb-3 bg-slate-300 rounded-xl '>

                            <div className=''>
                                <img src={items.image} alt="" className='h-40 w-40 object-contain md:p-2 md:m-2 bg-white rounded-xl transition-transform transform hover:scale-110 cursor-pointer mx-auto' />
                            </div>

                            <div className='overflow-auto text-center my-auto'>
                                <h1 className='font-semibold'>{items.name}</h1>
                                <p>{items.description}</p>
                                <p>Price: {items.price}</p>
                                <p>Category: {items.category}</p>
                                <p>Quantity: {items.qty}</p>
                            </div>
                            {/*  buttons  */}
                            <div className='flex gap-2 justify-center my-auto p-2'>
                                {/* Update Button  */}
                                <Link to={`/update_product/${items._id}`}>
                                    <button className='btn btn-success'> <FaEdit className='text-2xl' /> Update</button>
                                </Link>

                                {/* Delete Button */}

                                <button onClick={() => handleDelete(items._id)} className='btn btn-error'> <MdDeleteForever className='text-2xl' /> Delete</button>


                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Admin_Data