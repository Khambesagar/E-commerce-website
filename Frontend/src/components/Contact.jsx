import React, { useState } from 'react';

//Add toaster
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Formspree endpoint URL 
        const formspreeEndpoint = 'https://formspree.io/f/mwpkjvnd';

        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // setStatus('Thanks for your message! We will get back to you soon.');

              toast.success('Thanks for your message...', {
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
            

            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('Something went wrong. Please try again later.');
        }
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-2  shadow-md p-10'>
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg shadow-black">

                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    {status && <p className="mb-4 text-center text-green-500">{status}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Enter your name'
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Enter your email'
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Enter your message'
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default ContactForm;

