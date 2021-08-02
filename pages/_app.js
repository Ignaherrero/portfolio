import {
  theme,
  ThemeProvider,
  CSSReset,
  ColorModeScript,
} from "@chakra-ui/react";
import "../normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      theme={theme}
      initialColorMode={theme.config.initialColorMode}
    >
      <CSSReset />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
