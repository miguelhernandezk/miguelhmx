import baseAxios, { AxiosError } from "axios";
import { Asset, Entry } from "contentful";

import { ServicesResponse } from "@/interfaces/ServicesResponse";
import { handleApiErrors } from "./handleApiErrors";

const spaceID: string = process.env.NEXT_PUBLIC_SPACE_ID || "";
const secretKey: string = process.env.NEXT_PUBLIC_DELIVERY_ACCES_TOKEN || "";
const environment: string = process.env.NEXT_PUBLIC_ENVIRONMENT || "";

export const getAssetById = async (id: string): Promise<ServicesResponse> => {
  try {
    const API_URL_ASSET_BY_ID: string = `https://cdn.contentful.com/spaces/${spaceID}/environments/${environment}/assets/${id}?access_token=${secretKey}`;
    const { data: asset }: { data: Asset } = await baseAxios.get(
      API_URL_ASSET_BY_ID
    );

    // Get SEO Data
    const response: ServicesResponse = {
      error: false,
      data: asset,
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
