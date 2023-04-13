import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import CommonInfrastructure from "@/components/CommonInfrastructure";

export default function App({Component, pageProps}: AppProps) {
  return (
    <CommonInfrastructure>
      <Component {...pageProps} />
    </CommonInfrastructure>
  )
}
