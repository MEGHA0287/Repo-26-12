"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const handleClick = (route) => {
        router.push(route);
    };

    const [advertisementText, setAdvertisementText] = useState("SALE: Get 20% off on selected items!");

    const advertisementTexts = [
        "SALE: Get best Discount on selected items!",
        "Limited Time Offer: Shop now and save!",
        "New arrivals: Discover the latest products!",
        // Add more advertisement text here
    ];

    useEffect(() => {
        let currentIndex = 0;

        // Rotate the advertisement text every 2 seconds
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % advertisementTexts.length;
            setAdvertisementText(advertisementTexts[currentIndex]);
        }, 2000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <header className="text-gray-600 body-font bg-slate-200 fixed top-0 z-50 w-full">
                {/* Black strip for sale advertisement */}
                <div style={{ background: 'black', color: 'white', padding: '10px 0', textAlign: 'center', fontSize: "14px" }} className=' font-normal'>
                    <p>{advertisementText}</p>
                </div>

                <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        {/* Add your navigation links here */}
                    </nav>
                    <div
                        style={{
                            flex: '1', // This will take up the remaining space horizontally
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center', // Center vertically
                        }}
                    >
                        <img
                            src="/images/gologo.jpeg"
                            alt="img_logo"
                            style={{
                                width: '220px', // Set the width of the logo
                                height: 'auto', // Auto adjust the height to maintain aspect ratio
                                marginLeft: '20px', // Adjust margin to center it horizontally
                                marginRight: 'auto', // Adjust margin to center it horizontally
                                display: 'block', // Remove any extra space around the image
                                marginTop: "-45px"
                            }}
                        />
                    </div>

                    {/* Add the text links (Create an Account and Login) */}
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '60px', marginTop: "60px" }}>
                        <a href="#" style={{ textDecoration: 'none', color: '#333', margin: '42px 0', cursor: 'pointer', padding: "10px", marginTop: "17px" }}>
                            Create an Account
                        </a>
                        <a href="#" style={{ textDecoration: 'none', color: '#333', margin: '0 30px', cursor: 'pointer', padding: "10px", marginTop: '-25px' }}>
                            Login
                        </a>
                    </div>
                </div>

                {/* Horizontal line */}
                <div style={{ width: '100%', paddingLeft: '130px', paddingRight: '130px', marginTop: "-52px" }} >
                    <div style={{ borderBottom: '1px solid black' }}></div>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center">
                        {/* Hardcoded product names */}
                        <div className="my-5 font-extralight #5C5C5C font-serif mx-9 w-1/9 cursor-pointer relative" onClick={() => handleClick('/bath')}>
                            Bath & Body
                        </div>
                        <div className="my-5 font-extralight #5C5C5C font-serif mx-9 w-1/9 cursor-pointer relative" onClick={() => handleClick('/faceMist')}>
                            Pure Face Mist
                        </div>
                        <div className="my-5 font-extralight #5C5C5C font-serif mx-9 w-1/9 cursor-pointer relative" onClick={() => handleClick('/perfumery')}>
                            Perfumery
                        </div>
                        <div className="my-5 font-extralight #5C5C5C font-serif mx-9 w-1/9 cursor-pointer relative" onClick={() => handleClick('/oils')}>
                            Oils
                        </div>
                        <div className="my-5 font-extralight #5C5C5C font-serif mx-9 w-1/9 cursor-pointer relative" onClick={() => handleClick('/giftHampers')}>
                            Luxury Gift Hampers
                        </div>
                        
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;


// import { useRouter } from 'next/navigation';

// import React, { useEffect, useState } from 'react';

// const Navbar = () => {
//     // const productNames = ["Bath & Body", "Perfumery", "Oils", "Luxury Gift Hampers"]; // Hardcoded product names
//     // const firstSectionProductNames = productNames.slice(0, 7);

//     const router = useRouter();
//     const handleClick = () => {
//         router.push('/bath');
//     };


//     const [advertisementText, setAdvertisementText] = useState("SALE: Get 20% off on selected items!");

//     const advertisementTexts = [
//         "SALE: Get best Discount on selected items!",
//         "Limited Time Offer: Shop now and save!",
//         "New arrivals: Discover the latest products!",
//         // Add more advertisement text here
//     ];

//     useEffect(() => {
//         let currentIndex = 0;

//         // Rotate the advertisement text every 2 seconds
//         const interval = setInterval(() => {
//             currentIndex = (currentIndex + 1) % advertisementTexts.length;
//             setAdvertisementText(advertisementTexts[currentIndex]);
//         }, 2000);

//         return () => clearInterval(interval); // Cleanup on unmount
//     }, []);

//     return (
//         <div>
//             <header className="text-gray-600 body-font bg-slate-100 fixed top-0 z-50 w-full">
                
//                 <div style={{ background: 'black', color: 'white', padding: '15px 0', textAlign: 'center', fontSize: "14px" }} className=' font-normal'>
//                     <p>{advertisementText}</p>
//                 </div>

//                 <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
//                     <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
//                         {/* Add your navigation links here */}
//                     </nav>
//                     <div
//                         style={{
//                             flex: '1', // This will take up the remaining space horizontally
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center', // Center vertically
//                         }}
//                     >
//                         <img
//                             src="/images/gologo.jpeg"
//                             alt="img_logo"
//                             style={{
//                                 width: '220px', // Set the width of the logo
//                                 height: 'auto', // Auto adjust the height to maintain aspect ratio
//                                 marginLeft: '20px', // Adjust margin to center it horizontally
//                                 marginRight: 'auto', // Adjust margin to center it horizontally
//                                 display: 'block', // Remove any extra space around the image
//                                 marginTop: "-45px"
//                             }}

//                         />
//                     </div>

//                     {/* Add the text links (Create an Account and Login) */}
//                     <div style={{ display: 'flex', alignItems: 'center', marginRight: '60px', marginTop: "60px" }}>
//                         <a href="#" style={{ textDecoration: 'none', color: '#333', margin: '42px 0', cursor: 'pointer', padding: "10px", marginTop: "17px" }}>
//                             Create an Account
//                         </a>
//                         <a href="#" style={{ textDecoration: 'none', color: '#333', margin: '0 30px', cursor: 'pointer', padding: "10px", marginTop: '-25px' }}>
//                             Login
//                         </a>
//                     </div>
//                 </div>

//                 {/* Horizontal line */}
//                 <div style={{ width: '100%', paddingLeft: '130px', paddingRight: '130px', marginTop: "-52px" }} >
//                     <div style={{ borderBottom: '1px solid black' }}></div>
//                 </div>

//                 <div className="flex justify-center">
//                     <div className="flex flex-wrap justify-center">
//                         {/* First Row of Products */}
//                         {firstSectionProductNames.map((productName, index) => (
//                             <div
//                                 key={index}
//                                 className="my-5 font-extralight #5C5C5C font-serif mx-9 w-1/9 cursor-pointer relative" onClick={handleClick}
//                             >
//                                 {productName}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default Navbar;