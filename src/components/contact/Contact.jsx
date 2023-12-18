import React, { useState } from 'react';
import Address from './Address'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-[1200px] mx-auto p-5 bg-gray-100 rounded-lg">
            <div className='w-full gap-3 grid md:grid-cols-3'>
                <div className='overflow-hidden w-full md:col-span-2'>
                    <img src=" /images/email.png" alt="..." className='object-cover rounded-l-md ' />
                </div>
                <div className=' flex justify-center items-center p-4'>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col md:gap-5 gap-0">

                        <div className="">
                            <label htmlFor="name" className="block text-gray-700 md:font-bold font-semibold md:mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="rounded-r-3xl rounded-bl-3xl rounded-tl-md w-full p-2 text-white bg-gray-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="email" className="block text-gray-700 md:font-bold font-semibold md:mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-r-3xl rounded-bl-3xl rounded-tl-md w-full p-2 text-white bg-gray-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="message">
                            <label htmlFor="message" className="block text-gray-700 md:font-bold font-semibold md:mb-2">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                cols={30}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="rounded-r-3xl rounded-bl-3xl rounded-tl-md w-full p-2 text-white bg-gray-400 focus:outline-none"
                                required
                            ></textarea>
                        </div>
                        <div className=" cursor-pointer">
                            <button
                                type="submit"
                                className="bg-[#00cba9] hover:bg-[#00cb87] text-white p-2 rounded"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

const Contact = () => {
    return (
        <div id='contact' className="py-10 h-full">
            <div className='flex flex-col justify-center items-center'>
                <Address />
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;
