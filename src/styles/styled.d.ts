import 'styled-components';

import { type TypesTheme } from 'types';

declare module 'styled-components' {
  export interface DefaultTheme extends TypesTheme {}
}
