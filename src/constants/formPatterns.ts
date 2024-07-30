const PATTERNS = {
  name: { required: true, minLength: 3, pattern: /^[A-Z][a-z]{2,}$/ },
  number: { required: true, minLength: 11, maxLength: 11 },
  email: {
    required: true,
    pattern: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
  },
  pass: {
    required: true,
    minLength: 6,
    pattern: /^(?=.*[A-Z])(?=.*[0-9]).*[^ ]+$/,
  },
  repeatPass: {
    required: true,
    minLength: 6,
    pattern: /^(?=.*[A-Z])(?=.*[0-9]).*[^ ]+$/,
  },
  login: {
    required: true,
    validate: (value: string) => {
      if (value.match(/^\d{11}$/) || value.match(PATTERNS.email.pattern)) {
        return true;
      }
      return false;
    },
  },
};

export { PATTERNS };
