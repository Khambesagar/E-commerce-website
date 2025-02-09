import { useFormik } from 'formik'
import * as Yup from "yup";

import React, { useState } from 'react'
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import imgsignup from "../../public/imgsignup.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//Add toaster
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Yup Schemas ..
const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2)
        .max(30)
        .required("Please Enter Username!"),

    email: Yup.string()
        .email('Invalid email!')
        .required('Please Enter Email! '),

    password: Yup.string()
        .min(4)
        .max(15)
        .required('Enter Password!'),
});


function Signup() {
 
const navigate = useNavigate();
    // Show & Hide password..
    const [show, setShow] = useState(false);
    function handleToggle() {
        setShow((prev) => !prev);
    }


    // Formik ...use
    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const { touched, values, handleSubmit, handleChange, handleBlur, handleReset, errors }
        = useFormik({
            initialValues: initialValues,
            validationSchema: SignupSchema,
            // Fetch data to backend...
            onSubmit: async (data) => {
                // console.log(data);
                const userInfo = {
                    userName: data.userName,
                    email: data.email,
                    password: data.password
                };
                await axios.post('http://localhost:4001/user/signup', userInfo)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data) {
                            toast.success('Successfully Signup !', {
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
                        localStorage.setItem('Users', JSON.stringify(res.data.user));
                        navigate('/login')
                    })
                    .catch((err) => {
                        if (err.response) {
                            console.log(err);
                            // alert('Error:' + err.response.data.message);
                            toast.success('Error:' + err.response.data.message, {
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
                    });
                handleReset();
            }
        })

    return (
        <>
            <div className=' max-w-screen-2xl container md:px-44 mt-2'>
                <div className=' border bg-white grid md:grid-cols-2 md:gap-9 md:p-10 rounded-3xl shadow-2xl ' >
                    {/* image section */}
                    <div className='hidden md:block bg-gradient-to-b from-blue-800 to-blue-600 rounded-3xl p-6'>
                        <span className='text-white bold'>
                            <p className='text-3xl font-serif mt-2 mb-1 font-bold'>Welcome our web!</p>
                            <p className='tracking-[.10em]'>Get Started and Unlock a <br />World of Shopping!... </p>

                        </span> <br /><br />
                        <img src={imgsignup} className='w-80 h-60 pb-0' alt="" />

                    </div>
                    {/* form section */}
                    <div className='p-'>
                        <form onSubmit={handleSubmit} >
                            <h1 className='font-bold text-center text-2xl pt-2 '> Welcome!!</h1>
                            <p className=' text-xs text-center p-2 text-gray-500'>Please signup to your account </p>
                            {/* userName : */}
                            <div className='mt-5'>
                                <label htmlFor="userName" className=" input input-bordered flex items-center gap-3">
                                    <FaUser className=' h-4 w-4 opacity-70' />
                                    <input
                                        id="userName"
                                        name="userName"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.userName}
                                        onBlur={handleBlur}
                                        placeholder='Enter UserName'
                                    />
                                </label>
                                {errors.userName && touched.userName && <small style={{ color: 'red' }}> {errors.userName} </small>}
                                <br />
                            </div>

                            {/* Email : */}
                            <div>
                                <label htmlFor="email" className="input input-bordered flex items-center gap-3">
                                    <MdEmail className=' h-4 w-4 opacity-70' />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                        placeholder='Enter Email'
                                    />
                                </label>
                                {errors.email && touched.email && <small style={{ color: 'red' }}> {errors.email} </small>}
                                <br />
                            </div>
                            {/* password : */}
                            <div>
                                <label htmlFor="password" className="input input-bordered flex items-center gap-3">
                                    <AiFillLock className='opacity-65  h-5 w-5' />
                                    <input
                                        id="password"
                                        name="password"
                                        type={show ? 'text' : 'password'}
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                        placeholder='Enter password'
                                        className='w-full'
                                    />
                                    <button onClick={handleToggle} className='md:ms-16 text-xl'>
                                        {show ? <BiSolidShow /> : <BiSolidHide />}
                                    </button>
                                </label>
                                {errors.password && touched.password && <small style={{ color: 'red' }}> {errors.password} </small>}
                                <br />
                            </div>

                            {/* Button Submit*/}
                            <div className=' border text-center p-2 rounded-xl bg-blue-600 text-white mt-2  tracking-[.15em] cursor-pointer'>
                                <button type="submit"> Signup </button>
                            </div>
                            <p className='text-center mt-2 text-gray-500 font-thin hover:text-blue-700'>Already a user? <span className='underline text-blue-700 cursor-pointer'>
                                <Link to='/login'> Login </Link> </span> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup