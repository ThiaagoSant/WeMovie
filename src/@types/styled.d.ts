import "styled-components";

import { DEFAULT_THEME } from "../styles/theme";

type ThemeType = typeof DEFAULT_THEME;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
