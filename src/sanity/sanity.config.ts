import { defineConfig } from "sanity";
import { structureTool} from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./schema/index";

export const SanityConfig =defineConfig({
    name:'default',
    title:'/studio',
    projectId:'lu5n0ucv',
    dataset:'production',
    plugins:[structureTool(),visionTool()],
    basePath:'/studio',
    schema:{
        types:schema
    }
    
})