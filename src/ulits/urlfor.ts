import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@/sanity/sanity.client";

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
