// pages/_document.js

import { ColorModeScript, theme, ThemeProvider } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
