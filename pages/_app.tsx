import '../styles/globals.css'
import Layout from '@/components/layout'

export default function MyApp({ Component, pageProps }: { Component: React.FunctionComponent, pageProps: Record<string, string> }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}