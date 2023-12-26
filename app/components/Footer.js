import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="text-red-500 body-font bg-zinc-950">
                <div className="container px-5 py-10 mx-auto -mt-36">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src='https://www.khadinatural.com/cdn/shop/files/Untitled_design-549_300x.png?v=1653848522' alt="img" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-red-500 text-2xl title-font font-medium mb-3">Natural</h2>
                                <p className="leading-relaxed text-base">We believe in preserving natural ingredients while processing products. We blend artisanal way to preserve goodness of natural Ingredients</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src='https://www.khadinatural.com/cdn/shop/files/Untitled_design-552_300x.png?v=1653848542' alt='img' />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-red-500 text-2xl title-font font-medium mb-3">Clinically Proven</h2>
                                <p className="leading-relaxed text-base">GoOrg Truly Believes in super powers of natural extracts and thus we incorporate the natural extracts.</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src='https://www.khadinatural.com/cdn/shop/files/Untitled_design-550_300x.png?v=1653848556' alt='img' />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-red-500 text-2xl title-font font-medium mb-3">Eco-Friendly</h2>
                                <p className="leading-relaxed text-base">GoOrg products are non-harmful to environment too. They do not cause any harm to marine life, when mixed with water.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src='https://www.khadinatural.com/cdn/shop/files/Untitled_design-551_300x.png?v=1653848570' alt='img' />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-red-500 text-2xl title-font font-medium mb-3">Certified</h2>
                                <div className="leading-relaxed text-base text-left">
                                    <p>FDA, GMP Certified Products</p>
                                    <p>Cruelty, Alcohol, Parabens, SLS Free</p>
                                    <p>Handcrafted and Vegan Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Footer