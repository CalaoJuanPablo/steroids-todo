import { AppProps } from 'next/app'
import 'tachyons/css/tachyons.min.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
