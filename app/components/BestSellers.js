
import React from 'react';

const BestSellers = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const titleStyle = {
        fontFamily: 'abril!important',
        fontSize: '24px',
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
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Pure Sandalwood Soap',
            // description: "Made With Rich Sandalwood Extract, Acts As An Astringent and Coolant, Heals Prickly Heat Rashes,Summer Skin Woes ",
            imageUrl: '/images/hd/Sandalwood.jpg',
            
        },
        {
            id: 2,
            name: 'Shampoo Bar',
            // description: 'prepared from steam distillation, The intense strain of the residual floral water from this process is extremely light',
            imageUrl: '/images/buety.jpg', // Replace with your image URL
        },
        {
            id: 3,
            name: 'Lotus Face Mist',
            // description: 'Purifies your skin, You may notice a minimized appearance of your pores, Your face feeling more fresh and vibrant.',
            imageUrl: '/images/hd/Lotus Face Mist.jpg', // Replace with your image URL
        },
        {
            id: 4,
            name: 'Diffuser Oil',
            // description: 'Diffusing essential oils supports your mood, focus, energy, and even your immunity',
            imageUrl: '/images/TEJ_00781.jpg', // Replace with your image URL
        },
        // Add more product objects as needed
    ];

    const productImageStyle = {
        width: '100%', // Set the image width to 100% of the container
        height: '350px', // Set a fixed height for all images
        objectFit: 'cover', // Ensure the image covers the fixed height
        border: '1px solid #ccc', // Add a border around the image
    };

    return (
        <div style={containerStyle} className='bg-red-50'>
            <h1 style={titleStyle} className=' font-semibold'>ALL TIME BEST SELLERS</h1>
            {/* <button style={{ fontSize: '12px', padding: '5px 60px', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer', letterSpacing: '2px', }} className='mb-3'>
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
                        <p className='my-1'><b><i>{product.name}</i></b></p>
                        <p className='my-2'>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellers;