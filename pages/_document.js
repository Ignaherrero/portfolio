// pages/_document.js

// import { ColorModeScript, theme, ThemeProvider } from "@chakra-ui/react";
// import NextDocument, { Html, Head, Main, NextScript } from "next/document";

// export default class Document extends NextDocument {
//   render() {
//     return (
//       <Html lang="en">
//         <Head />
//         <body>
//           <ColorModeScript initialColorMode={theme} />
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-PDG954ZBWB`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PDG954ZBWB', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
