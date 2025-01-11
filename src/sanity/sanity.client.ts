import { createClient, type ClientConfig } from "next-sanity";


const SanityClient:ClientConfig = {
    projectId:'lu5n0ucv',
    dataset:'production',
    apiVersion:'2024-12-28',
    useCdn:true
}
export default createClient(SanityClient)