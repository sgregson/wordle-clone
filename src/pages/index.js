import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>wordle clone</title>
      </Head>

      <h1 className="text-4xl border-b-2 border-current pb-1 mb-1">
        Hello, Wordle
      </h1>
    </>
  );
}

export const getStaticProps = async (context) => {
  // fetch content from special homepage

  return {
    props: {
      // blocks,
      // page,
    },
    revalidate: 5,
  };
};
