import { ThemeProvider } from "styled-components";
import { CartProvider } from "./context/CartContext";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";
import { DEFAULT_THEME } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyles />
      <CartProvider>
        <Routes />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
