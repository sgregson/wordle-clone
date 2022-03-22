import Head from "next/head";
import { useState } from "react";
import Keyboard from "../components/keyboard";
export default function Home(props) {
  const [letters, setLetters] = useState([]);

  return (
    <>
      <Head>
        <title>wordle clone</title>
      </Head>

      <h1 className="text-4xl border-b-2 border-current pb-1 mb-1">
        Hello, Wordle
      </h1>
      <div className="mt-20 text-5xl">{letters.join("")}</div>
      <Keyboard
        logKey={(key) => {
          setLetters(letters.concat([key]));
        }}
      />
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
