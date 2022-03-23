// pages/_app.js
import Head from "next/head";
import Layout from "../layouts/app";
import "../globals.css";

export default function MyApp({ Component: PageComponent, pageProps = null }) {
  return (
    <Layout>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⌨️</text></svg>"
        />
      </Head>
      <PageComponent {...pageProps} />
    </Layout>
  );
}
