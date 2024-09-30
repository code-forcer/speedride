// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
      rel="icon"
      href="/img/logo-land.svg"
      type="image/x-icon"
        />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Hebrew:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Hebrew:wght@100;200;300;400;500;600;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
    </Html>
  );
}
