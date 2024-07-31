export interface TypesTheme {
  fontSizes: {
    enter: {
      h1: string;
      h2: string;
      btn: string;
      p: string;
    };
    signup: {
      input: string;
      title: string;
      h3: string;
      btn: string;
      err: string;
    };
    dateSelect: {
      item: string;
    };
    user: {
      editBtn: string;
    };
  };
  colors: {
    mainBlack: string;
    mainWhite: string;
    darkGray: string;
    ligthGray: string;
    mainBlue: string;
    mainRed: string;
  };
}

export interface TypesFormSignUp {
  name: string;
  phone: string;
  email: string;
  password: string;
  repeatPass: string;
}

export interface TypesFormLogIn {
  login: string;
  password: string;
}

export type TypeDate = { month: string; day: string; year: string };

export interface PropsDateFilters {
  date: TypeDate;
  disabled: boolean;
  setDate: (value: { month: string; day: string; year: string }) => void;
}

export interface PropsDateSelect {
  date: TypeDate;
  type: 'month' | 'day' | 'year';
  setDate: (value: { month: string; day: string; year: string }) => void;
  target: string;
  setTarget: (value: string) => void;
}

export interface PropsLoading {
  text: string;
}

export interface TypeUser {
  data?: {
    number?: null | string;
    name?: string;
    secondName?: string;
    email?: string;
    gender?: string;
    date?: string;
    linkTG?: string;
    uid?: string;
    img?: string;
  };
}
