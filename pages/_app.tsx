import type { AppProps } from 'next/app'
import PageLayout from '../layouts/PageLayout'
import wrapper from '../store'

import '/styles/globals.css'
import '/styles/bootstrap.css'
import '/styles/style.css'


function MyApp({ Component, pageProps }: AppProps) {
  return  (
  <PageLayout>
    <Component {...pageProps} />
  </PageLayout>
  )
}
export default wrapper.withRedux(MyApp)
