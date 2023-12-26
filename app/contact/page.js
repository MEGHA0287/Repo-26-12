'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted');
        // console.log('Form data:', formData);

        // Check if any of the fields are empty
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all the fields.');
            return;
        }

         // Email validation regular expression
         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

         if (!emailRegex.test(formData.email)) {
             alert('Please enter a valid email address.');
             return;
         }

        emailjs
            .sendForm('service_ue4blun', 'template_q00u1ud', e.target, 'EGbBT6-bAZBQCpK0S')
            .then(
                (response) => {
                    console.log('Email sent successfully:', response);
                    // Clear the form after successful submission
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    console.error('Email sending failed:', error);
                }
            );
    };

    return (
        <div>
            <section className="text-gray-600 body-font relative mt-44">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Contact Us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Come, Join GoOrg &amp; Be the part of Global Cosmetics Sustainability Movement
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto px-32">
                        <div className="flex flex-wrap -m-2">
                            <form onSubmit={handleSubmit}> {/* Move the <form> element here */}
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-28 leading-8 transition-colors duration-200 ease-in-out pl-6" required
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-28 leading-8 transition-colors duration-200 ease-in-out pl-6" required
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out pl-6" required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button
                                        type="submit"
                                        className="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a className="text-indigo-500">Support and Sales : GoOrg.Mum@Gmail.com</a>
                            <p className="leading-normal my-5">Bhandarwada
                                <br />Malad West Mumbai ,India 400064
                            </p>
                            <span className="inline-flex">
                                <a className="text-gray-500 cursor-pointer">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500 cursor-pointer" >
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500 cursor-pointer">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500 cursor-pointer">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;




