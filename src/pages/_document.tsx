import { Head, Html, Main, NextScript } from 'next/document';
import { defaultTheme } from 'hooks/useTheme';
import { getUserSetPreference, setThemeOnUI } from 'utils/theme';

const themeInitializerScript = `
  (function () {
    ${getUserSetPreference.toString()};
    ${setThemeOnUI.toString()};

    const userSetPreference = getUserSetPreference();
    setThemeOnUI(userSetPreference || ${defaultTheme});
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
