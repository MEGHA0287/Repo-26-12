import React from 'react';

const products = [
  {
    id: 1,
    type: 'SOAP',
    name: 'Pure Sandalwood Soap',
    description: 'An Ancient formula of Warming Aroma with umpteen medicinal benefits.',
    weight: 'Acts As An Astringent and Coolant',
    bestBefore: 'Rich Sandalwood Extract',
    suitableFor: 'Combats Skin Blemishes',
    imageSrc: '/images/hd/Sandalwood.jpg',
  },
  {
    id: 2,
    type: 'SOAP',
    name: 'Crimson Bloom',
    description: 'Infused with Pure Lotus Extracts & Shea Butter,Effectively Moisturizes & Nourishes Skin',
    weight: 'Soothes Irritation & Redness',
    bestBefore: 'Controls Oil and Sebum',
    suitableFor: 'Prevents Clogged Pores & Pimples',
    imageSrc: '/images/hd/Crimson.jpg',
},
{
    id: 3,
    type: 'SOAP',
    name: 'Lavender Hills',
    description: 'Tranquilizing & Fresh, All-Natural Soap Bar For Aroma Therapy.',
    weight: 'Subtle aroma relaxes nerves',
    bestBefore: 'Lifts Mood & Reduces Anxiety',
    suitableFor: 'Helps To Get Wrinkle-Free Skin',
    imageSrc: '/images/hd/Levender Hills.jpg',
  },
  {
    id: 4,
    type: 'SOAP',
    name: 'Sunset Dunes',
    description: 'Refreshing & Citrusy Fragrance In A Natural Therapeutic Deodorant Soap.',
    weight: 'Reduces Odour By Germ Growth',
    bestBefore: 'Combats Stress & Depression',
    suitableFor: 'Decongest Oil Prone Skin',
    imageSrc: '/images/hd/Sunset.jpg',
  },
  {
    id: 5,
    type: 'SOAP',
    name: 'Rose Royal',
    description: 'Delectable Aroma of The desi Gulab for A Natural Therapeutic Skin Affair!',
    weight: 'Cleanses skin well, adds moisture',
    bestBefore: 'Pamper skin naturally',
    suitableFor: 'Give exquisite bathing experience.',
    imageSrc: '/images/hd/Rose Royale.jpg',
  },
  {
    id: 6,
    type: 'SOAP',
    name: 'Shahi Ubtan',
    description: 'Inspired By The Vedic Recipe For A Luxury Of Traditional Herbal Purity',
    weight: 'Natural Skin Exfoliant',
    bestBefore: 'Reduces Facial Hair',
    suitableFor: 'Restores Uneven Skin Tone',
    imageSrc: '/images/hd/Ubtan.jpg',
  },
  {
    id: 7,
    type: 'SALT',
    name: 'Rose Bath Salt',
    description: 'Cleanest salt contains nutritional and therapeutic properties',
    weight: 'Improve muscle and nerve function',
    bestBefore: 'Improves blood oxygenation',
    suitableFor: 'Reduces inflammation',
    imageSrc: '/images/TEJ_0085.jpg',
  },
  {
    id: 8,
    type: 'SALT',
    name: 'Lavender Bath Salt',
    description: 'Made with Lavender essential oils offer the added benefit of aromatherapy.',
    weight: 'Improve common irritations, rashes ',
    bestBefore: 'Contains Healing Properties',
    suitableFor: 'Smells awesome & exfoliate skin',
    imageSrc: '/images/TEJ_0087.jpg',
  },
  // Add more products here...
];

const Bath = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-40">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Natural Artisanal Handmade Cruelty free , GMP certified,
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              GoOrg Truly Believes that the Mother Earth protects us and all the
              formulations are inspired by natural elements. With the belief in
              super powers of natural extracts and thus we incorporate the
              natural extracts. We believe in preserving natural ingredients while
              processing products.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 -my-5">
            {products.map((product) => (
              <div className="xl:w-1/3 md:w-1/2 p-1" key={product.id}>
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-400">
                  <img
                    className="h-96 rounded w-full object-cover object-center mb-6"
                    src={product.imageSrc}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-700 text-xs font-medium title-font">
                    {product.type}
                  </h3>
                  <h2 className="text-lg text-yellow-700 font-medium title-font mb-4 italic">
                    {product.name}
                  </h2>
                  <p className="leading-relaxed text-base text-yellow-950">{product.description}</p>
                  <br />
                  <li className=' text-yellow-950'>{product.weight}</li>
                  <li className=' text-yellow-950'>{product.bestBefore}</li>
                  <li className=' text-yellow-950'>{product.suitableFor}</li>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bath;