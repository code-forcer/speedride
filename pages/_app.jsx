import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.css';

import { ThemeProvider } from '../context/ThemeContext';
NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return(
  <>
   <Head> 
        <meta content="" name="keywords"/>
        <meta content="Speedoff | move in kilometers with " name="description" />
        <meta name="theme-color" content="#333" />
        <meta name="description"
        content="Speed ride, first car driver company in algeria" />
        <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
        <title>Speedoff | buy kilometer and ride</title>
   </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>);
}
export default MyApp;
