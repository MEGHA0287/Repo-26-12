import React from 'react'

const Oils = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mt-40">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Natural, Handmade Cruelty Free, GMP certified,FDA Approved, SLS Free, Paraben Free, Alcohol Free,</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">GoOrg Truly Believes that the Mother Earth protects us and all the formulations are inspired by natural elements. With the belief in super powers of natural extracts and thus we incorporate the natural extracts. We believe in preserving natural ingredients while processing products.</p>
                    </div>
                    <div className="flex flex-wrap justify-center -m-2">
                        <div className="xl:w-1/3 md:w-1/2 p-1">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <img className="h-96 w-full object-cover object-center mb-6" src="/images/hd/Beard Oil.jpg" alt="content" style={{ objectFit: 'cover' }}/> {/* Set a fixed height for the image */}
                                <h3 className="tracking-widest text-indigo-700 text-xs font-medium title-font">OIL</h3>
                                <h2 className="text-lg text-yellow-700 italic font-medium title-font mb-4">GoOrg Beard Oil</h2>
                                <p className="leading-relaxed text-base"><b>SMELL TREMENDOUS</b>: Create sensory delight Lightly scented with yet clean smelling and
                                    never over powering<br />
                                    <b>NATURALLY MAGNIFICENT</b>: Infused with sweet almond, Jojoba, Avocado & Argan oil for
                                    secure beard volume<br />
                                    <b>SMOOTH, SILKY & SEXY</b>
                                    : Turn itchy, dry and cranky beard to softer, shinier & GLORIOUS
                                    facial hair as it been used the Hazelnut oil, grapeseed oil, gooseberry oil<br />
                                    <b>MADE WITH LOVE OF NATURE</b>
                                    : made with 100 % naturals plant oil with careful selection
                                    for your Bread and Mooch. No chemical, No paraben, No animal fat</p>
                                <br />
                                <li>Volume : 30 ml</li>
                                <li>Best Before 3 Yrs</li>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-1">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <img className="h-96 w-full object-cover object-center mb-6" src="/images/hd/Kesar Kumkumadi.jpg" alt="content" style={{ objectFit: 'cover' }} /> {/* Set a fixed height for the image */}
                                <h3 className="tracking-widest text-indigo-700 text-xs font-medium title-font">OIL</h3>
                                <h2 className="text-lg text-yellow-700 italic font-medium title-font mb-4">Kesar Kumkumadi</h2>
                                <p className="leading-relaxed text-base"><b>Reduces Dark Spots & Pigmentation</b> Formulated with the recipe of blending natural oils and herbs like saffron and lotus extracts, the 100% kumkumadi skin radiance facial oil.<br/>
                                <b>Highly efficacious</b>
                                     It minimizing dark spots and pigmentation, resulting in skin thats brigh and spotless.Moisturizes skin rich in skin brightening ingredients like saffron, 100% kumkumadi ski radiance facial oil is extremely moisturizing and penetrates deep into the skin to improve the hydration level, making your skin soft, plump and intensely moisturized. Makes skin radiant infused with natural herbs. </p>
                                <br />
                                <li>Volume : 30ml</li>
                                <li>Best Before : 3 Years</li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Oils