
import Link from 'next/link';
import React from 'react';

const Base = () => {
    return (
        <div>
            <footer className="text-white body-font bg-gray-700 -mt-20">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font text-white tracking-widest text-sm mb-3 font-extrabold">ABOUT US</h2>
                            <nav className="list-none mb-10">
                                <li className='my-2'>
                                    <Link href={"/aboutUs"} className="text-white hover:text-gray-300 cursor-pointer">About Us</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/contact'} className="text-white hover:text-gray-300 cursor-pointer">Contact Us</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/terms'} className="text-white hover:text-gray-300 cursor-pointer">Terms & Conditions</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href={'/policy'} className="text-white hover:text-gray-300 cursor-pointer">Return Policy</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-extrabold text-white tracking-widest text-sm mb-3">USEFUL LINKS</h2>
                            <nav className="list-none mb-10">
                                <li className='my-2'>
                                    <Link href={'/privacy'} className="text-white hover:text-gray-300 cursor-pointer">Privacy Policy</Link>
                                </li>
                                <li className='my-2'>
                                    <Link href='/faq' className="text-white hover:text-gray-300 cursor-pointer">FAQ's</Link>
                                </li>
                                
                            </nav>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-extrabold text-white tracking-widest text-sm mb-3 -mt-2">CUSTOMER CARE</h2>
                            <p> <b>Online Order Queries</b></p>
                            <h3>+91 9820936829</h3>
                            <p><b>Support and Sales :</b> GoOrg.Mum@Gmail.com</p>
                            <p className='my-2'><b>Our Registered Address: </b>Ganesh Peth Lane, Dadar West Mumbai MH, India 400028
                                <br /> <b>Other Office:</b> Bhandarwada, Malad West Mumbai MH, India 400064</p>
                        </div>
                    </div>
                </div>
                <div className="container text-white text-left py-2 mx-16 mb-1">
                    <p><small>@ All rights Reserved - Go Org </small></p>
                </div>
            </footer>
        </div>
    )
}

export default Base;


