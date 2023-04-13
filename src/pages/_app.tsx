import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import CommonInfrastructure from "@/components/CommonInfrastructure"
import {wrapper} from "@/store";

function App({Component, pageProps}: AppProps) {
  return (
    <CommonInfrastructure>
      <Component {...pageProps} />
    </CommonInfrastructure>
  )
}

export default wrapper.withRedux(App);
