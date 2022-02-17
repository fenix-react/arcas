import Head from 'next/head';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <div>
      <Head>
        {' '}
        <title>Create Next App</title>
      </Head>
      <Header></Header>
    </div>
  );
}
