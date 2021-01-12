import { AppProps } from "next/app";
import Head from "next/head";

import "src/globals.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f70502" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#f70502" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
