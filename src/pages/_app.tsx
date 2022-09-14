import '../../styles/reset.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Layout } from '@components/common/layout/layout'
import type { AppProps } from 'next/app'

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
