
'use client'

import React, { useState, useEffect } from 'react';

const ImageSlideshow = () => {
  // Hardcoded image filenames
  const imageFilenames = ['Sandalwood.jpg','Sandalwood.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageFilenames.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="relative mt-48">
      <div className="overflow-hidden mb-5" style={{height:"30vw"}}>
        {imageFilenames.map((filename, index) => (
          <img
            key={index}
            src={`/images/${filename}`} // Construct the src URL based on the filename
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: currentIndex === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {imageFilenames.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;










// components/ImageSlideshow.js

// 'use client'

// import React, { useState, useEffect } from 'react';

// const ImageSlideshow = () => {
//   const images = [
//     'https://www.khadinatural.com/cdn/shop/files/1700-510_440f2cfc-fe65-4f33-88af-dc8ab9645bfc_1400x.jpg?v=1693478762',
//     'https://www.khadinatural.com/cdn/shop/files/1700-510_aeff8818-b924-4710-be00-ce12a6dbd84e_1400x.png?v=1693486382',
//     'https://www.khadinatural.com/cdn/shop/files/1700-510_1_9148fe7c-060a-447f-98f2-f3c86e6047a8_1400x.png?v=1693478764',
//     'https://www.khadinatural.com/cdn/shop/files/1700-510_a489d538-63a3-441a-ab6a-f590ad560de7_1400x.png?v=1693478765',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   return (
//     <div className="relative mt-48">
//       <div className="overflow-hidden h-96 mb-10">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
//               }`}
//             style={{ zIndex: currentIndex === index ? 1 : 0 }}
//           />
//         ))}
//       </div>
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
//               }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlideshow;
