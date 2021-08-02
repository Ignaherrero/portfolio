import {
  theme,
  ThemeProvider,
  CSSReset,
  ColorModeScript,
} from "@chakra-ui/react";
import "../normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
