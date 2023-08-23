import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PropsRestaurante } from "../pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<PropsRestaurante[], void>({
      query: () => "restaurantes",
    }),
    getRestaurante: builder.query<PropsRestaurante, string | undefined>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
});

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api;

export default api;
