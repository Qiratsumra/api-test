import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { Image, Slug } from "sanity";
import sanityClient from "@/sanity/sanity.client";
import { groq } from "next-sanity";

// Image URL builder
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
  return builder.image(source);
}

// Interface for Product
interface IProduct {
  name: string;
  image: Image;
  price: number;
  description: string;
  slug: Slug;
}

// Page Component
export default async function ProductList() {
  // Fetch data from Sanity
  const data: IProduct[] = await sanityClient.fetch(groq`*[_type=='product']`);
  console.log(data);

  return (
    <div className="font-sans py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-w-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
        {data.map((product) => (
          <Link href={`/products/${product.slug.current}`} key={product.slug.current}>
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src={urlFor(product.image).width(300).url()}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    {product.name}
                  </h3>
                  <h4 className="text-sm lg:text-base font-bold mt-2">
                    Rs.{product.price}
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
