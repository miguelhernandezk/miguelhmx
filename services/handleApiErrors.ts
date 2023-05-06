import { AxiosError } from "axios";
import { ServicesResponse } from "@/interfaces/ServicesResponse";

export const handleApiErrors = (error: AxiosError): ServicesResponse => {
  let handledError: ServicesResponse;
  if (error.response) {
    handledError = {
      error: true,
      helperText:
        "The request was made and the server responded with a status code that falls out of the range of 2xx",
      data: {
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers,
        config: error.config,
      },
    };
  } else if (error.request) {
    handledError = {
      error: true,
      helperText: "The request was made but no response was received",
      data: { request: error.request, config: error.config },
    };
  } else {
    handledError = {
      error: true,
      helperText:
        "Something happened in setting up the request that triggered an Error",
      data: { errorMessage: error.message, config: error.config },
    };
  }
  return handledError;
};
