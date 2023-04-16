import { Roboto } from 'next/font/google';

import Layout from '@/components/footer/layout/Layout'

import '@/styles/globals.scss'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  fallback: ['sans-sarif'],
})

export default function App({ Component, pageProps }) {
  return <Layout className={roboto.className}>
  <Component {...pageProps} />
  </Layout>




}
