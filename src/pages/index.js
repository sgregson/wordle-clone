import Head from "next/head";
import { useState } from "react";
import Keyboard from "../components/keyboard";
import { Giscus } from "@giscus/react";
import { getTheme } from "../useDarkMode";


export default function Home(props) {
  const [letters, setLetters] = useState([]);
  const theme = getTheme();
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
      
      <Giscus src="https://giscus.app/client.js"
        repo="sgregson/wordle-clone"
        repoId="R_kgDOHDAmOA"
        category="Site Chat"
        categoryId="DIC_kwDOHDAmOM4COOPc"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === "auto" ? "preferred_color_scheme" : theme}
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
        async />
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
