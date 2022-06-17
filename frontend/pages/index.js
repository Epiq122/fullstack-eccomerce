import Head from 'next/head';
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../lib/query';

export default function Home() {
  // fetch products from strappi
  const [results] = useQuery({ query: PRODUCT_QUERY });

  const { data, fetching, error } = results;

  // check for data coming in

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no..{error.message}</p>;
  console.log(data);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Next JS</h1>
      </main>
    </div>
  );
}