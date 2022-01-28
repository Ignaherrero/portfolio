import {
  extendTheme,
  ThemeProvider,
  CSSReset,
  ColorModeScript,
  ChakraProvider,
  ColorModeProvider,
  theme,
} from "@chakra-ui/react";
import "../normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
