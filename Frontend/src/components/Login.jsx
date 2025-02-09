import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import imgsignup from "../../public/imgsignup.png"
import * as Yup from "yup";
import axios from 'axios';

import icon from "../../src/assets/images/best_electronic_img/web-icon.png"

//Add toaster
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Yup Schemas ..
const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email!')
        .required('Please Enter Email! '),

    password: Yup.string()
        .min(4)
        .max(15)
        .required('Enter Password!'),
});


function Login() {
    // Show & Hide password..
    const [show, setShow] = useState(false);

    const navigate = useNavigate(); //Hook

    function handleToggle() {
        setShow((prev) => !prev);
    }

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
                    password: data.password,
                };

                await axios.post('http://localhost:4001/user/login', userInfo)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data) {
                            toast.success('Successfully Login !', {
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

                        // add in localstorage and use in navbar comp. Login/logout
                        localStorage.setItem('login', true)
                        navigate('/')

                    })
                    .catch((err) => {
                        console.log(err);
                        if (err.response) {
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
                            // localStorage.setItem('Users', JSON.stringify(res.data.user));
                        }
                    });
                handleReset();
            }
        })

    return (
        <>
            <div className='  max-w-screen-2xl container md:px-44 mt-2  '>
                <div className=' border bg-white grid md:grid-cols-2 md:gap-9 md:p-10 rounded-3xl shadow-2xl' >
                    {/* image section */}
                    <div className='hidden md:block bg-gradient-to-b from-green-600 to-green-400 rounded-3xl p-6'>
                        <span className='text-white bold'>
                            <p className='text-3xl font-serif mt-2 mb-1 font-bold'>Welcome our web!</p>
                            <p className='tracking-[.10em]'>Get Started and Unlock a <br />World of Shopping!... </p>

                        </span> <br /><br />
                        <img src={imgsignup} className='w-80 h-60 pb-0' alt="" />
                    </div>

                    {/* form section */}
                    <div className='p-2'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid place-items-center'>
                                <img src={icon} alt="logo" className="h-10 w-10 md:w-14 md:h-14 object-contain transition-transform transform hover:scale-110 " />
                            </div>
                            {/* <p className="text-sm md:text-xl font-bold">E-Shop</p> */}
                            <h1 className='font-bold text-center text-md md:text-2xl  '> Welcome Back ! . . .</h1>
                            <p className='mt- text-sm text-center p-2 text-green-500'>Please Login to your account </p>

                            {/* Email : */}
                            <div className='mt-5'>
                                <label htmlFor="email" className="input input-bordered flex items-center gap-3">
                                    <MdEmail className='hidden md:block h-4 w-4 opacity-70' />
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
                            <div >
                                <label htmlFor="password" className="input input-bordered flex items-center gap-3 ">
                                    <AiFillLock className='hidden md:block opacity-65  h-5 w-5' />
                                    <input
                                        id="password"
                                        name="password"
                                        type={show ? 'text' : 'password'}
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                        placeholder='Enter Password'
                                        className='w-full'
                                    />
                                    <button onClick={handleToggle} className='ms-16 text-xl'>
                                        {show ? <BiSolidShow /> : <BiSolidHide />}
                                    </button>
                                </label>
                                {errors.password && touched.password && <small style={{ color: 'red' }}> {errors.password} </small>}
                                <br />
                            </div>
                            {/* Button Submit*/}
                            <div className=' border text-center p-2 rounded-xl hover:bg-green-800 bg-green-600 text-white mt-2  tracking-[.15em] cursor-pointer'>
                                <button type="submit" > Login </button>
                            </div>
                            <p className='text-center mt-5 hover:text-green-500 text-gray-500 font-thin'>Don't have an account? <span className='underline text-blue-700 cursor-pointer'>
                                <Link to='/signup'> Signup </Link>
                            </span> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login