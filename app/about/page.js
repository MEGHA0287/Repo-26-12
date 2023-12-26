'use client'
import { useRouter } from 'next/navigation';
import React from 'react';


const About = () => {

    const router = useRouter()
    const handleClick = () => {
        router.push('/aboutUs')
    }
    const handleClick2 = () => {
        router.push('/bath')
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const titleStyle = {
        fontFamily: 'abril!important',
        fontSize: '28px',
        color: '#333',
        margin: '40px 5px 5px',
        textAlign: 'center',
        letterSpacing: '2px',
    };

    const productCardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap', // Allow products to wrap to the next row
        justifyContent: 'center', // Center products horizontally
    };

    const productCardStyle = {
        width: '500px', // Set the width of each card
        margin: '20px', // Adjust the margin between cards
        padding: '70px',
        // border: '1px solid #ccc',
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const productImageStyle = {
        width: '100%', // Set the image width to 100% of the container
        height: '90%', // Allow the height to adjust proportionally
    };

    return (
        <div style={containerStyle} className='bg-red-50 my-0 -mb-20'>
            <h1 style={titleStyle} className='font-semibold'>LETS KNOW US</h1>

            <div style={productCardContainerStyle} className='mb-28 -my-10'>
                <div style={productCardStyle}>
                    <img
                        src={'/images/PPP-403.jpg'}
                        alt="{product.name}"
                        style={productImageStyle}
                        className='mb-3'
                    />

                    <button className='mt-3 mb-8' style={{ fontSize: '12px', padding: '10px 0', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer', letterSpacing: '2px', width: '30%',borderColor:"gray",borderRadius:'5px' }} onClick={handleClick}>
                        About Us
                    </button>

                </div>
                
            </div>
        </div>
    );
};

export default About;
