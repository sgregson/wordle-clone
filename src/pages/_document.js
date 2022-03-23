import { Html, Head, Main, NextScript } from "next/document";
import { updateTheme } from "../useDarkMode";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <script
          id="dark-mode"
          dangerouslySetInnerHTML={{ __html: `(${updateTheme.toString()})()` }}
        />
      </Head>
      <body className="dark:text-white dark:bg-zinc-900">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
