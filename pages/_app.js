import '../styles/globals.css'
import Layout from '../components/Layout'
import Router from 'next/router';
import { useState } from 'react';
import Loader from '../components/Loader';
import { NextUIProvider } from '@nextui-org/react';

import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  const [isLoading, setIsLoading] = useState(false);
  Router.events.on('routeChangeStart', (url) => {
    setIsLoading(true);
  })
  Router.events.on('routeChangeComplete', (url) => {
    setIsLoading(false);
  })
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <Layout>
        {isLoading ? <Loader size='xl' css={{ color: '$black'}}/> : <Component {...pageProps} />}
        </Layout>
      </SessionProvider>
    </NextUIProvider>
  )
}

/**
 * `MyApp` is a function that returns a `NextUIProvider` component that wraps a `Layout` component that
 * wraps a `Loader` component that wraps a `Component` component
 * @returns A Layout component with a Loader component or a Component component.
 */
// function MyApp({ Component, pageProps }) {

//   return (
//     <NextUIProvider>
//       <Layout>
//       {isLoading ? <Loader size='xl' css={{ color: '$black'}}/> : <Component {...pageProps} />}
//       </Layout>
//     </NextUIProvider>
//   );
// }

//export default MyApp;

