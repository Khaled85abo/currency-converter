import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../../config";
import { setCurrencies } from "./currencySlice";
export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.url,
  }),
  endpoints: (builder) => ({
    getDollarPrice: builder.query({
      query: () => `/latest.json?app_id=${config.APP_ID}`,
    }),
    getCurrencies: builder.query({
      query: () => "/currencies.json",
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          // Wait for the query to complete
          const { data } = await queryFulfilled;
          // Dispatch the setCurrencies action with the fetched data
          dispatch(setCurrencies(data));
        } catch (error) {
          // Handle any errors, if necessary
        }
      },
    }),
  }),
});

export const { useLazyGetDollarPriceQuery, useLazyGetCurrenciesQuery } =
  currencyApi;
