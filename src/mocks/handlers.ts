import { http } from "msw";
import { GET_USERS_API_URL } from "../utils/url";

export const handlers = [
  http.get(GET_USERS_API_URL, () => {
    console.log('Captured a "GET /posts" request');
  }),
];
