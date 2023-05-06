import baseAxios, { AxiosError } from "axios";
import { Asset, Entry } from "contentful";

import { ServicesResponse } from "@/interfaces/ServicesResponse";
import { handleApiErrors } from "./handleApiErrors";
import { Author, AuthorContentful } from "@/interfaces/Author";
import { getAssetById } from "./getAssets";

const spaceID: string = process.env.NEXT_PUBLIC_SPACE_ID || "";
const secretKey: string = process.env.NEXT_PUBLIC_DELIVERY_ACCES_TOKEN || "";
const environment: string = process.env.NEXT_PUBLIC_ENVIRONMENT || "";

export const getAuthorById = async (id: string): Promise<ServicesResponse> => {
  try {
    const API_URL_AUTHOR_BY_ID = `https://cdn.contentful.com/spaces/${spaceID}/environments/${environment}/entries/${id}?access_token=${secretKey}&content_type=author&locale=es-MX`;
    const { data }: { data: Entry<AuthorContentful> } = await baseAxios.get(
      API_URL_AUTHOR_BY_ID
    );
    const author: AuthorContentful = data.fields;

    const { data: authorImage }: { data: Asset } = await getAssetById(
      author.profilePicture.sys.id
    );

    const authorResponse: Author = {
      ...author,
      profilePicture: new URL(`https:${authorImage.fields.file.url}`),
    };

    const response: ServicesResponse = {
      error: false,
      data: authorResponse,
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
      return unknownError;
    }
  }
};
