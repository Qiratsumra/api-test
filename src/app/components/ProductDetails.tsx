'use client'
import { urlFor } from "../../../src/ulits/urlfor"; // Correct import

export default function ProductDetails({ products }: any) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          {/* Top Image */}
          <div className="h-[300px] sm:h-[450px] flex items-center justify-center mb-6">
            <img
            
              src={urlFor(products.image).width(600).url()} // Use urlFor to generate URL
              alt={products.name}
              className="object-contain mx-auto h-full w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
              {products.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium font-serif text-gray-700 mt-2">
              Rs.{products.price}
            </h2>
            <p className="text-gray-600 mt-4">{products.description}</p>
          </div>

          <button
            className="w-full md:w-auto px-5 py-2.5 rounded-lg text-sm font-medium border border-black bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300 snipcart-add-item"
            data-item-id={products.slug.current} // Ensure this is a valid unique identifier
            data-item-price={products.price}
            data-item-description={products.description}
            data-item-image={urlFor(products.image).url()} // Use urlFor to generate URL
            data-item-name={products.name}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
