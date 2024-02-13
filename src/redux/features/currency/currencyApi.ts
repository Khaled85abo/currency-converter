import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.jhsfkla.com",
  }),
  endpoints: (builder) => ({
    getCurrencyPrice: builder.query({
      query: () => "/",
    }),
    getAllPrices: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetCurrencyPriceQuery, useGetAllPricesQuery } = currencyApi;
