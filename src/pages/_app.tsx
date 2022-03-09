import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Container, Main, Sidebar } from 'components/layout';
import meta from 'content/meta.json';
import 'styles/global.scss';
import 'styles/one-light.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>cleancode.hu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
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
