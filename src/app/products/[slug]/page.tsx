"use client"
import { useParams } from "next/navigation"
import {groq} from  "next-sanity"
import ProductDetails from "../../components/ProductDetails";
import sanityClient from "@/sanity/sanity.client";

export default async function Product() {
    const {slug}:any= useParams();
    console.log(slug);
    
    const data=await sanityClient.fetch(groq ` *[_type == "product" ] `)
       console.log(data);
        
        const products=data.find((product:any)=>product.slug.current ===slug)
        console.log(products);
        
    
  return (
    <div>
        <ProductDetails products={products}/>
    </div>
  )
}
