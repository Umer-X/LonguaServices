
const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validatePassword = (password) => {
    return password.length >= 6;
  };


                                                      // Validation For Form
export const validateFormFields = (state) => {
    const errors = {};
  
    if (!state.fullName) errors.fullName = 'Full Name is required';
    if (!state.email || !validateEmail(state.email)) errors.email = 'Valid Email is required';
    if (!state.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (!state.password || !validatePassword(state.password)) errors.password = 'Password must be at least 6 characters';
    if (state.password !== state.confirmPassword) errors.confirmPassword = 'Passwords do not match';
  
    return errors;
  };
  
   // Validation for Login Form

//   export const validateLoginFormFields = (state) => {
//     const errors = {};
  
//     if (!state.email || !validateEmail(state.email)) errors.email = 'Valid Email is required';
//     if (!state.phoneNumber) errors.phoneNumber = 'Phone Number is required';
//     if (!state.password || !validatePassword(state.password)) errors.password = 'Password must be at least 6 characters';
  
//     return errors;
//   };
  

  