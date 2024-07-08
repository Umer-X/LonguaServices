import { createSlice } from "@reduxjs/toolkit";
import { validateFormFields } from "../validation";



const initialLoginState = {
  email: "",
  password: "",
  errors: {},
};


const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    validateLoginForm: (state) => {
      const errors = validateFormFields(state);
      state.errors = errors;
    },
    clearErrors: (state, action) => {
      const { field } = action.payload;
      if (field) {
        state.errors[field] = null;
      } else {
        state.errors = {};
      }
    },
  },
});

export const {
  setField,
  validateLoginForm,
  clearErrors,
} = loginSlice.actions;

const loginReducer = loginSlice.reducer;

export default loginReducer;
