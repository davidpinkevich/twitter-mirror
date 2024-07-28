import { type TypesTheme } from 'types';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends TypesTheme {}
}
