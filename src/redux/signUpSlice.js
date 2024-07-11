import { createSlice } from "@reduxjs/toolkit";
import { validateFormFields } from "../validation";

const initialSignUpState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  errors: {},
  user: null,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    validateSignUpForm: (state) => {
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setField, validateSignUpForm, clearErrors, setUser } = signUpSlice.actions;

const signUpReducer = signUpSlice.reducer;

export default signUpReducer;
