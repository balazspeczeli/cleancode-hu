import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Illustration from '../assets/illustration.svg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>cleancode.hu</title>
        <meta
          name="description"
          content="Útmutató az olvasható és karbantartható kód írásához"
        />
      </Head>
      <main className={styles.main}>
        <Illustration width="400" />
        <h1 className={styles.title}>Fejlesztés alatt</h1>
      </main>
    </>
  );
};

export default Home;
