type HandledApiError =
  | "The request was made and the server responded with a status code that falls out of the range of 2xx"
  | "The request was made but no response was received"
  | "Something happened in setting up the request that triggered an Error"
  | "There was an unknown error duirng execution time";

type CustomErrors = "We could not log you in";

export interface ServicesResponse {
  error: boolean;
  data: any;
  helperText: HandledApiError | CustomErrors | null;
}
