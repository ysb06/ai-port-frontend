import type { AppProps } from 'next/app'
import '/styles/globals.css'
import '/styles/bootstrap.css'
import '/styles/style.css'
import PageLayout from '../layouts/PageLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return  (
  <PageLayout>
    <Component {...pageProps} />
  </PageLayout>
  )
}
export default MyApp
