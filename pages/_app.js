import '../styles/globals.css'
import Layout from '../components/Layout'
import Router from 'next/router';
import { useState } from 'react';
import Loader from '../components/Loader';
import { NextUIProvider } from '@nextui-org/react';
import spinner from '../public/images/spinner.svg';

function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setIsLoading(true);
  })
  Router.events.on('routeChangeComplete', (url) => {
    setIsLoading(false);
  })

  return (
    <NextUIProvider>
      <Layout>
      {isLoading ? <Loader size='xl' css={{ color: '$black'}}/> : <Component {...pageProps} />}
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;

