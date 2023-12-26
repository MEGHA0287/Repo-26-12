'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Hotdeals = () => {
    const router=useRouter()
    const handleProducts=()=>{
        router.push('/products')
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
        margin: '20px',
        textAlign: 'center',
        letterSpacing: '2px',
    };

    const productCardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap', // Allow products to wrap to the next row
        justifyContent: 'center', // Center products horizontally
    };

    const productCardStyle = {
        width: '300px', // Set the width of each card
        margin: '10px', // Adjust the margin between cards
        padding: '1px',
        border: '1px solid #ccc',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    };

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Luxury Gift Hamper',
            // description: "GoOrg Presents Ultimate Luxury Hamper with All Natural Curated Products.",
            imageUrl: '/images/Vivaan Studios-21.jpg', // Replace with your image URL
        },
        {
            id: 2,
            name: 'Gift Hamper',
            // description: 'Made With Rich Sandalwood Extract,Heals Prickly Heat Rashes ; Summer Skin Woes',
            imageUrl: '/images/Vivaan Studios-22.jpg', // Replace with your image URL
        },
        {
            id: 3,
            name: 'Gift Hamper',
            // description: 'Enhanced With Lavender Extracts; Organic Shea Butter,Lifts Mood; Reduces Anxiety,Subtle aroma relaxes nerves',
            imageUrl: '/images/Vivaan Studios-24.jpg', // Replace with your image URL
        },
        {
            id: 4,
            name: 'Gift Hamper',
            // description: 'GoOrg Presents Ultimate Luxury Hamper with All Natural Curated Products.Share this with Your Valued Clients, Loved once!',
            imageUrl: '/images/Vivaan Studios-23.jpg', // Replace with your image URL
        },
        // Add more product objects as needed
    ];

    const productImageStyle = {
        width: '100%', // Set the image width to 100% of the container
        height: '380px', // Allow the height to adjust proportionally
        objectFit:'cover',
        border:"1px solid #ccc"

    };

    return (
        <div style={containerStyle} className='bg-red-50 '>
            <h1 className="font-semibold" style={titleStyle}>HOT DEALS</h1>
            {/* <button onClick={handleProducts} style={{fontSize: '12px',padding: '5px 60px',backgroundColor: '#333',color: '#fff',border: 'none',cursor: 'pointer',letterSpacing: '2px',}} className='mb-3' >
                VIEW ALL
            </button> */}
            <div style={productCardContainerStyle}>
                {products.map((product) => (
                    <div key={product.id} style={productCardStyle}>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            style={productImageStyle}
                            className='mb-3'
                        />
                        <p><b>{product.name}</b></p>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotdeals;
