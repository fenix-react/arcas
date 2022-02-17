import Head from 'next/head';
import Header from '../components/header/Header';
import Page from '../components/page';

export default function Home() {
  return (
    <div>
      <Head>
        {' '}
        <title>QueeArt</title>
      </Head>
      <Header></Header>
      <Page></Page>
    </div>
  );
}
