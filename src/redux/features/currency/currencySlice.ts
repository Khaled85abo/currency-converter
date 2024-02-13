import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { chosenCurrency: string } = {
  chosenCurrency: "",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.chosenCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
