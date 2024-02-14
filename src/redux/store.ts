import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./features/currency/currencySlice";
import { currencyApi } from "./features/currency/currencyApi";
import themeSlice from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    theme: themeSlice,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
