import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import 'styles.scss';

import { Container, Main, Sidebar } from 'components';

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>cleancode.hu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Útmutató az olvasható és karbantartható kód írásához"
        />
        <meta
          name="keywords"
          content="tiszta kód, szoftverfejlesztés, programozás"
        />
      </Head>
      <Container>
        <Sidebar currentPath={asPath} />
        <Main>
          <Component {...pageProps} />
        </Main>
      </Container>
    </>
  );
};

export default App;
