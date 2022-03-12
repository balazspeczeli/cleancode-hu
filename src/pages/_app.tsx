import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Container, Main, Sidebar, Topbar } from 'components/layout';
import meta from 'content/meta.json';
import 'styles/global.scss';
import 'styles/one-light.scss';
import { useState } from 'react';
import { AppContext, defaultState } from 'context/state';

const App = ({ Component, pageProps }: AppProps) => {
  const [context, setContext] = useState(defaultState);

  return (
    <AppContext.Provider value={{ context, setContext }}>
      <Head>
        <title>cleancode.hu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>
      <Topbar />
      <Container>
        <Sidebar />
        <Main>
          <Component {...pageProps} />
        </Main>
      </Container>
    </AppContext.Provider>
  );
};

export default App;
