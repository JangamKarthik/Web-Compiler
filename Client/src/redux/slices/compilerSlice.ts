import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface compilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
  currentCode: string;
}

const initialState: compilerSliceStateType = {
  fullCode: {
    html: "this is a html code",
    css: "this is a css code",
    javascript: "this is a js code",
  },
  currentLanguage: "html",
  currentCode: "",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;
