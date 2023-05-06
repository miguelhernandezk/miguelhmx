import baseAxios, { AxiosError } from "axios";
import { Asset, Entry, EntryCollection } from "contentful";

import { ServicesResponse } from "@/interfaces/ServicesResponse";
import { handleApiErrors } from "./handleApiErrors";
import { BlogPost, BlogPostContentful } from "@/interfaces/BlogPost";
import { SEOMetadata } from "@/interfaces/SEOMetadata";
import { getSeoById } from "./getSeo";
import { getAssetById } from "./getAssets";
import { ContentfulImage } from "@/interfaces/Media";
import { Author } from "@/interfaces/Author";
import { getAuthorById } from "./getAuthor";
import {
  getAssetFromCollection,
  getEntryFromCollection,
} from "./getFromCollection";
import { parseBlogColletion } from "@/utils/parseResponse";

const spaceID: string = process.env.NEXT_PUBLIC_SPACE_ID || "";
const secretKey: string = process.env.NEXT_PUBLIC_DELIVERY_ACCES_TOKEN || "";
const environment: string = process.env.NEXT_PUBLIC_ENVIRONMENT || "";

const API_URL_BLOGPOSTS: string = `https://cdn.contentful.com/spaces/${spaceID}/environments/${environment}/entries?access_token=${secretKey}&content_type=blogPost&locale=es-MX&include=4`;

// const client: ContentfulClientApi = createClient({
//   space: spaceID,
//   accessToken: secretKey,
//   environment: environment,
// });

// const response = client
//   .getContentTypes() // Devuelve todas los modelos}

// const response2 = client
//   .getContentType("blogPost") // Devuelve el modelo y sus atributos

// const response3 = client.getEntries(); // Devuelve los objetos de todos los modelos

// const response3 = client.getEntry("78MCutmcaMU22WkK7Omakq"); // Devuelve el objeto con ID especificado

// const response3 = client
//   .getEntries("78MCutmcaMU22WkK7Omakq") // Devuelve el objeto con ID especificado

export const getPosts = async (): Promise<ServicesResponse> => {
  try {
    const { data }: { data: EntryCollection<BlogPostContentful> } =
      await baseAxios.get(API_URL_BLOGPOSTS);
    const blogPosts = parseBlogColletion(data);
    const response: ServicesResponse = {
      error: false,
      data: blogPosts,
      helperText: null,
    };
    return response;
  } catch (error) {
    if (baseAxios.isAxiosError(error)) {
      return handleApiErrors(error as AxiosError);
    } else {
      const unknownError: ServicesResponse = {
        error: true,
        data:
          error instanceof Error
            ? `${error.name}: ${error.message}`
            : "Unknown error",
        helperText: "There was an unknown error duirng execution time",
      };
      console.log("Entro a error");
      return unknownError;
    }
  }
};

// export const getPostById = async (id: string): Promise<ServicesResponse> => {
//   try {
//     const API_URL_BLOGPOST_BY_ID: string = `https://cdn.contentful.com/spaces/${spaceID}/environments/${environment}/entries/${id}?access_token=${secretKey}&content_type=blogPost&locale=es-MX`;
//     const { data: postData }: { data: Entry<BlogPost> } = await baseAxios.get(
//       API_URL_BLOGPOST_BY_ID
//     );
//     const blogPost: BlogPost = postData.fields;
//     console.log(postData);

//     // Get SEO
//     let seoPost: SEOMetadata | undefined;
//     if (blogPost.seo !== undefined) {
//       const { data: seoData }: { data: Entry<SEOMetadata> } = await getSeoById(
//         blogPost?.seo.sys.id
//       );
//       seoPost = seoData.fields;
//     } else {
//       seoPost = undefined;
//     }

//     // Get Highlight image
//     let highlightImagePost: ContentfulImage | undefined;
//     if (blogPost.highlightImage !== undefined) {
//       const { data: highlightData }: { data: Asset } = await getAssetById(
//         blogPost?.highlightImage.sys.id
//       );
//       highlightImagePost = highlightData.fields;
//     } else {
//       highlightImagePost = undefined;
//     }

//     // Get Author
//     const { data: authorData }: { data: AuthorResolved } = await getAuthorById(
//       blogPost.author.sys.id
//     );

//     const myPost: BlogPostResolved = {
//       ...blogPost,
//       seo: seoPost,
//       highlightImage:
//         highlightImagePost !== undefined
//           ? new URL(`https:${highlightImagePost.file.url}`)
//           : undefined,
//       author: authorData,
//     };

//     const response: ServicesResponse = {
//       error: false,
//       data: myPost,
//       helperText: null,
//     };
//     return response;
//   } catch (error) {
//     if (baseAxios.isAxiosError(error)) {
//       return handleApiErrors(error as AxiosError);
//     } else {
//       const unknownError: ServicesResponse = {
//         error: true,
//         data:
//           error instanceof Error
//             ? `${error.name}: ${error.message}`
//             : "Unknown error",
//         helperText: "There was an unknown error duirng execution time",
//       };
//       return unknownError;
//     }
//   }
// };

export const getPostBySlug = async (
  slug: string
): Promise<ServicesResponse> => {
  try {
    const API_URL_BLOGPOST_BY_ID: string = `https://cdn.contentful.com/spaces/${spaceID}/environments/${environment}/entries?access_token=${secretKey}&content_type=blogPost&fields.slug[match]=${slug}&locale=es-MX`;

    const { data: postData }: { data: EntryCollection<BlogPostContentful> } =
      await baseAxios.get(API_URL_BLOGPOST_BY_ID);
    const blogPost: BlogPost = parseBlogColletion(postData)[0];
    const response: ServicesResponse = {
      error: false,
      data: blogPost,
      helperText: null,
    };
    return response;
  } catch (error) {
    if (baseAxios.isAxiosError(error)) {
      return handleApiErrors(error as AxiosError);
    } else {
      console.log(error);
      const unknownError: ServicesResponse = {
        error: true,
        data:
          error instanceof Error
            ? `${error.name}: ${error.message}`
            : "Unknown error",
        helperText: "There was an unknown error duirng execution time",
      };
      return unknownError;
    }
  }
};
