import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import Layout from '../layouts'


export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}