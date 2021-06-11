import Head from "next/head";

export default function Helmet({ title = 'Home' }) {
  return (
    <Head>
      <title>Next Sanity Demo | {title}</title>
      <meta name="description" content="Next Sanity Demo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
