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
      headerName: string;
      createTweet: string;
    };
    home: {
      name: string;
    };
    tweet: {
      h2: string;
      p: string;
    };
    logout: {
      text: string;
      btn: string;
    };
    menu: string;
  };
  colors: {
    mainBlack: string;
    mainWhite: string;
    darkGray: string;
    middleGray: string;
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

export interface TypesFormModal {
  name: string;
  secondName: string;
  password: string;
  linkTG: string;
  gender: TypeGenders;
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

export type TypeTweet = {
  text: string;
  id: number;
  timestamp: number;
  image: string | null;
};

export interface TypeUser {
  number?: null | string;
  name?: string;
  secondName?: string;
  email?: string;
  gender: TypeGenders;
  date?: string;
  linkTG?: string;
  uid?: string;
  photo?: string;
  tweets: Array<TypeTweet>;
}

export type TypeGenders = 'female' | 'male' | 'secret';

export interface PropsEditButton {
  changeModal: () => void;
}

export interface PropsUserModal {
  user: TypeUser;
  changeModal: () => void;
}

export interface PropsUserInfo {
  user: TypeUser;
  viewModal: boolean;
  changeViewModal: () => void;
}

export interface PropsUserHeader {
  name: string | undefined;
}

export interface PropsCreateTweet {
  user: TypeUser;
  uid: string;
  addNewTweet: (value: TypeTweet) => void;
}

export interface PropsTweet {
  tweet: TypeTweet;
  user: TypeUser;
  deleteTweet: (id: number) => void;
}
