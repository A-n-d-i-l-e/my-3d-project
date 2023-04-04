import Content from '@/components/Content';
import Navbar from '@/components/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My 3D Model</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
  
      <Navbar />
      <Content />
    </div>
  );
};

export default Home;
