import Head from "next/head";
import { useState } from "react";
import { Keyboard, GuessGrid } from "../components";
import { Giscus } from "@giscus/react";
import { getTheme } from "../useDarkMode";

export default function Home(props) {
  const [guesses, setGuesses] = useState([]);
  const [letters, setLetters] = useState([]);
  const theme = getTheme();
  return (
    <>
      <Head>
        <title>wordle clone</title>
      </Head>

      <div className="flex flex-col min-h-screen py-12">
        <h1 className="text-4xl border-b-2 border-current pb-1 mb-1">
          Hello, Wordle
        </h1>
        <GuessGrid letters={letters} guesses={guesses} />
        <Keyboard
          className="mt-auto"
          onKeyPress={(key) => {
            if (letters.length < 5) setLetters(letters.concat([key]));
          }}
          onDelete={() => {
            if (letters.length > 0) setLetters(letters.slice(0, -1));
          }}
          onSubmit={() => {
            if (letters.length === 5) {
              guesses.push(letters);
              // register a guess
              setGuesses(guesses);
              // clear the input
              setLetters([]);
            }
          }}
        />
      </div>

      <Giscus
        src="https://giscus.app/client.js"
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
        async
      />
    </>
  );
}

// export const getStaticProps = async (context) => {
//   // fetch content from special homepage

//   return {
//     props: {
//       // blocks,
//       // page,
//     },
//     revalidate: 5,
//   };
// };
