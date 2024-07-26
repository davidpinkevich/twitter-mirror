const ERRORS = {
  name: {
    minLength: 'Minimum length 3 characters',
    required: 'This field is required',
    pattern: 'Use only Latin letters. The first one must be capital without spaces',
  },
  phone: {
    required: 'This field is required',
    pattern: 'Enter the phone number with your area code. Use only numbers',
    minLength: 'Length is 11 characters',
    maxLength: 'Length is 11 characters',
  },
  email: {
    required: 'This field is required',
    pattern: 'Please enter your real email',
  },
  password: {
    required: 'This field is required',
    minLength: 'Password at least 6 characters',
    pattern: "Don't use spaces. Must have at least 2 capital letters and 1 number",
  },
};

export { ERRORS };
