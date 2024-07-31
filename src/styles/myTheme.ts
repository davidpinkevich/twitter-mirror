import { type DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  fontSizes: {
    enter: {
      h1: '84px',
      h2: '42px',
      btn: '20px',
      p: '16px',
    },
    signup: {
      input: '18px',
      title: '30px',
      h3: '18px',
      btn: '18px',
      err: '32px',
    },
    dateSelect: {
      item: '18px',
    },
    user: {
      editBtn: '18px',
    },
  },
  colors: {
    mainBlack: '#000000',
    mainWhite: '#FFFFFF',
    ligthGray: '#E4EAED',
    darkGray: '#666666',
    mainBlue: '#1DA1F2',
    mainRed: '#cf0404',
  },
};

export { myTheme };
