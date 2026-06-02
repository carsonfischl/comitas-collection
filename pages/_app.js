import '../styles/globals.css'
import '@mantine/core/styles.css'
import Layout from '../components/Layout'
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);
    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);
    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <MantineProvider>
      <SessionProvider session={session}>
        <Layout isLoading={isLoading}>
          <Component {...pageProps} />
        </Layout>
        <SpeedInsights />
      </SessionProvider>
    </MantineProvider>
  )
}
