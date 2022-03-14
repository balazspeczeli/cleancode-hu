import { Head, Html, Main, NextScript } from 'next/document';
import {
  getPreference,
  getSystemPreference,
  getUserSetPreference,
  setThemeOnUI,
} from 'utils/theme';

const themeInitializerScript = `
  (function () {
    ${getUserSetPreference.toString()};
    ${getSystemPreference.toString()};
    ${getPreference.toString()};
    ${setThemeOnUI.toString()};

    const preference = getPreference();
    setThemeOnUI(preference);
  })();
`;

const Document = () => {
  return (
    <Html lang="hu">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
